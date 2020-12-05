export default {

  tickersAvailable(state) {
    return state.currentTickers !== null;
  },

  currentTickers(state) {
    if (!state.currentTickers) {
      return [];
    }
    return (state.currentTickers.tickers || []).map(({base, target, volume, last}) => ({base, target, volume, last}))
  },

  coinsList(state) {
    return state.coins.slice(400, 900);
  }
}