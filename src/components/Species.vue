<template>
    <div class="species">
        Classification: {{itemData.classification}}
        <br>
        Designation: {{itemData.designation}}
        <br>
        Language: {{itemData.language}}
        <br>
        Skin colors: {{itemData.skin_colors}}
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