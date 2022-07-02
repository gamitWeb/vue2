<template>
  <div class="userForm">
    <h1>{{ msg }}</h1>
<ul>
    <li v-for="product in productlist" :key="product.id">      
     <label> Product id :  {{product.id}} , Title {{product.title}} </label> <br/>
    </li> 
 
    
</ul>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'Product',
  data () {
    return {
      msg: 'Product',
      productlist:[]
    }
  },
  mounted()
  {
axios.get('https://dummyjson.com/products')
.then((res)=>{
    this.productlist=res.data.products;
console.log(this.productlist);
})

  }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
/* ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
} */
</style>
