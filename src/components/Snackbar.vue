<template>
    <div class="snackbar">
        <p><strong>Esto es un Snackbar!!</strong> 😀</p>
        <!-- <button class="btn-snackbar" @click="closeSnackbar"> -->
          <!-- <img src="gif/icons8-refresh.gif" alt="Refresh"> -->
        <refresh-icon class="btn-snackbar" :size="30" @click="closeSnackbar" fillColor="#6E6E6E" />
        <!-- </button> -->
    </div>
</template>

<style lang="scss">

    .snackbar {
        position: fixed;
        bottom: .5rem;
        left: 50%;
        transform: translate(-50%);
        border-radius: 5px;
        width: calc(100vw - 2 * .5rem);
        height: 3.5rem;
        background-color: #37474F;
        color: white;
        box-shadow: 5px 5px 5px rgba(0, 0, 0, .5);
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 0 1rem;
        z-index: 200;
    }

    .btn-snackbar {
        width: 2rem;
        height: 2rem;
        background-color: white;
        cursor: pointer;
        border-radius: 6px;
        @include btn-hover;
    }
    
    @media screen and (min-width: 450px) {
        .snackbar {
            width: 375px;
            transform: translate(0%);
            left: calc(100vw - 375px - .5rem);
    }
  }
</style>

<script>
    import RefreshIcon from 'vue-material-design-icons/Refresh.vue';
    
    export default {
        name: 'Snackbar',
        components: {
            RefreshIcon,
        },
        methods: {
            closeSnackbar() {
                this.$emit('close_snackbar');
            },
        },
    }
</script>