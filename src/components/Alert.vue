<template>
  <div :class="`alert alert-${alertType}`">
    <strong>{{alertType}}</strong> {{ message }}
  </div>
</template>

<script>
export default {
    name: 'Alert',
    props: {
        alertType: {
            type: String,
            default: 'primary',
        },
        message: {
            type: String,
            default: '',
        },
        isShow: {
            type: Boolean,
            default: false,
        },
    },
    computed: {
        alertIsShow: function() {
            return this.isShow;
        },
    },
}
</script>