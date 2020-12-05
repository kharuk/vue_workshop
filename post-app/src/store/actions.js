export default {
  loadCoins(ctx) {
    fetch(`https://api.coingecko.com/api/v3/coins/list`)
      .then((res) => res.json())
      .then((list) => {
        ctx.commit('setCoinsList', list)
      })
  },

  loadMore(ctx, {id}) {
    return fetch(`https://api.coingecko.com/api/v3/coins/${id}`)
      .then((res) => res.json())
      .then((data) => {
        ctx.commit('setCoinData', {id, data});
        return data;
      })
  },

  showTickers(ctx, {id}) {
    fetch(`https://api.coingecko.com/api/v3/coins/${id}/tickers`)
      .then((res) => res.json())
      .then((data) => {
        ctx.commit('setCurrentTickers', data)
      })
  }
}