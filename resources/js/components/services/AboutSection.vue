<template>
  <div class="about-section pb-100">
    <div class="container">
      <div class="row mb-60">
        <div class="col-md-5">
          <div class="image-section">
            <img :src="about.image" class="img-fluid" />
          </div>
        </div>
        <div class="col-md-7 align-self-center">
          <div class="text-section">
            <h2 class="title mb-20">{{about.title}}</h2>
            <p class="text-description">{{about.description}}</p>
            <div class="btns">
              <a href="#" class="btn" :class="'btn-'+about.theme">
                لديك أستفسار؟
                <span class="icon-envelope-solid"></span>
              </a>
              <a href="#" class="btn btn-blue">
                تواصل معنا
                <span class="icon-whatsapp"></span>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-md-4 box-container col-sm-6" v-for="(box,index) in boxes" :key="index">
          <div class="box text-center" :class="box.theme">
            <span :class="box.image" class="box-image mb-40 d-block"></span>
            <h3 class="box-title">{{box.title}}</h3>
            <p class="box-description">{{box.description}}</p>
            <a href="#" class="plus-icon">
              <span class="icon-plus"></span>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    about: null,
    boxes: null
  }
};
</script>
<style lang="scss" scoped>
.about-section {
  padding-top: 40px;
  @media (max-width: 768px) {
    padding-top: 0;
  }
  .image-section {
    height: 100%;
    width: 100%;
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
    @media (max-width: 768px) {
      display: none;
    }
  }
  .text-section {
    .title {
      @media (max-width: 768px) {
        font-size: 24px;
      }
    }
    .text-description {
      line-height: 1.7;
      margin-bottom: 40px;
    }
    .btns {
      .btn {
        background-color: #1da9f7;
        border-radius: 100px;
        margin-left: 20px;
        color: #ffff;
        padding: 10px 30px;
        font-weight: 500;
        font-size: 14px;
        &.btn-yellow {
          color: #222;
          background-color: #ffbf48;
        }
        &.btn-red {
          background-color: #e95557;
        }
      }
    }
  }
  .box-container {
    @media (max-width: 768px) {
      margin-bottom: 40px;
      .box {
        border-radius: 0 !important;
      }
    }
    &:first-child {
      .box {
        border-radius: 0px 30px 30px 0px;
      }
    }
    &:last-child {
      margin: 0;
      @media (max-width: 768px) {
        max-width: 100%;
        flex: 100%;
      }
      .box {
        border-radius: 30px 0px 0px 30px;
      }
    }
    .box {
      padding: 40px 20px;
      border: 2px solid;
      height: 100%;
      .box-image {
        font-size: 80px;
      }
      .box-title {
        font-size: 18px;
        font-weight: 600;
        margin-bottom: 20px;
      }
      .box-description {
        font-size: 14px;
        font-weight: 400;
        color: #222;
        line-height: 1.7;
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
      &.blue {
        border-color: #1da9f7;
        .box-image {
          color: #1da9f7;
        }
        .plus-icon {
          background-color: #1da9f7;
        }
      }
      &.red {
        border-color: #e95557;
        .box-image {
          color: #e95557;
        }
        .plus-icon {
          background-color: #e95557;
        }
      }
      &.yellow {
        border-color: #ffbf48;
        .box-image {
          color: #ffbf48;
        }
        .plus-icon {
          background-color: #ffbf48;
        }
      }
    }
  }
}
</style>