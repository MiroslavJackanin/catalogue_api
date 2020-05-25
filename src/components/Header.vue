<template>
    <div class="header">
        <button v-if="showHome" @click="toggleHome">Home</button>
    </div>
</template>

<script>
    export default {
        name: "Header",
        props: ["showHome", "toggleHome"],
    }
</script>

<style scoped>
.header{
    border-style: solid;
    border-color: blue;
    height: 50px;
}
</style>