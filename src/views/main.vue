<template>
  <div>
    <h1>{{ msg }}</h1>
    <h2>Essential Links</h2>
    <ul>
      <li id="new-name" @click="startNewGame">New game</li>
      <li><a href="http://setgame.com/set/daily_puzzle" target="_blank">Daily Set Puzzle</a></li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'main',
  methods: {
    startNewGame: function(){
      // route to the new game page
      this.$router.push({path:'new-game'}); 
      console.log('hi plz start game'); 
      // return 'start a new game please'; 
    }
  },
  data () {
    return {
      msg: 'Welcome to the wonderful game of Set!'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
  width: 150px; 
  background-color: purple; 
  color: white; 
  height: 30px;
  border-radius: 5px;
  cursor: pointer;
}

a {
  color: #42b983;
}
</style>
