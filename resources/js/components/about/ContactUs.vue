<template>
  <div class="contact-us-section pd-100">
    <div class="container">
      <div class="section-heading text-center">
        <h3 class="section-title">
          <div class="section-title-icon">
            <span class="icon-phone-solid"></span>
          </div>راسلنا
        </h3>
        <h4 class="text-title mb-30">التواصل مع أصول تك</h4>
        <div class="dots d-flex align-items-center mb-40 justify-content-center">
          <span class="dot"></span>
          <span class="dot is-active"></span>
          <span class="dot"></span>
        </div>
      </div>
      <div class="row">
        <div class="col-md-6">
          <div class="support-col d-flex align-items-start item justify-content-start">
            <div class="img-item">
              <span class="icon-27"></span>
            </div>
            <div class="info">
              <h3>الدعم الفني</h3>
              <p class="mb-10">راسل الدعم الفني لمساعدتك على مدار الساعة</p>
              <router-link to="/contact">تواصل معنا</router-link>
            </div>
          </div>
        </div>
        <div class="col-md-6">
          <div class="calling-col d-flex align-items-start item justify-content-end">
            <div class="info text-left">
              <h3>المبيعات</h3>
              <p class="mb-10">إتصل الأن على المبيعات في إنتظارك لتحقيق كل أحلامك</p>
              <a href="tel:0102-5152-421">اتصل بالمبيعات</a>
            </div>
            <div class="img-item">
              <span class="icon-61"></span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ContactUs",
  data() {
    return {
      image: "/img/about_slider.png",
      pageTitle: "عن الشركة"
    };
  }
};
</script>

<style lang="scss">
.contact-us-section {
  .section-heading {
    .section-title {
      background-color: #ffe1e1;
      .section-title-icon {
        background-color: #e95557;
      }
    }
  }
  .dots {
    .dot {
      background-color: #ffe1e1;
      &.is-active {
        background-color: #e95557;
      }
    }
  }
  .item {
    &.support-col {
      .img-item {
        background-color: #ffbf48;
        margin-left: 20px;
        span[class^="icon-"] {
          font-size: 42px;
          color: #222;
        }
      }
      a {
        color: #ffbf48;
      }
    }
    &.calling-col {
      @media (max-width: 768px) {
        margin-top: 40px;
      }
      .img-item {
        background-color: #1da9f7;
        margin-right: 20px;
        span[class^="icon-"] {
          font-size: 42px;
          color: #fff;
        }
      }
      a {
        color: #1da9f7;
      }
    }
    .img-item {
      padding: 10px;
      margin-top: 10px;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
    }
    .info {
      h3 {
        font-size: 21px;
        font-weight: 600;
        margin-bottom: 5px;
        @media (max-width: 768px) {
          font-size: 18px;
        }
      }
      p,
      a {
        @media (max-width: 768px) {
          font-size: 14px;
        }
      }
      a {
        font-weight: 500;
        text-decoration: none;
      }
    }
  }
}
</style>
