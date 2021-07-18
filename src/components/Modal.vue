<template>
    <div class="modal">
        <div class="modal-title">
          <information-icon :size="24" fillColor="#fff" />
          <h4>Modal Personalizado</h4>
        </div>
        <div class="modal-content">
          <p><strong>Esto es un modal personalizado!! 😀</strong></p>
        </div>
        <hr>
        <div class="modal-actions">
          <delete-circle-icon class="btn" :size="30" @click="showAlert" fillColor="#E91E63" />
          <close-box-icon class="btn" :size="30" @click="closeModal" fillColor="#6E6E6E" />
        </div>
    </div>
</template>

<style scoped lang="scss">

    .modal {
        position: fixed;
        top: 50%;
        left: 50%;
        border-radius: 5px;
        width: 300px;
        background-color: white;
        box-shadow: 5px 5px 5px rgba(0, 0, 0, .5);
        display: flex;
        flex-direction: column;
        transform: translate(-50%, -50%);
        overflow: hidden;
        z-index: 200;
    }

    .modal-title {
        display: flex;
        justify-content: center;
        align-items: center;
        gap: .75rem;
        padding: .6rem 0;
        color: white;
        background-color: purple;
    }

    .modal-content {
        padding: .75rem;
        font-size: 14px;
    }

    .modal-actions {
        @include modal-bottom(space-between);
    }

    .btn {
        width: 2.75rem;
        height: 2.75rem;
        border: none;
        outline: none;
        border-radius: 50%;
        cursor: pointer;
        @include btn-hover;
    }
</style>

<script>
    import InformationIcon from 'vue-material-design-icons/Information.vue';
    import DeleteCircleIcon from 'vue-material-design-icons/DeleteCircle.vue';
    import CloseBoxIcon from 'vue-material-design-icons/CloseBox.vue';

    export default {
        name: 'RemoveCacheModal',
        components: {
            InformationIcon,
            DeleteCircleIcon,
            CloseBoxIcon
        },
        methods: {
            showAlert() {
                this.$emit('show_alert');
            },
            closeModal() {
                this.$emit('close_modal');
            },
        },
    }

</script>