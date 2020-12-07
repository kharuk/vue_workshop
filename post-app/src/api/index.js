import * as fb from '../firebase';

export const getPosts = async () => {
  let postsArray = [];
  await fb.postsCollection
    .orderBy('createdOn', 'desc')
    .get()
    .then((querySnapshot) => {
      querySnapshot.forEach((doc) => {
        let post = doc.data();
        post.id = doc.id;
        postsArray.push(post);
      });
    });
  return postsArray;
};

export const getPostById = (id) => {
  return fb.postsCollection
    .doc(id)
    .get()
    .then((doc) => {
      let post = doc.data();
      post.id = doc.id;
      return post;
    })
    .catch(function(error) {
      console.log('Error getting document:', error);
    });
};

export const addPost = async ({ title, body, imgUrl }) => {
  let postId;
  const user = await fetchUserProfile(fb.auth.currentUser.uid);
  return fb.postsCollection
    .add({
      createdOn: new Date(),
      title,
      body,
      imgUrl,
      comments: 0,
      likes: 0,
      userId: fb.auth.currentUser.uid,
      userName: user.name,
    })
    .then((docRef) => {
      postId = docRef.id;
      return docRef.get();
    })
    .then((doc) => {
      const post = doc.data();
      post.id = postId;
      return post;
    });
};

export const deletePost = (id) => {
  return fb.postsCollection
    .doc(id)
    .delete()
    .catch(function(error) {
      console.error('Error removing document: ', error);
    });
};

export const editPost = async ({ title, body, id, imgUrl }) => {
  await fb.postsCollection.doc(id).update({
    title,
    body,
    imgUrl,
  });
  return getPostById(id);
};

export const getCommentsByPostId = async (id) => {
  let comments = [];
  const docs = await fb.commentsCollection.where('postId', '==', id).get();

  docs.forEach((doc) => {
    let comment = doc.data();
    comment.id = doc.id;
    comments.push(comment);
  });

  return comments;
};

export const addComment = async ({ postId, comment }) => {
  let commentId;
  const user = await fetchUserProfile(fb.auth.currentUser.uid);
  const createdComment = await fb.commentsCollection
    .add({
      createdOn: new Date(),
      content: comment,
      postId: postId,
      userId: fb.auth.currentUser.uid,
      userName: user.name,
    })
    .then((docRef) => {
      commentId = docRef.id;
      return docRef.get();
    })
    .then((doc) => {
      const comment = doc.data();
      comment.id = commentId;
      return comment;
    });
  const post = await getPostById(postId);
  await fb.postsCollection.doc(postId).update({
    comments: parseInt(post.comments) + 1,
  });

  const updatedPost = await getPostById(postId);
  return { createdComment, commentsCount: updatedPost.comments };
};

export const likePost = async ({ id, likes }) => {
  const userId = fb.auth.currentUser.uid;
  const docId = `${userId}_${id}`;

  const doc = await fb.likesCollection.doc(docId).get();
  if (doc.exists) {
    await fb.likesCollection.doc(docId).delete();
    await fb.postsCollection.doc(id).update({
      likes: likes - 1,
    });
  } else {
    await fb.likesCollection.doc(docId).set({
      postId: id,
      userId: userId,
    });

    await fb.postsCollection.doc(id).update({
      likes: likes + 1,
    });
  }

  const updatedPost = await getPostById(id);
  return updatedPost.likes;
};

export const login = (form) => {
  return fb.auth.signInWithEmailAndPassword(form.email, form.password);
};

export const signup = async (form) => {
  const { user } = await fb.auth.createUserWithEmailAndPassword(form.email, form.password);
  await fb.usersCollection.doc(user.uid).set({
    name: form.name,
  });
  return user;
};

export const fetchUserProfile = (id) => {
  return fb.usersCollection
    .doc(id)
    .get()
    .then((doc) => doc.data());
};

export const logout = () => {
  return fb.auth.signOut();
};
