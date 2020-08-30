
<template>
  <main class="works">
    <jumbotron :image="image" :pageTitle="pageTitle"></jumbotron>
    <works-section></works-section>
  </main>
</template>
<script>
import Jumbotron from "../../components/global/Jumbotron";
import WorksSection from "../../components/global/WorksSection";
export default {
  name: "Works",
  components: { Jumbotron, WorksSection },
  data() {
    return {
      image: "/img/works_slider.jpg",
      pageTitle: "اعمالنا"
    };
  }
};
</script>
