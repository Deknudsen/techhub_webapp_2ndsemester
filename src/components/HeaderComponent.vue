<template>
    <header>
        <NavComponent />
        <img alt="Vue logo" src="../assets/logo.svg">
    </header>
</template>

<script>
import NavComponent from '@/components/NavComponent.vue'

    export default {
        components: {
            NavComponent
        }
    }
</script>

<style lang="scss" scoped>
header {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    height: 100px;

    img {
        height: 80px;
    }
}
</style>