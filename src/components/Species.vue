<template>
    <div class="species">
        Classification: {{itemData[0].classification}}
        <br>
        Designation: {{itemData[0].designation}}
        <br>
        Language: {{itemData[0].language}}
        <br>
        Skin colors: {{itemData[0].skin_colors}}
    </div>
</template>

<script>
    export default {
        name: "Species",
        props: ["itemData"],
    }
</script>

<style scoped>

</style>