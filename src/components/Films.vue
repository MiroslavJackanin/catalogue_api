<template>
    <div class="films">
        Release date: {{itemData.release_date}}
        <br>
        Director: {{itemData.director}}
        <br>
        Producer: {{itemData.producer}}
    </div>
</template>

<script>
    export default {
        name: "Films",
        props: ["itemData"],
    }
</script>

<style scoped>

</style>