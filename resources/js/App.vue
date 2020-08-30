<template>
  <div id="app">
    <navbar></navbar>

    <transition name="fade" mode="out-in">
      <router-view :key="$route.path"></router-view>
    </transition>

    <footer-section></footer-section>
  </div>
</template>
<script>
import FooterSection from "./components/global/FooterSection";
import Navbar from "./components/navbar/Navbar";
export default {
  name: "App",
  components: {
    FooterSection,
    Navbar
  }
};
</script>
<style>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.1s;
}

.fade-enter,
  .fade-leave-to
    /* .fade-leave-active in <2.1.8 */

 {
  opacity: 0;
}
</style>
