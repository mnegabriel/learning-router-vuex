export default {
  countAnimals: (state) => {
    return state.cats.length + state.dogs.length
  }
}
