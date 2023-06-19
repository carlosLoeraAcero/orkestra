<template>
    <div class="home">
      <input type="text" placeholder="Buscar producto" class="inputSearch" v-model="valueInput" @input="changeValueInput">
      <img src="../assets/inputSearch/search.png" alt="search" class="search">
      <img src="../assets/inputSearch/barcode.png" alt="barcode" id="barcode" class="barcode" v-if="!valueInput" @click="goBarcodeView">
      <img src="../assets/inputSearch/x.png" alt="x" id="x" class="x" @click="deleteInfo" v-else>
    </div>
</template>

<script>
import { useRouter } from 'vue-router';
import { onMounted, computed } from 'vue';
import { useStore } from 'vuex';

export default {
setup(){
    let router = useRouter();
    const store = useStore();
    const productos = computed(() => store.state.productos);
    const valueInput = computed(() => store.state.valueInput);

      const goBarcodeView = () => {
        router.push('/barcode')
      }

      const changeValueInput = (e) => {
          store.dispatch("getInputValue",{
            value: e.target.value
          });
          store.dispatch("getProductos",{search:valueInput.value});
      }

      const deleteInfo = () => {
        store.dispatch("getInputValue",{
          value: ''
        });
        store.dispatch("getProductos",{page:1, limit:10});
      }

    return {
      goBarcodeView,
      productos,
      valueInput,
      changeValueInput,
      deleteInfo
    }
  }
}
</script>

<style lang="scss" scoped>
.home{
  width: 100%;
  text-align: center;
  box-sizing: border-box;
  position: sticky;
  top: 0;
  z-index: 10;
  background-color: #E3E9EE;

  .inputSearch{
    box-sizing: border-box;
    width: 95%;
    margin-top: 10px;
    margin-bottom: 10px;
    text-align: left;
    padding-left: 75px;
    height: 35px;
    font-size: 24px;
    background: #FFFFFF;
    border: 1.5px solid #95A5A6;
    border-radius: 3px;
  }
  .search{
    position: absolute;
    margin-left: -90%;
    margin-top: 18px;
  }
  .barcode{
    width: 5%;
    position: absolute;
    margin-left: -10%;
    margin-top: 16px;
  }
  .x{
    width: 5%;
    position: absolute;
    margin-left: -10%;
    margin-top: 16px;
  }
  .hiddenclass{
    display:none;
  }
}

@media screen and (min-width: 450px) {
  .home .barcode{
    width: 4%;
    position: absolute;
    margin-left: -10%;
    margin-top: 16px;
  }
  .home .x{
    width: 4%;
    position: absolute;
    margin-left: -10%;
    margin-top: 16px;
  }
}

@media screen and (min-width: 700px) {
  .home .barcode{
    width: 3%;
    position: absolute;
    margin-left: -10%;
    margin-top: 16px;
  }
  .home .x{
    width: 3%;
    position: absolute;
    margin-left: -10%;
    margin-top: 16px;
  }
}

@media screen and (min-width: 950px) {
  .home .search{
    position: absolute;
    margin-left: -93%;
    margin-top: 18px;
  }

  .home .barcode{
    width: 2.3%;
    position: absolute;
    margin-left: -10%;
    margin-top: 13px;
  }
  .home .x{
    width: 2.3%;
    position: absolute;
    margin-left: -10%;
    margin-top: 13px;
  }
}

</style>