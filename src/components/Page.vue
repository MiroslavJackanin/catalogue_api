<template>
    <div class="page">
        <div v-for="(item, index) in ctgData" :key="index">
            <router-link :to="{path:$route.params.category +'/'+ Object.values(item)[0]}">{{Object.values(item)[0]}}</router-link>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Page",
        data(){
            return{
                ctgData: [],
            }
        },
        methods:{
            fetchData(){
                let category = this.$route.params.category;
                const myRequest = new Request("https://swapi.dev/api/"+category+"/");

                fetch(myRequest)
                    .then((response) => {return response.json()})
                    .then(data => {
                        let temp = []; let x = {}; let y = {};
                        for (const key in data.results){
                            x = `${key}`;
                            if (category === "films")
                                y = `${data.results[key].title}`;
                            else
                                y = `${data.results[key].name}`;
                            temp.push({[x]:y});
                        }
                        this.ctgData = temp;
                    })
            },
        },
        created(){
            this.fetchData();
        }
    }
</script>

<style scoped>
    .page{
        border-style: solid;
        border-color: green;
        min-height: 100px;
        height: auto;
    }
</style>