<template>
  <div class="container-barcode">
    <div class="backStyle">
        <img src="../assets/barcode/back.png" alt="imageBack" class="iconBack" @click="goBack">
        <p class="textBack">Regresar</p>
    </div>
    <p class="escan">Escanea el código</p>
    <div id="barcodeScanner">
        <!-- <span id='loading-status' style='font-size:x-large'>Loading Library...</span> -->
        <p id="resultado"></p>
		<div id="contenedor"></div>
        <div id="qr-reader" style="width: 400px"></div>
    </div>
  </div>
</template>

<script>
import { useRouter } from 'vue-router';
import { onMounted, computed } from 'vue';
import { useStore } from 'vuex';

export default {
    components:{
        
    },
    setup(){
        let router = useRouter();
        const store = useStore();

        const goBack = () => {
        router.push('/')
        }

        onMounted(() => {
            function onScanSuccess(decodedText, decodedResult) {
                console.log(`Code scanned = ${decodedText}`, decodedResult);
                alert(`Code scanned = ${decodedText}`)
                 store.dispatch("getProductos",{
                        search: decodedText
                    });
            }
            var html5QrcodeScanner = new Html5QrcodeScanner(
                "qr-reader", { fps: 10, qrbox: 250 });
            html5QrcodeScanner.render(onScanSuccess);
                    })

        return {
        goBack
        }
    }
}
</script>
<style lang="scss" scoped>
.container-barcode{
    width: 90%;

    .backStyle{
        display: flex;
        margin-top: 20px;
        margin-bottom: 20px;
    }
    .iconBack{
        padding-left: 30px;
    }
    .textBack{
        padding-left: 10px;
        color: #2980B9;
        font-family: 'Hind';
        font-style: normal;
        font-weight: 600;
        font-size: 20px;
        // line-height: 32px;
    }
    .escan{
        padding-left: 30px;
        font-family: 'Hind';
        font-style: normal;
        font-weight: 600;
        font-size: 20px;
        line-height: 32px;
        color: #000000;
        margin-bottom: 20px;
    }
    .contenedor{
        width: 100px;
    }
}
</style>