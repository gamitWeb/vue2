<template>
    <div>
        Modifier<br/>
        <input type="number" v-model.number="name" />
        <input type="text" v-model.trim="name" />
        <input type="text" v-model.lazy="name" />
        <br/>
        {{typeof (name)}}
    </div>
</template>

<script>

export default {
  name: 'Modifier',
  data () {
    return {
      name: ''
    }
  }
}
</script>
<style scoped>

</style>
