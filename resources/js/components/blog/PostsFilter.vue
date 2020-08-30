<template>
  <div class="posts-filter pb-100">
    <div class="container">
      <div class="section-heading">
        <div class="d-flex align-items-center justify-content-between">
          <div class="filters">
            <button
              class="filter btn"
              :class="{ active: currentFilter === 'all' }"
              v-on:click="setFilter('all')"
            >منوع</button>
            <button
              v-for="(filter, index) in filters"
              :key="index"
              class="filter btn"
              :class="{ active: currentFilter === filter.slug }"
              v-on:click="setFilter(filter.slug)"
            >{{ filter.title }}</button>
          </div>
          <div class="list-grid">
            <button class="grid" :class="{active:layout == 'grid'}" @click.prevent="gridView">
              <span class="icon-grid"></span>
            </button>
            <button class="list" :class="{active:layout == 'list'}" @click.prevent="listView">
              <span class="icon-list"></span>
            </button>
          </div>
        </div>
      </div>

      <transition-group class="posts row" tag="div" name="posts" :class="layout">
        <router-link
          :to="post.link"
          v-for="post in postsFilter"
          :key="post.id"
          class="post"
          :class="[layout == 'grid' ? 'col-md-3':'col-md-6', trans == false ? 'non-trans':'', post.theme]"
        >
          <div class="post-wrapper">
            <img class="img-fluid post-image" v-bind:src="post.image" />
            <div v-if="layout =='list'" class="post-info">
              <h4 class="post-title">{{ post.title }}</h4>
              <p class="post-content" v-if="layout == 'list'">{{post.description}}</p>
            </div>
            <h4 v-else class="post-title">{{ post.title }}</h4>
          </div>
        </router-link>
      </transition-group>
    </div>
  </div>
</template>

