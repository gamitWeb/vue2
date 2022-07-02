<template>
    <div>
        Computed<br/>
      Computed property-   {{getSum}} <br/>
       Method property -  {{getSumMethod()}}
    </div>
</template>

<script>

export default {
  name: 'Computed1',
  data () {
    return {
      a: 1,
      b: 2
    }
  },
  methods: {
    getSumMethod () {
      return this.a + this.b
    }
  },
  computed: {
    getSum () {
      return this.a + this.b
    }
  }
}
</script>
<style scoped>

</style>
