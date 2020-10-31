export default {
  addPet: ({ commit }, petPayload) => {
    commit('appendPet', petPayload)
  }
}
