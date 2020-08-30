<template>
  <main class="Blog">
    <jumbotron :image="image" :pageTitle="pageTitle"></jumbotron>
    <posts></posts>
    <posts-filter></posts-filter>
  </main>
</template>

<script>
import Jumbotron from "../../components/global/Jumbotron";
import Posts from "../../components/blog/Posts";
import PostsFilter from "../../components/blog/PostsFilter";
export default {
  name: "Blog",
  components: { Jumbotron, Posts, PostsFilter },
  data() {
    return {
      image: "/img/blog_slider.jpg",
      pageTitle: "المدونة"
    };
  }
};
</script>

