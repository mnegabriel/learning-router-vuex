<template>
  <div>
    <PetTable spieces="dogs" :pets='dogs'/>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import PetTable from '@/components/PetTable'

export default {
  name: 'Dogs',
  computed: {
    ...mapState([
      'dogs'
    ])
  },
  components: { PetTable }
}
</script>
