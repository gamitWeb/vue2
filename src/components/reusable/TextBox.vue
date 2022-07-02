<template>
  <b-container fluid>
    <b-row class="my-1">
      <b-col sm="9">
        <b-form-input :id="`type-${type}`" :type="type" v-on="onchatextchange"></b-form-input>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
export default {
  data() {
    return {
      types: ["text"],
    };
  },

  methods()
  {

      onchatextchange:function(param)
      {
         // emit
      }
  }
};
</script>