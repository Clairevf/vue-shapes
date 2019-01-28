<template>
  <div> 
      <h2>{{msg}}</h2>
  </div>
</template>

<script>
export default {
  name: 'newGameView',
  methods: {
    
  },
  data () {
    return {
        msg: 'Play a new game with us!'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
</style>