<script>
import { uuid } from "vue-uuid";
export default {
  name: "PostsFilter",
  data() {
    return {
      currentFilter: "all",
      currentPage: 1,
      trans: true,
      postsPerPage: 16,
      layout: "grid",
      filters: [
        {
          title: "التسويق",
          slug: "marketing"
        },
        {
          title: "العلامات التجارية",
          slug: "trademarks"
        },
        {
          title: "التسويق الرقمي",
          slug: "digital-marketing"
        },
        {
          title: "تطوير الويب",
          slug: "web-development"
        },
        {
          title: "تطوير تطبيقات الجوال",
          slug: "mobile-development"
        }
      ],
      posts: [
        {
          title: "هناك حقيقة مثبتة منذ زمن طويل",
          description:
            "بعد أن فتحت شركة آبل متاجرها مؤخراً في الولايات المتحدة ، تراجعت وأعادت إغلاق 11 متجر في عدة ولايات مؤقتاً .حتى إشعار آخر",
          image: "/img/blog/filter/post_01.jpg",
          category: "marketing",
          id: uuid.v4(),
          theme: "red",
          link: "#"
        },
        {
          title: "هناك حقيقة مثبتة منذ زمن طويل",
          description:
            "بعد أن فتحت شركة آبل متاجرها مؤخراً في الولايات المتحدة ، تراجعت وأعادت إغلاق 11 متجر في عدة ولايات مؤقتاً .حتى إشعار آخر",
          image: "/img/blog/filter/post_02.jpg",
          category: "trademarks",
          id: uuid.v4(),
          theme: "yellow",
          link: "#"
        },
        {
          title: "هناك حقيقة مثبتة منذ زمن طويل",
          description:
            "بعد أن فتحت شركة آبل متاجرها مؤخراً في الولايات المتحدة ، تراجعت وأعادت إغلاق 11 متجر في عدة ولايات مؤقتاً .حتى إشعار آخر",
          image: "/img/blog/filter/post_03.jpg",
          category: "marketing",
          id: uuid.v4(),
          theme: "purple",
          link: "#"
        },
        {
          title: "هناك حقيقة مثبتة منذ زمن طويل",
          description:
            "بعد أن فتحت شركة آبل متاجرها مؤخراً في الولايات المتحدة ، تراجعت وأعادت إغلاق 11 متجر في عدة ولايات مؤقتاً .حتى إشعار آخر",
          image: "/img/blog/filter/post_04.jpg",
          category: "trademarks",
          id: uuid.v4(),
          theme: "blue",
          link: "#"
        },
        {
          title: "هناك حقيقة مثبتة منذ زمن طويل",
          description:
            "بعد أن فتحت شركة آبل متاجرها مؤخراً في الولايات المتحدة ، تراجعت وأعادت إغلاق 11 متجر في عدة ولايات مؤقتاً .حتى إشعار آخر",
          image: "/img/blog/filter/post_05.jpg",
          category: "digital-marketing",
          id: uuid.v4(),
          theme: "yellow",
          link: "#"
        },
        {
          title: "هناك حقيقة مثبتة منذ زمن طويل",
          description:
            "بعد أن فتحت شركة آبل متاجرها مؤخراً في الولايات المتحدة ، تراجعت وأعادت إغلاق 11 متجر في عدة ولايات مؤقتاً .حتى إشعار آخر",
          image: "/img/blog/filter/post_06.jpg",
          category: "web-development",
          id: uuid.v4(),
          theme: "purple",
          link: "#"
        },
        {
          title: "هناك حقيقة مثبتة منذ زمن طويل",
          description:
            "بعد أن فتحت شركة آبل متاجرها مؤخراً في الولايات المتحدة ، تراجعت وأعادت إغلاق 11 متجر في عدة ولايات مؤقتاً .حتى إشعار آخر",
          image: "/img/blog/filter/post_07.jpg",
          category: "marketing",
          id: uuid.v4(),
          theme: "red",
          link: "#"
        },
        {
          title: "هناك حقيقة مثبتة منذ زمن طويل",
          description:
            "بعد أن فتحت شركة آبل متاجرها مؤخراً في الولايات المتحدة ، تراجعت وأعادت إغلاق 11 متجر في عدة ولايات مؤقتاً .حتى إشعار آخر",
          image: "/img/blog/filter/post_08.jpg",
          category: "mobile-development",
          id: uuid.v4(),
          theme: "blue",
          link: "#"
        },
        {
          title: "هناك حقيقة مثبتة منذ زمن طويل",
          description:
            "بعد أن فتحت شركة آبل متاجرها مؤخراً في الولايات المتحدة ، تراجعت وأعادت إغلاق 11 متجر في عدة ولايات مؤقتاً .حتى إشعار آخر",
          image: "/img/blog/filter/post_09.jpg",
          category: "marketing",
          id: uuid.v4(),
          theme: "yellow",
          link: "#"
        },
        {
          title: "هناك حقيقة مثبتة منذ زمن طويل",
          description:
            "بعد أن فتحت شركة آبل متاجرها مؤخراً في الولايات المتحدة ، تراجعت وأعادت إغلاق 11 متجر في عدة ولايات مؤقتاً .حتى إشعار آخر",
          image: "/img/blog/filter/post_10.jpg",
          category: "trademarks",
          id: uuid.v4(),
          theme: "red",
          link: "#"
        },
        {
          title: "هناك حقيقة مثبتة منذ زمن طويل",
          description:
            "بعد أن فتحت شركة آبل متاجرها مؤخراً في الولايات المتحدة ، تراجعت وأعادت إغلاق 11 متجر في عدة ولايات مؤقتاً .حتى إشعار آخر",
          image: "/img/blog/filter/post_11.jpg",
          category: "marketing",
          id: uuid.v4(),
          theme: "purple",
          link: "#"
        },
        {
          title: "هناك حقيقة مثبتة منذ زمن طويل",
          description:
            "بعد أن فتحت شركة آبل متاجرها مؤخراً في الولايات المتحدة ، تراجعت وأعادت إغلاق 11 متجر في عدة ولايات مؤقتاً .حتى إشعار آخر",
          image: "/img/blog/filter/post_12.jpg",
          category: "trademarks",
          id: uuid.v4(),
          theme: "yellow",
          link: "#"
        },
        {
          title: "هناك حقيقة مثبتة منذ زمن طويل",
          description:
            "بعد أن فتحت شركة آبل متاجرها مؤخراً في الولايات المتحدة ، تراجعت وأعادت إغلاق 11 متجر في عدة ولايات مؤقتاً .حتى إشعار آخر",
          image: "/img/blog/filter/post_13.jpg",
          category: "digital-marketing",
          id: uuid.v4(),
          theme: "blue",
          link: "#"
        },
        {
          title: "هناك حقيقة مثبتة منذ زمن طويل",
          description:
            "بعد أن فتحت شركة آبل متاجرها مؤخراً في الولايات المتحدة ، تراجعت وأعادت إغلاق 11 متجر في عدة ولايات مؤقتاً .حتى إشعار آخر",
          image: "/img/blog/filter/post_14.jpg",
          category: "web-development",
          id: uuid.v4(),
          theme: "red",
          link: "#"
        },
        {
          title: "هناك حقيقة مثبتة منذ زمن طويل",
          description:
            "بعد أن فتحت شركة آبل متاجرها مؤخراً في الولايات المتحدة ، تراجعت وأعادت إغلاق 11 متجر في عدة ولايات مؤقتاً .حتى إشعار آخر",
          image: "/img/blog/filter/post_15.jpg",
          category: "marketing",
          id: uuid.v4(),
          theme: "yellow",
          link: "#"
        },
        {
          title: "هناك حقيقة مثبتة منذ زمن طويل",
          description:
            "بعد أن فتحت شركة آبل متاجرها مؤخراً في الولايات المتحدة ، تراجعت وأعادت إغلاق 11 متجر في عدة ولايات مؤقتاً .حتى إشعار آخر",
          image: "/img/blog/filter/post_16.jpg",
          category: "mobile-development",
          id: uuid.v4(),
          theme: "purple",
          link: "#"
        }
      ]
    };
  },
  computed: {
    postsFilter() {
      if (this.currentFilter === "all") {
        return this.posts.slice(0, this.postsPerPage);
      } else {
        return this.posts
          .slice(0, this.currentPage * this.postsPerPage)
          .filter(i => i.category === this.currentFilter);
      }
    }
  },
  methods: {
    setFilter(filter) {
      this.currentFilter = filter;
    },
    listView() {
      this.layout = "list";
      this.trans = false;
      setTimeout(() => {
        this.trans = true;
      }, 500);
    },
    gridView() {
      this.layout = "grid";
      this.trans = false;
      setTimeout(() => {
        this.trans = true;
      }, 500);
    }
  }
};
</script>

