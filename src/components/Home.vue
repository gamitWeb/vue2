<template>
    <div>
        <nav-bar>
        </nav-bar>
    </div>
</template>

<script>

import Navbar from './NavBar.vue'

export default {
  name: 'Home',
  data () {
    return {
      msg: 'Home',
      user: {
        personName: 'Ajay',
        email: 'ajaysingha@gmail.com'
      },
      getPersonLastName: function (a) {
        return a
      }
    }
  },
  methods: {
   
  },
  components: {
   'nav-bar':Navbar
  }
}
</script>
<style scoped>

</style>
