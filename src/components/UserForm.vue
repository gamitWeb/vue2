<template>
  <div class="userForm">
    <h1>{{ msg }}</h1>
    <h2>Login</h2>
    <input type="text" value="vuejs">
  </div>
</template>

<script>
export default {
  name: 'UserForm',
  data () {
    return {
      msg: 'User Form Login Amit'
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
