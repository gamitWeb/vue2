<template>
    <div>
        <!-- NonProps<br/> -->
        <NonPropsChild1Vue name="amit" xyz="nonprops"/>
    </div>
</template>

<script>
import NonPropsChild1Vue from './NonPropsChild1.vue'

export default {
  name: 'NonProps',
  components:{
      NonPropsChild1Vue
  }
}
</script>
<style scoped>

</style>
