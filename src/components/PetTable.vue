<template>
  <div>
    <h1>{{header}} list</h1>
    <b-table striped hover :items="pets">
        <template #cell(name)="data">
          <router-link :to="`/pets/${spieces}/${data.index}`">{{ data.value }}</router-link>
        </template>
    </b-table>
  </div>
</template>

<script>
export default {
  name: 'PetTable',
  props: [
    'spieces',
    'pets'
  ],
  computed: {
    header () {
      return this.spieces.charAt(0).toUpperCase() + this.spieces.slice(1)
    }
  }
}
</script>
