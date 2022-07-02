<template>
  <div class="userForm">
        <label>BeforeCreateLh</label>
        {{x}}
  </div>
</template>

<script>
export default {
  name: 'BeforeCreateLh',
  data () {
    return {
      msg: ''
    }
  },
    beforeCreate () {
      console.log('before created called.')
    },
  created () {
    console.log('created  lifecycle hook called....')
  },
    beforeMount () {
      console.log('before mount called')
    },
  mounted () {
    console.log(' mount called')
    localStorage.setItem("name","Amit")
  },
  beforeUpdate () {
     
    console.log('before update called')
  },
  beforeUnmount(){
      console.log("before unomoutn is called")
  },
  unmounted(){
      console.log("unmounted methoed is called")
        localStorage.removeItem("name")
        localStorage.clear()
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
