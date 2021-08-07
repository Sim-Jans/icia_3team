<template>
  <div id="nav">
    <Nav></Nav>
   
    <router-view />
    
    <Footer></Footer>
  </div>
</template>

<script>
import Nav from  './components/common/Nav.vue';
import Footer from  './components/common/Footer.vue';


export default ({
  components: {
    Nav,
    Footer
  }
})
</script>


<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav{
  position: relative;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
