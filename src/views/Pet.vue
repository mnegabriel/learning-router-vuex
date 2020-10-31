<template>
  <div class="pet">
    <h1>{{ animal.name }} ({{ $route.params.spieces}})</h1>
    <p>Age: {{ animal.age }} years old</p>
    <p>Breed: {{ animal.breed }}</p>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'Pet',
  data () {
    return {
      animal: {}
    }
  },
  computed: {
    ...mapState([
      'cats',
      'dogs'
    ])
  },
  mounted () {
    const animal = this[this.$route.params.spieces][this.$route.params.id]
    this.animal = animal
  }
}
</script>
