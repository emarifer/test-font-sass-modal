<template>
  <div id="app">
    <!-- Modal & Snackbar -->
    <transition name="fade">
      <div class="modal-overlay" v-if="showModal || showSnackbar"></div>
    </transition>

    <transition name="fade">
      <modal        
        v-if="showModal"
        v-on:close_modal="showModal = false"
        v-on:show_alert="showAlert" />
    </transition>

    <transition name="fade">
      <snackbar v-on:close_snackbar="showSnackbar = false" v-if="showSnackbar" />
    </transition>

    <div class="custom-container">
      <button @click="showModal = true">Modal</button>
      <img alt="Vue logo" src="./assets/logo.png" width="100">
      <!-- VER NOTA ABAJO -->
      <button @click="showSnackbar = true">Snackbar</button>
    </div>
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue';
import Modal from '@/components/Modal';
import Snackbar from '@/components/Snackbar';

  export default {
    name: 'App',
    components: {
      HelloWorld,
      Modal,
      Snackbar
    },
    data() {
      return {
        showModal: false,
        showSnackbar: false,
      }
    },
    methods: {
      showAlert() {
        this.showModal = false;
        alert('Acción ejecutada');
      }
    },
  }
</script>

<style lang="scss">

  @font-face {
    font-family: 'Kunstler Script';
    /* src: url(/fonts/KUNSTLER.TTF); ES INDIFERENTE SI SE COLOCA AQUI UN EN PUBLIC */
    src: url('./assets/fonts/KUNSTLER.TTF');
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  
  body {
    font-family: sans-serif;
    font-size: 12px;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: $grey;
    margin-top: 2rem;
  }

  .custom-container {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: .5rem;
    margin-bottom: .5rem;
  }

  button {
    width: 5rem;
    padding: .5rem 0;
    border-radius: 5px;
    background-color:  #db8738;
    color: white;
    border: 1px solid purple;
    outline: none;
    @include btn-hover;
  }

  .fade-enter-active, .fade-leave-active {
    transition: opacity 1.2s
  }

  .fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
    opacity: 0
  }

  .modal-overlay {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 100;
    background: #00000090;
  }
</style>

<!-- 
  https://joshuatz.com/posts/2019/vue-mixing-sass-with-scss-with-vuetify-as-an-example/
  https://css-tricks.com/introducing-sass-modules/


  https://css-tricks.com/how-to-import-a-sass-file-into-every-vue-component-in-an-app/
 -->

 <!-- 
   NOTA SOBRE LOS CONTENIDOS DE LA CARPETA ASSETS:
   LAS IMAGENES QUE ESTEN EN LA CARPETA ASSETS SON CONVERTIDAS DURANTE LA COMPILACION A BASE 64 E INCLUIDAS EN LOS FICHEROS JS, COMO ES EL CASO DE LA IMAGEN DEL LOGO. ES POR ESO QUE DICHO CONTENIDO NO ES NECESARIO PRECACHEARLO PARA CONTRUIR UN PWA QUE FUNCIONE OFFLINE.

   EXISTE UN CONVERSOR DE BASE 64 A IMAGEN:
   https://codebeautify.org/base64-to-image-converter
 -->