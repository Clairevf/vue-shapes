<template>
  <div class="card-container">
    <table>
      <!-- <tr v-for="row in cards">
        <td :bind="" v-for"card in onTable">{{card}}</td>
      </tr> -->
    </table>
  </div>
</template>

<script>
let deck = require('./data/deck.js'); 

export default {
  name: 'main',
  data () {
    return {
      onTable: {}, 
      deck: {

      },
      card: {},
      msg: 'Welcome to the wonderful game of Set!'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

td {
  border: solid 1px black;
}

</style>
