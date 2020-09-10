<template>
  <div class="works-section pd-100">
    <div class="container">
      <div class="section-heading mb-20" :class="{'text-center':filter == false}">
        <h3 class="section-title">
          <div class="section-title-icon">
            <span class="icon-images1"></span>
          </div>
          {{ sectionTitle }}
        </h3>
        <h4 class="text-title" v-if="!filter">{{title}}</h4>
        <div class="d-flex align-items-center justify-content-between section-filter" v-if="filter">
          <h4 class="text-title mb-0">{{ textTitle }}</h4>
          <div class="filters">
            <button
              class="filter btn"
              :class="{ active: currentFilter === 'all' }"
              v-on:click="setFilter('all')"
            >عرض الكل</button>
            <button
              v-for="(filter, index) in filters"
              :key="index"
              class="filter btn"
              :class="[
                                filter.slug,
                                { active: currentFilter === filter.slug }
                            ]"
              v-on:click="setFilter(filter.slug)"
            >{{ filter.title }}</button>
          </div>
        </div>
      </div>

      <transition-group class="projects row" tag="div" name="projects">
        <div class="project col-lg-4 col-sm-6" v-for="project in projectItems" :key="project.id">
          <router-link class="project-wrapper" :to="project.link">
            <img class="img-fluid project-image" v-bind:src="project.image" />
            <h4 class="project-title">
              {{ project.title }}
              <span class="icon-arrow-left"></span>
            </h4>
          </router-link>
        </div>
      </transition-group>

      <button class="btn btn-asol" @click="nextPage" v-if="currentPage != totalPages">
        عرض المزيد
        <span class="spinner icon-spinner" v-if="btnLoading"></span>
      </button>
    </div>
  </div>
</template>

