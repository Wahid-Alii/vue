<template>
    <div class="modal" v-show="show">
        <!-- Modal content goes here -->
        <div class="modal-content">
            <slot></slot>
        </div>
    </div>
</template>
  
<script>
export default {
    props: {
        show: Boolean,
    },
};
</script>
  
<style>
/* Styles for the modal overlay */
.modal {
    /* Position the modal in the center of the screen */
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: rgba(0, 0, 0, 0.5);
    /* semi-transparent black overlay */
}

/* Styles for the modal content */
.modal-content {
    /* Customize the modal appearance as needed */
    background-color: white;
    padding: 20px;
    border-radius: 4px;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.2);
    width: 50%;
    height: 50% ;
}
</style>
  