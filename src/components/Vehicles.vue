<template>
    <div class="vehicles">
        {{itemData.name}}
        <br>
        <br>
        Model: {{itemData.model}}
        <br>
        Length: {{itemData.length}}
        <br>
        Crew: {{itemData.crew}}
        <br>
        Vehicle class: {{itemData.vehicle_class}}
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