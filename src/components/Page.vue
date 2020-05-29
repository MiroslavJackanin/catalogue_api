<template>
    <div class="page">
        <div v-for="(item, index) in ctgData" :key="index=index+1">
            <div class="itemPadding"></div>
            <router-link class="item" :to="{path:$route.params.category +'/'+ index}">{{Object.values(item)[0]}}</router-link>
        </div>

        <scroll-loader :loader-method="fetchPage" :loader-disable="disable">
        </scroll-loader>
    </div>
</template>

<script>
    export default {
        name: "Page",
        data(){
            return{
                ctgData: [],
                page: 2,
                disable: false,
                kokotina: 1,
            }
        },
        methods:{
            fetchData(){
                let category = this.$route.params.category;
                const myRequest = new Request("https://swapi.dev/api/"+category+"/");
                let temp = []; let x = {}; let y = {};

                fetch(myRequest)
                    .then((response) => {return response.json()})
                    .then(data => {
                        for (const key in data.results){
                            x = `${key}`;
                            if (category === "films") y = `${data.results[key].title}`;
                            else y = `${data.results[key].name}`;
                            temp.push({[x]:y});
                        }})
                this.ctgData = temp;
            },
            fetchPage(){
                if (this.kokotina === 1){
                    this.kokotina = 0;
                    return;
                }
                let category = this.$route.params.category;
                const myRequest = new Request("https://swapi.dev/api/"+category+"/"+"?page="+this.page);
                let temp = []; let x = {}; let y = {};

                for (let i=0; i<this.ctgData.length; i=i+1){
                    let x = Object.keys(this.ctgData[i])[0];
                    let y = Object.values(this.ctgData[i])[0];
                    temp.push({[x]:y});
                }

                fetch(myRequest)
                    .then((response) => {return response.json()})
                    .then(data => {
                        for (const key in data.results){
                            x = `${this.ctgData.length+parseInt(key)}`;
                            if (category === "films") y = `${data.results[key].title}`;
                            else y = `${data.results[key].name}`;
                            temp.push({[x]:y});
                        }
                    })
                this.ctgData = temp;
                this.page = this.page+1;
            }
        },
        beforeMount(){
            this.fetchData();
        }
    }
</script>

<style scoped>
    .page{
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
    .itemPadding{
        height: 50px;
    }
</style>