<template>
    <div class="vehicles">
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