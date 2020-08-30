<template>
  <div class="posts pb-100">
    <div class="container">
      <div class="row overflow-hidden">
        <article class="col-md-4 mt-30">
          <router-link class="post large-post d-block" :to="largePost.link">
            <img :src="largePost.thumbnail" class="img-fluid" />
            <div class="post-content">
              <h3 class="post-title">{{largePost.title}}</h3>
              <div class="post-category">{{largePost.category}}</div>
            </div>
          </router-link>
        </article>
        <div class="col-md-8">
          <div class="row">
            <article class="col-md-6 mt-30" v-for="(post,index) in posts" :key="index">
              <router-link class="post d-block" :to="post.link">
                <img :src="post.thumbnail" class="img-fluid" />
                <div class="post-content">
                  <h3 class="post-title">{{post.title}}</h3>
                  <div class="post-category">{{post.category}}</div>
                </div>
              </router-link>
            </article>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "Posts",
  data() {
    return {
      posts: [
        {
          thumbnail: "/img/blog/post_01.jpg",
          title: "هناك حقيقة مثبتة منذ زمن طويل",
          category: "تكنولوجيا",
          link: "/blog/post/1"
        },
        {
          thumbnail: "/img/blog/post_02.jpg",
          title: "هناك حقيقة مثبتة منذ زمن طويل",
          category: "تكنولوجيا",
          link: "/blog/post/2"
        },
        {
          thumbnail: "/img/blog/post_03.jpg",
          title: "هناك حقيقة مثبتة منذ زمن طويل",
          category: "تكنولوجيا",
          link: "/blog/post/3"
        },
        {
          thumbnail: "/img/blog/post_04.jpg",
          title: "هناك حقيقة مثبتة منذ زمن طويل",
          category: "تكنولوجيا",
          link: "/blog/post/4"
        }
      ],
      largePost: {
        thumbnail: "/img/blog/large_post.jpg",
        title: "هناك حقيقة مثبتة منذ زمن طويل",
        category: "تكنولوجيا",
        link: "/blog/post/5"
      }
    };
  }
};
</script>

<style lang="scss" scoped>
.posts {
  padding-top: 20px;
  @media (max-width: 768px) {
    padding-top: 0;
  }
  .post {
    overflow: hidden;
    border-radius: 10px;
    position: relative;
    &.large-post {
      height: 100%;
    }
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
    .post-content {
      position: absolute;
      left: 0;
      bottom: 0;
      height: 100%;
      background: #0000001f;
      background: linear-gradient(0deg, #000000 0%, #e8e8e812 40%);
      width: 100%;
      display: flex;
      justify-content: flex-end;
      flex-direction: column;
      padding: 20px;
      .post-title {
        color: #fff;
        font-size: 14px;
        font-weight: 500;
      }
      .post-category {
        color: #fff;
        font-size: 14px;
      }
    }
  }
}
</style>