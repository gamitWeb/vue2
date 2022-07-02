<template>
    <div>
        <label>{{msg}}</label> <br/>
        {{name}} &nbsp; &nbsp; {{lastName}}
    </div>
</template>

<script>
export default {
  name: 'Child1',
  data () {
    return {
      msg: 'Child 1'
    }
  },
  props: {
    name: String,
    lastName: String
  }
}
</script>
<style scoped>

</style>