<style lang="scss" scoped>
.posts-filter {
  .section-title {
    background-color: #da56fb1a;
    span {
      background-color: #da56fb;
    }
  }
  .filters {
    @media (max-width: 768px) {
      display: flex;
      overflow-x: scroll;
      align-items: center;
      min-height: 60px;
      margin-left: 20px;
    }
    &::-webkit-scrollbar {
      display: none;
    }
    .filter {
      margin-left: 20px;
      font-size: 13px;
      font-weight: 500;
      color: #222;
      position: relative;
      padding: 0;
      @media (max-width: 768px) {
        flex-basis: auto;
        flex-shrink: 0;
      }
      &.active {
        color: #1da9f7;
        &:after {
          content: "";
          position: absolute;
          width: 100%;
          height: 3px;
          background-color: #1da9f7;
          left: 0;
          bottom: -10px;
        }
      }
    }
  }
  .list-grid {
    @media (max-width: 768px) {
      flex-basis: auto;
      flex-shrink: 0;
    }
    button {
      font-size: 18px;
      color: #222;
      opacity: 0.3;
      transition: all 0.3s linear;
      border: none;
      background: none;
      &.active {
        opacity: 1;
      }
    }
  }
  .posts {
    .post {
      margin-top: 30px;
      text-decoration: none;
      position: relative;
      &:before {
        content: "";
        background-image: url("/img/svg/layer_shape.svg");
        width: 100px;
        height: 40px;
        position: absolute;
        left: 20px;
        top: -15px;
        background-repeat: no-repeat;
      }
      &:after {
        content: "";
        position: absolute;
        left: 49px;
        top: -15px;
        width: 35px;
        height: 35px;
        border-radius: 50%;
        background-color: #e95557;
      }
      &.red::after {
        background-color: #e95557;
      }
      &.yellow::after {
        background-color: #ffbf48;
      }
      &.purple::after {
        background-color: #da56fb;
      }
      &.blue::after {
        background-color: #1da9f7;
      }
      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
      .post-title {
        display: flex;
        font-weight: 500;
        font-size: 12px;
        padding: 20px 0 0 20px;
        margin: 0;
        align-items: center;
        justify-content: space-between;
      }
      .post-content {
        color: #777;
      }
    }
    &.list {
      .post {
        &:before,
        &:after {
          display: none;
        }
        .post-wrapper {
          display: flex;
          .post-image {
            width: 50%;
          }
          .post-info {
            padding-right: 20px;
            display: flex;
            flex-direction: column;
            justify-content: center;
            .post-title {
              padding: 0;
            }
            .post-content {
              font-size: 14px;
              font-weight: 300;
              margin: 0;
              margin-top: 10px;
            }
          }
        }
      }
    }
  }
  .btn-asol {
    margin: auto;
    margin-top: 60px;
  }
}
.posts-enter {
  transform: scale(0.5) translatey(-80px);
  opacity: 0;
}

.posts-leave-to {
  transform: scale(0.5) translatey(30px);
  opacity: 0;
}

.posts-leave-active {
  position: absolute;
  z-index: -1;
}

.post {
  transition: all 0.5s ease-in-out;
  &.non-trans {
    transition: none;
  }
}
</style>
