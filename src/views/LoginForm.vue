<template>
    <div id="LoginForm">
            <h1> {{loginMsg}} </h1>

            <!-- Display Form Data -->
            <div v-if="isSubmit">
             User Name: {{loginFormData.username}}<br/>
              Passowrd : {{loginFormData.password}}<br/>
               Message Description: {{loginFormData.messageDescription}}<br/>
            </div>
            <!-- Login Form --> 
            <div id="submitLoginForm" v-else>
                 <v-input/>
                 <v-password/>
                <v-textarea/>
                 <button @click="submitLogin"> Submit</button>
            </div>
           
    </div>
</template>

<script>
import VInput from '../components/VInput.vue'
import VPassword from '../components/VPassword.vue'
import VTextarea from '../components/VTextArea.vue'


export default {
  name: 'LoginForm',
  data () {
    return {
      loginMsg: 'Login',
      loginFormData: {},
      isSubmit: false
    }
  },
  methods: {
    submitLogin () {
      this.isSubmit = true
      console.log('loginFormData', this.loginFormData)
    }
  },
  components:{
      'v-input': VInput,
      'v-password': VPassword,
      'v-textarea':VTextarea
  }
}
</script>

<style scoped>
    /* #LoginForm{
        background:green
    } */
</style>
