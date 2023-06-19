<template>
  <div class="colorFont">
    <InputSearch @onQuery="onQuery"/>
    <div class="container-filtro">
      <p class="filtro">Filtros</p>
    </div>
    <div class="body">
      <div class="containerProductos" v-for="product in productos" :key="product.product_id">
        <div class="totalInfo">
          <img :src="`${product.images[0]?.path}${product.images[0]?.file}`" class="imgProduct">
          <!-- <p>{{product.images[0]?.path}}{{product.images[0]?.file}}</p> -->
          <div class="allInfo">
            <p class="colorGris">{{product.Product_description}}</p>
            <p class="diferenteColor">{{product.Product_name}}</p>
            <p class="colorGris">{{product.price_with_discount}}</p>
            <p class="colorGris">{{product.price}}</p>
            <p class="colorGris">{{product.color_name}}</p>
            <p class="colorGris">{{product.brand_name}}</p>
          </div>
        </div>
        <hr>
      </div>
    </div>
    <div class="mensaje">
      <p class="textMensaje">{{mensaje}}</p>
    </div>
  </div>
</template>

<script>
import InputSearch from '../components/InputSearch';
import { useStore } from 'vuex';
import { onMounted, computed } from 'vue';

export default {
  name: 'HomeView',
  components: {
    InputSearch
  },
  setup(){
    const store = useStore();
    const productos = computed(() => store.state.productos);
    const valueInput = computed(() => store.state.valueInput);
    const mensaje = computed(() => store.state.mensaje);
    let limit = 10;

      onMounted(() => {
        store.dispatch("getProductos",{search:valueInput.value,page:1, limit:10});
      })

      window.onscroll = () => {
        let bottomOfWindow = document.documentElement.scrollTop + window.innerHeight === document.documentElement.offsetHeight;

        if (bottomOfWindow) {
          limit +=10;
          if(valueInput){
              store.dispatch("getProductos",{search:valueInput.value,page:1, limit});
            }else{  
              store.dispatch("getProductos",{page:1, limit});
          }
        }
      };


    return{
      productos,
      mensaje
    }
  }

}
</script>

<style lang="scss" scoped>

.colorFont{
  background-color: #E3E9EE;
  width: 100%;

.container-filtro{
  width: 100%;
  text-align: right;
  box-sizing: border-box;
  margin-left: -20px;

  .filtro{
    font-family: 'Hind';
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    // line-height: 48px;
    text-decoration-line: underline;
    color: #2780BA;
  }
}

.mensaje{
      position: relative;
      height: 100%;
      background-color: white;
      .textMensaje{
        color: red;
        position: absolute;
        margin-left: 20%;
        margin-top: 25%
      }
    }

.body{
  margin-top: 20px;
  width: 95%;
  margin-left: 2.5%;
  background-color: white;

  .containerProductos{

    .totalInfo{
        width: 100%;
        position: relative;
        box-sizing: border-box;
        display: flex;
        margin-top: 10px;
        margin-bottom: 10px;
      
        .imgProduct{
          width: 18%;
          margin-right: 20px;
          margin-left: 20px;
        }
        .allInfo{
          width: 70%;
          align-self: center;

          .colorGris{
            color: #95A5A6;
          }
          .diferenteColor{
            color: #35495E;
          }
        }
      }
  }
}
}
@media screen and (min-width: 768px) {
  .body .totalInfo .imgProduct{
      width: 9%;
      margin-right: 20px;
      margin-left: 20px;
    }
}


</style>
