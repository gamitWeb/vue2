<template>
    <div>
        Form<br/>
        <input type="text" ref="name"/>
        <button @click="getData"> Get Data</button>
    </div>
</template>

<script>

export default {
  name: 'Form1',
  data () {
    return {
      count: 0
    }
  },
  methods: {
    getData () {
      const name = this.$refs.name.value
      this.$refs.name.focus()
      console.log('this.refs....', this.$refs)
      console.log('get Data is printed', name)
    }
  }
}
</script>
<style scoped>

</style>
