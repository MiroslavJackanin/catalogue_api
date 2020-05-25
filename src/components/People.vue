<template>
    <div class="people">
        Birth year: {{itemData[0].birth_year}}
        <br>
        Gender: {{itemData[0].gender}}
        <br>
        Eye color: {{itemData[0].eye_color}}
        <br>
        Hair color: {{itemData[0].hair_color}}
    </div>
</template>

<script>
    export default {
        name: "People",
        props: ["itemData"],
    }
</script>

<style scoped>

</style>