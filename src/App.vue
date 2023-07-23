<template>
  <nav>
    <HeaderCom></HeaderCom>
     <router-view/>
    <FooterCom></FooterCom>
   </nav>
</template>
<script>
import HeaderCom from '@/components/header/HeaderCom'
import FooterCom from '@/components/footer/FooterCom'
export default {
  name: 'App',
  components: {
    HeaderCom,
    FooterCom
  }
}
</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
