<template>
  <div id="app">
    <Header :show-home="showHome" :toggle-home="toggleHome"></Header>
    <Category v-if="showCategories" :toggle-categories="toggleCategories" :chosen-ctg="chosenCtg"></Category>
    <Page v-if="showPage" :chosen-ctg="chosenCtg"></Page>
    <router-link to="/foo">go to router link</router-link>
  </div>
</template>

<script>
  import Header from "@/components/Header";
  import Category from "@/components/Category";
  import Page from "@/components/Page";

  export default {
    name: 'App',
    components: {
      Category, Header, Page
    },
    data(){
      return{
        showCategories: true,
        showHome: false,
        showPage: false,
        chosenCtg: "",
      }
    },
    methods:{
      toggleCategories(category){
        this.showCategories = !this.showCategories;
        this.showHome = true;
        this.showPage = true;

        this.chosenCtg = category;
      },
      toggleHome(){
        this.showHome = !this.showHome;
        this.showCategories = true;
        this.showPage = false;
      }
    }
  }
</script>

<style>

</style>
