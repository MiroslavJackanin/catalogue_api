<template>
    <div class="planets">
        Climate: {{itemData[0].climate}}
        <br>
        Diameter: {{itemData[0].diameter}}
        <br>
        Gravity: {{itemData[0].gravity}}
        <br>
        Terrain: {{itemData[0].terrain}}
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