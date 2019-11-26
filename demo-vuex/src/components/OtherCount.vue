<template>
<div>
  <div>
    <!-- <b-button variant="success" @click="increment" class="mx-1">Increment</b-button> -->
    <b-button variant="success" @click="asyncIncrement({by: 50 , duration: 500})" class="mx-1">Increment</b-button>
    <b-button variant="danger" @click="asyncDecrement({by: 50 , duration: 500})" class="mx-1">Decrement</b-button>
  </div>
</div>
</template>

<script>
// import {mapMutations} from 'vuex'
import {mapActions} from 'vuex'
export default {
  methods: {
    // ...mapMutations([
    //   'increment',
    //   'decrement'
    // ])
    ...mapActions([
      'asyncIncrement',
      'asyncDecrement'
    ])
  },
}
</script>
