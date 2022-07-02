<template>
    <div>
        Watchers<br/>
            {{count}} <br/>
            <input type="text" v-model="name" /><br/>
            <button @click="count = count+1" > Increment </button><br/>
            <button @click="count = count-1" > Decrement </button>
    </div>
</template>

<script>

export default {
  name: 'Watchers',
  data () {
    return {
      count: 0,
      name: ''
    }
  },
  watch: {
    count () {
      alert('Count has been changed')
    },
    name () {
      console.log('name.....', this.name)
    }
  }
}
</script>
<style scoped>

</style>
