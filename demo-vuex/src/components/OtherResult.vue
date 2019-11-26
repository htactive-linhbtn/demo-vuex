<template>
  <div>
    <p >Count : {{doubleCount}}</p>
    <p >Click : {{stringClick}}</p>
  </div>
</template>

<script>
import {mapGetters} from 'vuex';
export default {
  computed: {
    ...mapGetters([
      'doubleCount',
      'stringClick'
    ]),
    
  },
}
</script>