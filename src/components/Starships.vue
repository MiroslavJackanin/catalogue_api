<template>
    <div class="starships">
        Model: {{itemData[0].model}}
        <br>
        Length: {{itemData[0].length}}
        <br>
        Crew: {{itemData[0].crew}}
        <br>
        Starship class: {{itemData[0].starship_class}}
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