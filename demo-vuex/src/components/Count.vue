<template>
<div>
  <b-button variant="success" @click="increment(100)" class="mx-1">Increment</b-button>
  <b-button variant="danger" @click="decrement(50)" class="mx-1">Decrement</b-button>
</div>
</template>

<script>
import {mapActions} from 'vuex'
export default {
  methods: {  
    ...mapActions([
      'increment',
      'decrement'
    ])
  },
}
</script>
