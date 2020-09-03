<template>
  <main class="single-works">
    <jumbotron :image="image" :overlay="false" :breadcrumb="false"></jumbotron>
    
  </main>
</template>
<script>
import Jumbotron from "../../components/global/Jumbotron";
export default {
  name: "SingleWorks",
  components: { Jumbotron },
  data() {
    return {
      image: "/img/single-works/slider.png",
    };
  },
};
</script>

<style lang="scss">
.single-works {
  .jumbotron-asol {
  height: 500px;
  .jumbotron-image {
    &:after {
      top: 418px;
    }
  }
}
}
</style>
