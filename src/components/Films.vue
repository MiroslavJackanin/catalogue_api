<template>
    <div class="films">
        Release date: {{itemData[0].release_date}}
        <br>
        Director: {{itemData[0].director}}
        <br>
        Producer: {{itemData[0].producer}}
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