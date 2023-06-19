<template>
  <div>
    <Header/>
    <div class="container-filtro">
      <p class="filtro">Filtros</p>
    </div>
    <div class="body">

    </div>
  </div>
</template>

<script>
import Header from '../components/Header';

export default {
  name: 'HomeView',
  components: {
    Header
  },

}
</script>

<style lang="scss" scoped>

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

</style>
