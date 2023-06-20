import { createStore } from 'vuex'
import axios from "axios";
export default createStore({
  state: {
    titleApp: "Orkestra",
    productos: [],
    valueInput: "",
    mensaje: ""
  },
  getters: {
  },
  mutations: {
    setProductos(state, payload){
      state.productos = payload;
    },
    setInput(state, payload){
      state.valueInput = payload;
    },
    setMensaje(state, payload){
      state.mensaje = payload;
    }
  },
  actions: {
    async getProductos({ commit },{search,page,limit=10}){
      let token = "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiIzIiwianRpIjoiYTFlNzVkMzYxYWE3YzZkZWUxNDc3YTkwNzlhODE1ZWUwZDAzNDUyNzZjZTM0MWQzNmNhM2NmOWFlOTI3MDM0ODI1OGJmOWEyMGVlOGUwMjgiLCJpYXQiOjE2ODcxODcwNDguMjY0MzE3LCJuYmYiOjE2ODcxODcwNDguMjY0MzIzLCJleHAiOjQ4NDI4NjA2NDguMjQ2ODA2LCJzdWIiOiIxIiwic2NvcGVzIjpbImNvbXBhbnlfdG9rZW4iXX0.FDRh7h7RJMG4RGQ3ojhhLnzGn11LT3FZmZdy3kWal2yJYicNht_MN2wb5YSgyEVt_pfbWz6n8KKAtLjoc8DvVVCY0cREcc0atJFlCnEgblN_TFAs6TA79FKaX2-T2mnijEfHWVl1yoKvZVbdxsforGbu1QC4jJkaFsLi-y6QF5V7Akl0O_QOl0eCgUkB53wkdB7kYgRshSWzrPtcjkUJp80iYUE4wGK3RcGkBDARCkRawSEQ6Wzz7mkuWHjfmW4crfsh27TtsGxgSO89k8L5taDyU55Hb70t2FgJr0lRm4WYi7E_K0Sx_R7EHlA48BuXrI45lKpIwS7_d4D-cEwm64B1KmvQH5cZmm8IkYtWu4-ReR7kDWIe3twnEVxx-lZPvjP1zH766K2LxrIiqmF_wiUOZoetT675NXqW1d8ferA8A6drgPdruHPFAnXl_jJ2LZbn2W4iANiVxMf9FXVrbK1FR8hCt9n4rJhPBBwBHZvOU6xyHjbHiu5dVPLdKsT9n6y3-MwlQw2aDN9YToONmMGLhirg3KnvyUyHkLciQAoLtpYSza2q1w0u54LCH17vtKLYOFSSuyazBNF8edj_9kgOMIzCoFlp4RlQZO-Lp7b4Ks7huMUS3JEwEw4Ixx8YPjjUUqKCHenTSaLF9ZDv2NqPaNSoxBMwe5Bm_bGiPDM";

      const api = axios.create({
        baseURL: 'https://dev.orkestra.mx/',
        method: 'Get',
        headers: {
          Accept: 'application/json',
          Authorization: token,
        },
        mode: 'no-cors'
      })
      try {
      const res = await api(`api/v1/smart-cart/products?with_selects=1${search?`&search=${search}`:''}${page?`&page=${page}`:''}${page&&limit?`&limit=${limit}`:''}`);
      console.log("respuesta",res)
      if(res.data.msg[0] === "No se encontraron registros"){
        console.log("entro")
        commit("setMensaje", "No existen resultados para esta búsqueda");
      }
      commit("setProductos", res.data.products.data);
      }catch (error) {
        console.log(error);
      }
    },
    getInputValue({commit}, params){
      // console.log(params.value)
      commit("setInput", params.value);
    }
  },
  modules: {
  }
})
