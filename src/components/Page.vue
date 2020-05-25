<template>
    <div class="page">
        {{chosenCtg}}
        <div v-for="(item, index) in ctgData" :key="index">
            <button
                    class="pgItem">
                {{Object.values(item)[0]}}
            </button>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Page",
        props: ["chosenCtg"],
        data(){
            return{
                chosenCategory: this.chosenCtg,
                ctgData: [],
            }
        },
        methods:{
            fetchData(){
                let category = this.chosenCategory;
                console.log(category);
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
                        console.log(temp);
                        this.ctgData = temp;
                    })
            }
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