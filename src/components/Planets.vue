<template>
    <div class="planets">
        {{itemData.name}}
        <br>
        Climate: {{itemData.climate}}
        <br>
        Diameter: {{itemData.diameter}}
        <br>
        Gravity: {{itemData.gravity}}
        <br>
        Terrain: {{itemData.terrain}}
    </div>
</template>

<script>
    export default {
        name: "Planets",
        props: ["itemData"],
    }
</script>

<style scoped>

</style>