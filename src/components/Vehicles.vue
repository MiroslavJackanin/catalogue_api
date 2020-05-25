<template>
    <div class="vehicles">
        Model: {{itemData[0].model}}
        <br>
        Length: {{itemData[0].length}}
        <br>
        Crew: {{itemData[0].crew}}
        <br>
        Vehicle class: {{itemData[0].vehicle_class}}
    </div>
</template>

<script>
    export default {
        name: "Vehicles",
        props: ["itemData"],
    }
</script>

<style scoped>

</style>