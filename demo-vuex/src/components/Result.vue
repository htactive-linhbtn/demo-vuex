<template>
  <div>
    <p>Count : {{count}}</p>  
  </div>
</template>

<script>
export default {
  computed: {
    count(){
      return this.$store.getters.doubleCount
    }
  },
}
</script>