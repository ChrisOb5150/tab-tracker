<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h2>This is blank</h2>

  </div>
</template>

<script>
export default {
  name: 'blank',
  data () {
    return {
      msg: 'Setting up a boiler plate blank file'
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
}
a {
  color: #42b983;
}
</style>
