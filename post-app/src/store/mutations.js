export default {

  setCoinsList(state, list) {
    state.coins = list;
  },

  setCoinData(state, {id, data}) {
    state.coins.find((coin) => coin.id === id).data = data;
  },

  setCurrentTickers(state, tickers) {
    state.currentTickers = tickers;
  },

  dropTickers(state) {
    state.currentTickers = null;
  }

}