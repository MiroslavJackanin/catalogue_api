<template>
    <div class="header">
        Star Wars Library
        <br>
        <router-link to="/">Home</router-link>
    </div>
</template>

<script>
    export default {
        name: "Header",
    }
</script>

<style scoped>
.header{
    border-style: solid;
    border-color: blue;
    height: 50px;
}
</style>