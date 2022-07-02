<template>
    <div>
        <label>{{msg}}</label> <br/>
        User: {{user}}<br/>
        <input type="text" v-model="firstName"/>
        <input type="text" v-model="lastName"/>
        <VInput />
        <button @click="getUserData(getPersonCompleteName())"> Click User</button>
    </div>
</template>

<script>
import VInput from './VInput.vue'
export default {
  name: 'Child2',
  data () {
    return {
      msg: 'Child 2',
      firstName: '',
      lastName: '',
      getPersonCompleteName: function () {
        return this.firstName + ' ' + this.lastName
      }
    }
  },
  components:{
      VInput
  },
  props: {
    user: Object,
    getUserData: Function
  }
}
</script>
<style scoped>

</style>
