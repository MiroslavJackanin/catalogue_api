<template>
    <div class="people">
        {{itemData.name}}
        <br>
        <br>
        Birth year: {{itemData.birth_year}}
        <br>
        Gender: {{itemData.gender}}
        <br>
        Eye color: {{itemData.eye_color}}
        <br>
        Hair color: {{itemData.hair_color}}
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