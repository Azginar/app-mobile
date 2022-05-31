export const state = () => ({
  allowCountries: {},
  envState: {
    devEnv: false
  }
})

export const mutations = {
  changeAllowCountries (state, countries) {
    state.allowCountries = countries
  },
  loadEnv (state, value) {
    state.envState.devEnv = value
  }
}

export const actions = {
  loadAllowCountriesToStore ({ commit }, countries) {
    commit('changeAllowCountries', countries)
  }
}
