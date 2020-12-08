
<template>
  <transition name="fade">
    <div v-if="showPostModal" class="p-modal">
      <div class="p-container">
        <v-btn text class="close" @click="closeModal">{{
          $t("posts.close")
        }}</v-btn>
        <validation-observer ref="observer" v-slot="{ invalid }">
          <form @submit.prevent="submit" class="form__wrapper">
            <validation-provider
              v-slot="{ errors }"
              :name="$t('form.label.title')"
              rules="required|max:20"
            >
              <v-text-field
                filled
                v-model="title"
                :counter="20"
                :error-messages="errors"
                :label="$t('form.label.title')"
                required
              ></v-text-field>
            </validation-provider>

            <validation-provider
              v-slot="{ errors }"
              :name="$t('form.label.body')"
              rules="required"
            >
              <v-textarea
                filled
                v-model="body"
                :error-messages="errors"
                :label="$t('form.label.body')"
                required
              ></v-textarea>
            </validation-provider>

            <v-text-field
              filled
              v-model="imgUrl"
              :label="$t('form.label.imgUrl')"
            ></v-text-field>
            <v-btn class="mr-4" type="submit" :disabled="invalid">
              {{ $t("form.submit") }}
            </v-btn>
          </form>
        </validation-observer>
      </div>
    </div>
  </transition>
</template>

<script>
import { ValidationObserver, ValidationProvider } from "vee-validate";
import { mapActions, mapGetters } from "vuex";

export default {
  name: "PostModal",
  props: {
    showPostModal: Boolean,
  },
  components: {
    ValidationProvider,
    ValidationObserver,
  },
  data: () => ({
    title: "",
    body: "",
    imgUrl: "",
  }),
  computed: {
    ...mapGetters(["editablePost"]),
  },
  watch: {
    editablePost() {
      if (this.editablePost) {
        this.title = this.editablePost.title;
        this.body = this.editablePost.body;
        this.imgUrl = this.editablePost.imgUrl;
      }
    },
  },
  methods: {
    ...mapActions(["addPost", "setEditMode", "updatePost", "sesModalMode"]),
    clear() {
      this.title = "";
      this.body = "";
      this.imgUrl = "";
    },
    closeModal() {
      this.clear();
      this.sesModalMode(false);
      if (this.editablePost) {
        this.setEditMode(null);
      }
    },
    submit() {
      this.$refs.observer.validate();
      if (this.editablePost) {
        this.updatePost({
          id: this.editablePost.id,
          title: this.title,
          body: this.body,
          imgUrl: this.imgUrl,
        });
      } else {
        this.addPost({
          title: this.title,
          body: this.body,
          imgUrl: this.imgUrl,
        });
      }

      this.closeModal();
    },
  },
};
</script>
