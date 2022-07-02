<template>
    <div>
        <!-- NonProps Child 1<br/>-->
        {{name}}<br/>
        <!-- <div> -->
            <h5 v-bind="$attrs">Ajay</h5>
            <h5>Raju</h5>
            <h5>Singh</h5>
        <!-- </div> -->
        {{getAttr()}}
    </div>
</template>

<script>

export default {
  name: 'NonPropsChild1',
  props: {
    name: String
  },
  methods: {
    getAttr () {
      console.log('this.attri', this.$attrs)
    }
  },
  
}
</script>
<style scoped>

</style>
