<template>
    <div>
        Event <br/>
        <button v-on:click="getData('Button Clicked')"> Single Click </button> <!--@click or v-on:click both are same-->
        <br/>
        <button @dblclick="getDoubleClick('Dobulce click event callled')"> Double Click </button>
        <br/>
        <h1 @mouseover="getPrint()"> Mouse Hover </h1>
        <br/>
        {{count}}
    </div>
</template>

<script>

export default {
  name: 'Event',
  data () {
    return {
      count: 0
    }
  },
  methods: {
    getData (data) {
      console.log('Get data.....', data)
    },
    getDoubleClick (data) {
      console.log(data)
    },
    getPrint () {
      console.log('')
      this.count = this.count + 1;
    }
  }
}
</script>
<style scoped>

</style>
