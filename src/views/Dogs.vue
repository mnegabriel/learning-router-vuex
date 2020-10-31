<template>
  <div>
    <h1>Dog list</h1>
    <b-table striped hover :items="dogs">

      <template #cell(name)="data">
        <router-link :to="`/pets/dogs/${data.index}`">{{ data.value }}</router-link>
      </template>
    </b-table>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'Dogs',
  data () {
    return { }
  },
  computed: {
    ...mapState([
      'dogs'
    ])
  }
}
</script>
