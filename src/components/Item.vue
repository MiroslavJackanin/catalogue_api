<template>
    <div class="items">
        <people class="item" v-if="$route.params.category === 'people'" :item-data="itemData"></people>
        <planets class="item" v-if="$route.params.category === 'planets'" :item-data="itemData"></planets>
        <films class="item" v-if="$route.params.category === 'films'" :item-data="itemData"></films>
        <species class="item" v-if="$route.params.category === 'species'" :item-data="itemData"></species>
        <vehicles class="item" v-if="$route.params.category === 'vehicles'" :item-data="itemData"></vehicles>
        <starships class="item" v-if="$route.params.category === 'starships'" :item-data="itemData"></starships>
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
                let myRequest;
                let category = this.$route.params.category;
                let item = this.$route.params.item-1;
                if (item/10 < 1){
                    myRequest = new Request("https://swapi.dev/api/"+category+"/");
                }else{
                    item = Math.floor(item/10)+1;
                    myRequest = new Request("https://swapi.dev/api/"+category+"/"+"?page="+item);
                }
                item = this.$route.params.item-1;
                fetch(myRequest)
                    .then((response) => {return response.json()})
                    .then(data => {
                        this.itemData = data.results[this.$route.params.item-1 - Math.floor(item/10)*10];
                    })
            },
        },
        created(){
            this.fetchData();
        }
    }
</script>

<style scoped>
    .items{
        min-height: 200px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        margin-top: 50px;
    }
    .item{
        text-decoration: none;
        font-size: 30px;
        font-weight: bold;
        color: black;
        padding: 8px;
        border-style: solid;
        border-color: #0f708e;
        border-radius: 10px;
    }
</style>