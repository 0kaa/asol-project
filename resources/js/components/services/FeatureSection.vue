<template>
  <div class="feature-section pd-100">
    <div class="container">
      <div class="section-heading text-center">
        <h3 class="section-title">
          <div class="section-title-icon">
            <span class="icon-desktop"></span>
          </div>المميزات
        </h3>
        <h4 class="text-title">{{textTitle}}</h4>
        <p>{{description}}</p>
        <div class="dots d-flex align-items-center justify-content-center">
          <span class="dot"></span>
          <span class="dot is-active"></span>
          <span class="dot"></span>
        </div>
      </div>
      <div class="row">
        <div class="col-sm-6" v-for="(feature,index) in features" :key="index">
          <div class="item">
            <div class="list-icon">
              <span :class="feature.image"></span>
            </div>
            <div class="info">
              <h3 class="title">{{feature.title}}</h3>
              <p class="description">{{feature.description}}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "FeatureSection",
  props: {
    textTitle: "",
    description: "",
    features: null
  }
};
</script>

<style lang="scss" scoped>
.feature-section {
  background-color: #f7fafd;
  background-image: url("/img/svg/Group 1641.svg");

  .section-heading {
    p {
      width: 75%;
      margin: auto;
      margin-bottom: 30px;
      @media (max-width: 768px) {
        width: 100%;
        font-size: 14px;
        line-height: 1.9;
      }
    }
  }
  .item {
    display: flex;
    align-items: center;
    margin-top: 50px;
    padding: 0 40px;
    @media (max-width: 992px) {
      flex-direction: column;
      padding: 0;
      .list-icon {
        margin-left: 0 !important;
        margin-bottom: 20px;
      }
      .info {
        text-align: center;
      }
    }
    .list-icon {
      background: #1da9f7;
      padding: 18px;
      border-radius: 50%;
      margin-left: 30px;
      span {
        display: block;
        font-size: 48px;
        color: #fff;
      }
    }
    .info {
      .title {
        font-size: 18px;
      }
      .description {
        font-size: 14px;
        margin: 0;
        line-height: 1.9;
      }
    }
  }
}
.red.seo {
  .feature-section {
    background-color: #fef6f6;
    margin: 100px 0;
    @media (max-width: 1400px) {
      margin-top: 0;
    }
    .section-title {
      background-color: #ffffff;
      .section-title-icon {
        background-color: #e95557;
      }
    }
    .dots {
      .dot {
        background-color: #ffffff;
        &.is-active {
          background-color: #e95557;
        }
      }
    }
    .item {
      .list-icon {
        background-color: #e95557;
      }
    }
  }
}
</style>