<template>
  <div class="jumbotron-asol">
    <div class="jumbotron-image" :style="{ 'background-image': 'url(' + image + ')' }">
      <div :class="(overlay ? 'overlay' :'over-non')">
        <div v-if="breadcrumb">
          <h3 class="page-title">{{ pageTitle }}</h3>
          <ul class="breadcrumb-asol list-unstyled">
            <router-link to="/" exact tag="li">
              <a>الرئيسية</a>
              &nbsp;
              &gt;
              &nbsp;
            </router-link>
            <li class="active">{{ pageTitle }}</li>
          </ul>
        </div>
        <a @click.prevent="$router.go(-1)" href="#" class="back-btn">
          <span class="icon-arrow-left"></span>
        </a>
      </div>
    </div>
    <div class="inquiry">
      <img src="/img/svg/clock.svg" class="img-fluid mb-10" />
      <a href="tel:0102-5152-421" class="d-flex flex-column align-items-center">
        <span>لديك استفسار؟</span>
        <span class="number">0102-5152-421</span>
      </a>
    </div>
    <div class="breadcrumb-2" v-if="!breadcrumb">
      <div class="container">
        <ul class="breadcrumb-asol list-unstyled">
          <router-link to="/" exact tag="li">
            <a>الرئيسية</a>
            &nbsp;
            &gt;
            &nbsp;
          </router-link>
          <li>{{fullpath }}</li>

          <li class="active">{{ this.$route.meta.title }}</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "jumbotron",
  computed: {
    fullpath() {
      let path = this.$route.params.permalink.replace("-", " ");

      return path;
    },
  },
  props: {
    image: String,
    pageTitle: String,
    breadcrumb: {
      type: Boolean,
      default: true,
    },
    overlay: {
      type: Boolean,
      default: true,
    },
  },
};
</script>

<style lang="scss" scoped>
.jumbotron-asol {
  height: 300px;
  position: relative;
  margin-bottom: 50px;
  .jumbotron-image {
    height: 100%;
    background-size: cover;
    background-position: 100% 100%;
    .overlay {
      height: 100%;
      position: relative;
      display: flex;
      align-items: center;
      justify-content: center;
      background: #00000080;
      flex-direction: column;
      padding-top: 70px;
    }
    .over-non {
      height: 100%;
      position: relative;
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
      padding-top: 70px;
    }
    .page-title {
      padding: 5px 30px;
      color: #fff;
      font-weight: 400;
      background-color: #1da9f7;
      border-radius: 50px;
      font-size: 18px;
      margin-bottom: 15px;
    }
    .breadcrumb-asol {
      display: flex;
      align-items: center;
      li {
        color: #fff;
        a {
          color: #fff;
          text-decoration: none;
        }
        span {
          margin: 0 15px;
        }
      }
    }
    &::after {
      content: "";
      background-image: url("/img/svg/Layer_2.svg");
      background-repeat: no-repeat;
      position: absolute;
      top: 218px;
      left: 20px;
      width: 354px;
      height: 144px;
      @media (max-width: 768px) {
        display: none;
      }
    }
    .back-btn {
      position: absolute;
      left: 40px;
      bottom: -17px;
      color: white;
      width: 34px;
      height: 34px;
      background: #1da9f7;
      border-radius: 50%;
      z-index: 99;
      display: flex;
      align-items: center;
      justify-content: center;
      @media (max-width: 768px) {
        display: none;
      }
    }
  }
  .inquiry {
    position: absolute;
    left: 115px;
    display: flex;
    bottom: -70px;
    align-items: center;
    flex-direction: column;
    z-index: 1;
    @media (max-width: 768px) {
      display: none;
    }
    a {
      color: #222;
      font-weight: bold;
      font-size: 21px;
      text-decoration: none;
    }
  }
}
.red {
  .page-title,
  .back-btn {
    background-color: #e95557 !important;
  }
}
.yellow {
  .page-title,
  .back-btn {
    background-color: #ffbf48 !important;
    color: #222 !important;
  }
}
</style>
