export default {
  appendPet: (state, { spieces, pet }) => {
    state[spieces].push(pet)
  }
}
