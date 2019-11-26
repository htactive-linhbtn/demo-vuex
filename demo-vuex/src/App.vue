<template>
<div id="app">
  <h1>Demo Vuex</h1>
  <appResult></appResult>
  <appOtherResult></appOtherResult>
  <appOtherCount></appOtherCount>
  <appCount></appCount>
</div>
</template>

<script>
import Count from './components/Count'
import Result from './components/Result'
import OtherResult from './components/OtherResult'
import OtherCount from './components/OtherCount'

export default {
  name: 'app',
  components: {
    appCount: Count,
    appResult: Result,
    appOtherResult: OtherResult,
    appOtherCount : OtherCount
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
