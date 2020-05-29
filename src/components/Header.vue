<template>
    <div class="header">
        <router-link class="home" to="/">HOME</router-link>
        <div class="title">Star Wars Library</div>
        <div class="logo"><img class="image" src="../assets/logo.png"/></div>
    </div>
</template>

<script>
    export default {
        name: "Header",
    }
</script>

<style scoped>
    .header{
        min-height: 100px;
        background-color: #d4d4d4;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
        border-radius: 0 0 20px 20px;
    }
    .title{
        text-align: center;
        font-family: Roboto,serif;
        font-weight: bold;
        font-size: 50px;
    }
    .logo{
        margin-right: 30px;
    }
    .image{
        width: 100px;
    }
    .home{
        text-decoration: none;
        color: #0f708e;
        font-size: 30px;
        font-weight: bold;
        padding: 5px;
        margin-left: 15px;
        border-style: solid;
        border-color: #0f708e;
        border-radius: 15px;
    }
    @media only screen and (max-width: 700px) {
        .header {
            flex-direction: column-reverse;
        }
        .logo{
            display: none;
        }
        .home{
            margin-top: 10px;
            margin-bottom: 15px;
        }
        .title{
            margin-top: 15px;
        }
    }
</style>