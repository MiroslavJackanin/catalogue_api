<template>
    <div class="categories">
        <div v-for="(category, index) in categories" :key="index">
            <router-link :to="{path:Object.keys(category)[0]}">{{Object.keys(category)[0]}}</router-link>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Category",
        data(){
            return{
                categories: [],
            }
        },
        methods: {
            fetchData(){
                const myRequest = new Request("https://swapi.dev/api/");

                fetch(myRequest)
                    .then((response) => {return response.json()})
                    .then(data => {
                        let temp = []; let x = {}; let y = {};
                        for (const key in data){
                            x = `${key}`;
                            y = `${data[key]}`;
                            temp.push({[x]:y});
                        }
                        this.categories = temp;
                    })
            },
        },
        created() {
            this.fetchData()
        }
    }
</script>

<style scoped>
    .categories{
        border-style: solid;
        border-color: red;
        min-height: 100px;
    }
</style>