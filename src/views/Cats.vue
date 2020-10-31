<template>
  <div>
    <PetTable spieces="cats" :pets='cats'/>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import PetTable from '@/components/PetTable'

export default {
  name: 'Cats',
  computed: {
    ...mapState([
      'cats'
    ])
  },
  components: {
    PetTable
  }
}
</script>
