


<template>
    <div class="categories">
        <div v-for="(category, index) in categories" :key="index">
            <div class="categoryPadding"></div>
            <router-link class="category" :to="{path:Object.keys(category)[0]}">{{Object.keys(category)[0].charAt(0).toUpperCase() + Object.keys(category)[0].slice(1)}}</router-link>
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
        min-height: 200px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        margin-top: 50px;
    }
    .category{
        text-decoration: none;
        font-size: 30px;
        font-weight: bold;
        color: black;
        padding: 8px;
        border-style: solid;
        border-color: #0f708e;
        border-radius: 10px;
    }
    .categoryPadding{
        height: 25px;
    }
</style>