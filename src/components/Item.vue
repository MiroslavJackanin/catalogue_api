<template>
    <div class="item">
        <people v-if="$route.params.category === 'people'" :item-data="itemData"></people>
        <planets v-if="$route.params.category === 'planets'" :item-data="itemData"></planets>
        <films v-if="$route.params.category === 'films'" :item-data="itemData"></films>
        <species v-if="$route.params.category === 'species'" :item-data="itemData"></species>
        <vehicles v-if="$route.params.category === 'vehicles'" :item-data="itemData"></vehicles>
        <starships v-if="$route.params.category === 'starships'" :item-data="itemData"></starships>
    </div>
</template>

<script>
    import People from "@/components/People";
    import Planets from "@/components/Planets";
    import Films from "@/components/Films";
    import Species from "@/components/Species";
    import Vehicles from "@/components/Vehicles";
    import Starships from "@/components/Starships";

    export default {
        name: "Item",
        components:{
            Starships,
            Vehicles,
            Species,
            Films,
            Planets,
            People,
        },
        data(){
            return{
                itemData: {},
            }
        },
        methods:{
            fetchData(){
                let category = this.$route.params.category;
                let item = this.$route.params.item-1;
                const myRequest = new Request("https://swapi.dev/api/"+category+"/");

                fetch(myRequest)
                    .then((response) => {return response.json()})
                    .then(data => {
                        this.itemData = data.results[item];
                    })
            },
        },
        created(){
            this.fetchData();
        }
    }
</script>

<style scoped>
    .item{
        border-style: solid;
        border-color: #e8cd24;
        min-height: 100px;
        height: auto;
    }
</style>