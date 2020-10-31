<template>
  <div class="home">
    <h1>Adopt a pet today!</h1>
    <h2>{{countAnimals}} awaiting adoption</h2>
    <button
      class="btn btn-primary"
      @click='togglePetForm'
    >Add new pet</button>

    <b-form @submit.prevent="handleSubmit" @reset='resetForm' v-if="showPetForm">

      <b-form-group id="input-group-1" label="Pet's Name:" label-for="input-1">
        <b-form-input
          id="input-1"
          v-model="form.name"
          required
          placeholder="Enter name"
        ></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-2" label="Pet's age:" label-for="input-2">
        <b-form-input
        type='number'
          id="input-2"
          v-model="form.age"
          required
          placeholder="Enter age"
        ></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-3" label="Gender:" label-for="input-3">
        <b-form-select
          id="input-3"
          v-model="form.gender"
          :options="[{ text: 'Choose...', value: null }, { text: 'Female', value: 'female' }, { text: 'Male', value: 'male' }]"
          :value="null"
          required
        ></b-form-select>
      </b-form-group>

      <b-form-group id="input-group-4" label="Spieces:" label-for="input-4">
        <b-form-select
          id="input-4"
          v-model="form.spieces"
          :options="[{ text: 'Choose...', value: null }, { text: 'Cat', value: 'cats' }, { text: 'Dog', value: 'dogs' }]"
          :value="null"
          required
        ></b-form-select>
      </b-form-group>

      <b-form-group id="input-group-5" label="Breed:" label-for="input-5">
        <b-form-input
          id="input-5"
          v-model="form.breed"
          required
          placeholder="Enter breed"
        ></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-6" label="Color:" label-for="input-6">
        <b-form-input
          id="input-6"
          v-model="form.color"
          required
          placeholder="Enter color"
        ></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-7" label="Pet's weight:" label-for="input-7">
        <b-form-input
        type='number'
          id="input-7"
          v-model="form.weight"
          required
          placeholder="Enter weight"
        ></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-8" label="Location:" label-for="input-8">
        <b-form-input
          id="input-8"
          v-model="form.location"
          required
          placeholder="Enter location"
        ></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-9" label="Notes:" label-for="input-9">
        <b-form-input
          id="input-9"
          v-model="form.notes"
          placeholder="Enter notes"
        ></b-form-input>
      </b-form-group>

      <b-button type="submit" variant="primary">Submit</b-button>
      <b-button type="reset" variant="danger">Reset</b-button>
    </b-form>
    <b-card class="mt-3" header="Form Data Result">
      <pre class="m-0">{{ form }}</pre>
    </b-card>

  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

export default {
  name: 'Home',
  data () {
    return {
      showPetForm: false,
      form: {
        name: '',
        age: 0,
        gender: null,
        spieces: null,
        breed: '',
        color: '',
        weight: 0,
        location: '',
        notes: ''
      }
    }
  },
  computed: {
    ...mapGetters([
      'countAnimals'
    ])
  },
  methods: {
    ...mapActions([
      'addPet'
    ]),
    togglePetForm () {
      this.showPetForm = !this.showPetForm
    },
    resetForm () {
      this.form = {
        name: '',
        age: 0,
        gender: null,
        spieces: null,
        breed: '',
        color: '',
        weight: 0,
        location: '',
        notes: ''
      }
    },
    handleSubmit () {
      const { spieces, ...rest } = this.form

      const petPayload = {
        spieces,
        pet: rest
      }

      this.addPet(petPayload)
      this.togglePetForm()
      this.resetForm()
    }
  }
}
</script>
