<template>
    <div class="starships">
        Model: {{itemData.model}}
        <br>
        Length: {{itemData.length}}
        <br>
        Crew: {{itemData.crew}}
        <br>
        Starship class: {{itemData.starship_class}}
    </div>
</template>

<script>
    export default {
        name: "Starships",
        props: ["itemData"],
    }
</script>

<style scoped>

</style>