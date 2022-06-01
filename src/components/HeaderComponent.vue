<template>
    <header>
        <router-link to="/">
            <img alt="Vue logo" src="../assets/logo.svg">
        </router-link>
    </header>
</template>

<script>

    export default {
        components: {
        }
    }
</script>

<style lang="scss" scoped>
header {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 120px;
    box-shadow: 0 3px 5px 0 #333;
    overflow: visible;
    width: 100vw;
    background-color: #fff;
    position: fixed;
    z-index: 2;

    img {
        height: 110px;
    }
}
</style>