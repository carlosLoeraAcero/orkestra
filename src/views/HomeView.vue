<template>
  <div class="colorFont">
    <InputSearch @onQuery="onQuery"/>
    <div class="container-filtro">
      <p class="filtro">Filtros</p>
    </div>
    <div class="body">
      <div class="containerProductos" v-for="product in productos" :key="product.product_id">
        <div class="totalInfo">
          <img :src="product.images[0]?.path+product.images[0]?.file" class="imgProduct" v-if="product.images[0]?.path+product.images[0]?.file">
          <img  v-else class="imgProduct1">
          <!-- <p>{{product.images[0]?.path}}{{product.images[0]?.file}}</p> -->
          <div class="allInfo">
            <p class="colorGris">{{product.product_description}}</p>
            <p class="diferenteColor">{{product.product_name}}</p>
            <p :class="product.price_with_discount !== 0 ? 'colorRed' : 'colorGris'" v-if="product.price_with_discount!==0">${{product.price_with_discount.toLocaleString('en')}}.00</p>
            <p class="colorGris">${{product.price.toLocaleString('en')}}.00</p>
            <p class="colorGris">{{product.color_name}}</p>
            <p class="colorGris">{{product.brand_name}}</p>
          </div>
        </div>
        <hr>
      </div>
    </div>
    <div class="mensaje" v-if="productos.length===0">
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
          window.addEventListener('scroll', function() {
  
              const scrollHeight = Math.max(
              document.body.scrollHeight, document.documentElement.scrollHeight,
              document.body.offsetHeight, document.documentElement.offsetHeight,
              document.body.clientHeight, document.documentElement.clientHeight
              );
              console.log('pageYOffset: '+window.pageYOffset+' innerHeight: '+window.innerHeight+' scrollHeight:'+scrollHeight);
                if(window.pageYOffset + window.innerHeight >= scrollHeight-1) {

                    limit +=10;
                  if(valueInput){
                      store.dispatch("getProductos",{search:valueInput.value,page:1, limit});
                    }else{  
                      store.dispatch("getProductos",{page:1, limit});
                  }

                }

          });
      })



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
  position: relative;

  .filtro{
    font-family: 'Hind';
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    // line-height: 48px;
    text-decoration-line: underline;
    color: #2780BA;
    margin-top: 1px;
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
  margin-top: 10px;
  width: 95%;
  margin-left: 2.5%;
  background-color: white;

  .containerProductos{

    .totalInfo{
        width: 100%;
        position: relative;
        box-sizing: border-box;
        display: flex;
        margin-top: 3px;
        margin-bottom: 15px;
      
        .imgProduct{
          // width: 18%;
          margin-right: 20px;
          margin-left: 20px;
          width: 74px;
          height: 70px;
          left: 19px;
          align-self: center;
          object-fit: contain;
        }
        .imgProduct1{
          // width: 18%;
          margin-right: 20px;
          margin-left: 20px;
          width: 74px;
          height: 70px;
          left: 19px;
          align-self: center;
          object-fit: contain;
          opacity: 0;
        }
        .allInfo{
          width: 70%;
          align-self: center;

          .colorGris{
            color: #95A5A6;
            font-family: 'Hind';
            font-style: normal;
            font-weight: 400;
            font-size: 18px;
            line-height: 120%;
            letter-spacing: 0.5px;
          }
          .colorRed{
            color: red;
            font-family: 'Hind';
            font-style: normal;
            font-weight: 400;
            font-size: 18px;
            line-height: 120%;
            letter-spacing: 0.5px;
          }
          .diferenteColor{
            color: #35495E;
            font-family: 'Hind';
            font-style: normal;
            font-weight: 400;
            font-size: 18px;
            line-height: 120%;
            letter-spacing: 0.5px;
          }
        }
      }
  }
}
}
@media screen and (min-width: 768px) {
  .colorFont .body .containerProductos .totalInfo .imgProduct{
          margin-right: 20px;
          margin-left: 20px;
          width: 92px;
          height: 88px;
          left: 19px;
          align-self: center;
          object-fit: contain;
    }
    .colorFont .body .containerProductos .totalInfo .imgProduct1{
          margin-right: 26px;
          margin-left: 31px;
          width: 74px;
          height: 70px;
          left: 19px;
          align-self: center;
          object-fit: contain;
          opacity: 0;
        }
}
    @media screen and (min-width: 1024px) {
      .colorFont .body .containerProductos .totalInfo .imgProduct{
          margin-right: 20px;
          margin-left: 20px;
          width: 92px;
          height: 88px;
          left: 19px;
          align-self: center;
          object-fit: contain;
        }
      .colorFont .container-filtro{
        width: 100%;
        text-align: right;
        box-sizing: border-box;
        margin-left: -40px;
      }
    }


</style>
