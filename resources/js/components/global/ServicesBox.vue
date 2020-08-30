<template>
  <div class="services-box">
    <router-link
      :to="to"
      exact
      active-class
      exact-active-class
      class="inner-box text-center"
      :class="background"
    >
      <span :class="icon" class="box-icon mb-40" />
      <h3 class="box-title">{{ title }}</h3>
      <p class="box-description">{{ description }}</p>

      <div class="plus-icon">
        <span class="icon-plus"></span>
      </div>
    </router-link>
  </div>
</template>

<script>
export default {
  name: "ServicesBox",
  props: {
    title: String,
    description: String,
    icon: String,
    background: String,
    to: {
      type: String,
      default: "/"
    }
  }
};
</script>

<style lang="scss" scoped>
.services-box {
  margin-top: 70px;
  .inner-box {
    padding: 40px 36px 71px 36px;
    height: 100%;
    display: block;
    text-decoration: none;
    &.red {
      background-color: #fef6f6;
      .box-icon {
        color: #e95557;
      }
      .plus-icon {
        background-color: #e95557;
      }
    }
    &.blue {
      background-color: #e8f6ff;
      .box-icon {
        color: #1da9f7;
      }
    }
    &.yellow {
      background-color: #fff9ec;
      .box-icon {
        color: #ffbf48;
      }
      .plus-icon {
        background-color: #ffbf48;
      }
    }
    .box-icon {
      font-size: 64px;
      display: block;
    }
    .box-title {
      margin-bottom: 20px;
      font-size: 18px;
      color: #222;
      font-weight: bold;
    }
    .box-description {
      margin: 0;
      font-size: 14px;
      color: #222;
      font-weight: 400;
      line-height: 1.8;
    }
    .plus-icon {
      position: absolute;
      bottom: -32px;
      background: #1da9f7;
      width: 64px;
      height: 64px;
      line-height: 64px;
      color: #fff;
      border-radius: 50%;
      left: 0;
      right: 0;
      margin: auto;
    }
  }
}
</style>