<script>
import { uuid } from "vue-uuid";
export default {
  name: "Works",
  props: {
    title: {
      type: String
    },
    filter: {
      type: Boolean,
      default: true
    }
  },
  data() {
    return {
      sectionTitle: "الاعمال",
      textTitle: "باقة من آخر أعمالنا",
      currentFilter: "all",
      currentPage: 1,
      user: false,
      btnLoading: false,
      postsPerPage: 6,
      filters: [
        {
          title: "تصميم مواقع",
          slug: "web-design"
        },
        {
          title: "برمجة المواقع",
          slug: "web-development"
        },
        {
          title: "تطبيقات الجوال",
          slug: "mobile-development"
        }
      ],
      projects: [
        {
          title: "خلافاَ للإعتقاد السائد",
          image: "/img/project_01.png",
          category: "web-design",
          id: uuid.v4(),
          link: "/works/web-design"
        },
        {
          title: "لوريم إيبسوم ولايزال المعيار للنص",
          image: "/img/project_02.png",
          category: "web-development",
          id: uuid.v4(),
          link: "#"
        },
        {
          title: "بشكل إفتراضي كنموذج عن النص",
          image: "/img/project_03.png",
          category: "mobile-development",
          id: uuid.v4(),
          link: "#"
        },
        {
          title: "جذور في الأدب اللاتيني الكلاسيكي",
          image: "/img/project_04.png",
          category: "web-design",
          id: uuid.v4(),
          link: "#"
        },
        {
          title: "هناك حقيقة مثبتة منذ زمن طويل",
          image: "/img/project_05.png",
          category: "web-development",
          id: uuid.v4(),
          link: "#"
        },
        {
          title: "ببساطة نص شكلي",
          image: "/img/project_06.png",
          category: "mobile-development",
          id: uuid.v4(),
          link: "#"
        },
        {
          title: "هناك حقيقة مثبتة منذ زمن طويل",
          image: "/img/project_05.png",
          category: "web-development",
          id: uuid.v4(),
          link: "#"
        },
        {
          title: "ببساطة نص شكلي",
          image: "/img/project_06.png",
          category: "mobile-development",
          id: uuid.v4(),
          link: "#"
        }
      ]
    };
  },
  computed: {
    projectItems() {
      if (this.currentFilter === "all") {
        return this.projects.slice(0, this.currentPage * this.postsPerPage);
      } else {
        return this.projects
          .slice(0, this.currentPage * this.postsPerPage)
          .filter(i => i.category === this.currentFilter);
      }
    },
    totalPages() {
      return Math.ceil(this.projects.length / this.postsPerPage);
    }
  },
  methods: {
    setFilter(filter) {
      this.currentFilter = filter;
    },
    nextPage() {
      if (this.currentPage < this.totalPages) {
        this.btnLoading = true;

        setTimeout(() => this.currentPage++, 500);
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.works-section {
  position: relative;
  &:before,
  &:after {
    content: "";
    background-image: url(/img/svg/dots.svg);
    background-repeat: no-repeat;
    position: absolute;
    bottom: 100px;
    right: 0;
    width: 190px;
    height: 45px;
    z-index: -1;
    @media (max-width: 1400px) {
      display: none;
    }
  }
  &:after {
    background-image: url(/img/svg/react-angle.svg);
    left: -166px;
    width: 462px;
    height: 462px;
    right: inherit;
  }
  .section-heading {
    position: relative;
    &:before {
      content: "";
      background-image: url(/img/svg/right-dash.svg);
      background-repeat: no-repeat;
      width: 70px;
      height: 350px;
      right: -140px;
      position: absolute;
      top: 0;
      z-index: -1;
      @media (max-width: 1400px) {
        display: none;
      }
    }
    @media (max-width: 992px) {
      text-align: center;
    }
    .section-title {
      background-color: #da56fb1a;
      div {
        background-color: #da56fb;
      }
    }
    .section-filter {
      @media (max-width: 992px) {
        display: block !important;
        .text-title {
          margin-bottom: 30px !important;
        }
      }
    }
  }
  .filters {
    @media (max-width: 992px) {
      width: 100%;
      display: flex;
      overflow-x: scroll;
      align-items: center;
      justify-content: center;
      &::-webkit-scrollbar {
        display: none;
      }
    }
    @media (max-width: 576px) {
      justify-content: flex-start;
    }
    .filter {
      background-color: #00000008;
      border-radius: 50px;
      margin-right: 10px;
      font-size: 13px;
      font-weight: 600;
      color: #222;
      @media (max-width: 992px) {
        flex-basis: auto;
        flex-shrink: 0;
        margin: 0;
        margin-left: 10px;
      }
      @media (max-width: 576px) {
        width: 40%;
      }

      &:nth-of-type(2) {
        color: #ffbf48;
        background-color: #ffbf481a;
        &.active {
          background-color: #ffbf48;
          color: #222;
        }
      }
      &:nth-of-type(3) {
        color: #e95557;
        background-color: #e955571a;
        &.active {
          background-color: #e95557;
          color: #fff;
        }
      }
      &:nth-of-type(4) {
        color: #1da9f7;
        background-color: #1da9f71a;
        &.active {
          background-color: #1da9f7;
          color: #fff;
        }
      }
    }
  }
  .projects {
    .project {
      margin-top: 50px;
      .project-wrapper {
        text-decoration: none;
        width: 100%;
        height: 100%;
        display: block;
        img {
          width: 100%;
          object-fit: cover;
        }
        .project-title {
          display: flex;
          font-weight: 500;
          font-size: 14px;
          padding: 20px 20px 0 20px;
          margin: 0;
          align-items: center;
          justify-content: space-between;
        }
      }
    }
  }
  .btn-asol {
    margin: auto;
    margin-top: 60px;
  }
}
.projects-enter {
  transform: scale(0.5) translatey(-80px);
  opacity: 0;
}

.projects-leave-to {
  transform: scale(0.5) translatey(30px);
  opacity: 0;
}

.projects-leave-active {
  position: absolute;
  z-index: -1;
}

.project {
  transition: all 0.5s ease-in-out;
}
.yellow {
  .section-heading {
    .section-title {
      background-color: #fff9ec;
      .section-title-icon {
        background-color: #ffbf48;
        color: #222;
      }
    }
  }
  .btn-asol {
    background-color: #ffbf48 !important;
    color: #222 !important;
  }
}
.red {
  .btn-asol {
    background-color: #e95557 !important;
  }
}
.blue {
  .btn-asol {
    background-color: #1da9f7 !important;
  }
}
</style>
