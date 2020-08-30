<template>
  <div class="backgroundSlider">
    <transition-group name="fade" tag="div">
      <div v-for="i in [currentIndex]" :key="i" :class="'slider_'+i">
        <div class="background-image" :style="'background-image:url('+currentImg.image+')'">
          <div class="content-slider">
            <div class="path-slider">
              <div class="socials">
                <a :href="social.link" v-for="(social,index) in socials" :key="index">
                  <span :class="`icon-${social.name}`"></span>
                  {{social.name}}
                </a>
              </div>
              <div class="clock">
                <h4 class="title">
                  لديك استفسار؟
                  <a href="tel:0102-5152-421" class="d-block">0102-5152-421</a>
                </h4>
                <div class="image-clock">
                  <span class="icon-7"></span>
                </div>
              </div>
            </div>
            <div class="container slider-container">
              <div class="content">
                <h3>{{currentImg.subTitle}}</h3>
                <h2>{{currentImg.title}}</h2>
                <p>{{currentImg.description}}</p>
                <a class="btn btn-asol" href="#">{{currentImg.buttonText}}</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </transition-group>
    <div class="container dots-container">
      <div class="slider-dots">
        <a
          href="#"
          v-for="i in slides.length"
          :key="i"
          :data-index="i"
          class="dot-link"
          :class="{active: i === currentIndex}"
          @click.prevent="dotClick"
        >
          <div class="number" :data-index="i">{{i}}</div>
          <div class="title" :data-index="i">
            <div :data-index="i">{{currentImg.subTitle}}</div>
            <div :data-index="i">{{currentImg.title}}</div>
          </div>
        </a>
        <div class="count">
          <div>{{slides.length}} / {{currentIndex}}</div>
          <a class="next" @click.prevent="next" href="#">
            <span class="icon-arrow-left"></span>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "HomeSlider",
  data() {
    return {
      slides: [
        {
          subTitle: "برمجة",
          title: "تطبيقات الجوال",
          description:
            "في إنشاء حلول رقمية مبتكرة وتوسيع السوق الخاص بك .مع حلولنا التجارة الإلكترونية",
          buttonText: "اتصل للحصول على استشارة مجانية",
          image: "/img/host-slider-bgp1.jpg"
        },
        {
          subTitle: "برمجة",
          title: "مواقع الأنترنت",
          description:
            "في إنشاء حلول رقمية مبتكرة وتوسيع السوق الخاص بك .مع حلولنا التجارة الإلكترونية",
          buttonText: "اتصل للحصول على استشارة مجانية",
          image: "/img/host-slider-bgp1.jpg"
        },
        {
          subTitle: "برمجة",
          title: "متاجر الكترونية",
          description:
            "في إنشاء حلول رقمية مبتكرة وتوسيع السوق الخاص بك .مع حلولنا التجارة الإلكترونية",
          buttonText: "اتصل للحصول على استشارة مجانية",
          image: "/img/host-slider-bgp1.jpg"
        }
      ],
      socials: [
        {
          name: "facebook",
          link: "#"
        },
        {
          name: "twitter",
          link: "#"
        },
        {
          name: "instagram",
          link: "#"
        }
      ],
      timer: null,
      currentIndex: 1,
      myIndex: 0
    };
  },

  mounted() {
    //this.start();
  },

  methods: {
    dotClick(e) {
      this.currentIndex = parseInt(e.target.getAttribute("data-index"));
    },
    next() {
      let x = this.slides;
      this.currentIndex++;
      if (this.currentIndex > x.length) {
        this.currentIndex = 1;
      }
    },

    start() {
      this.timer = setInterval(this.next, 10000);
    }
  },

  computed: {
    currentImg() {
      return this.slides[Math.abs(this.currentIndex) % this.slides.length];
    }
  }
};
</script>

<style lang="scss" scoped>
.backgroundSlider {
  min-height: 700px;
  position: relative;
  @media (max-width: 768px) {
    min-height: 430px;
  }
  .background-image {
    width: 100%;
    height: 700px;
    background-size: cover;
    background-position: center;
    @media (max-width: 992px) {
      background-position: 0;
    }
    @media (max-width: 768px) {
      height: 500px;
      background-position: 0;
    }
    @media (max-width: 576px) {
      height: 430px;
    }
    .content-slider {
      height: 100%;
      width: 100%;
      position: relative;
      .path-slider {
        position: absolute;
        height: 100%;
        top: 0;
        right: 0;
        width: 400px;
        @media (max-width: 1200px) {
          display: none;
        }
        &::before {
          background-size: cover;
          content: "";
          background-image: url("/img/svg/slider_path.svg");
          background-repeat: no-repeat;
          display: block;
          height: 100%;
        }
        .socials {
          transform: rotate(90deg);
          position: absolute;
          top: 300px;
          right: -130px;
          a {
            color: #fff;
            margin: 0 10px;
          }
        }
        .clock {
          position: absolute;
          bottom: 20px;
          display: flex;
          align-items: center;
          justify-content: center;
          right: 50px;
          .title {
            margin: 0;
            color: #fff;
            font-weight: 400;
            font-size: 21px;
            a {
              color: #fff;
            }
          }
          .image-clock {
            background-color: #ffffffb5;
            height: 120px;
            width: 120px;
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            margin-right: 20px;
            span {
              font-size: 60px;
              background-color: #fff;
              padding: 20px;
              border-radius: 50%;
              color: #222;
            }
          }
        }
      }
      .slider-container {
        display: flex;
        height: 100%;
        align-items: flex-end;
        justify-content: center;
        flex-direction: column;
        position: relative;
        @media (max-width: 576px) {
          align-items: center;
        }
        .content {
          max-width: 600px;
          @media (max-width: 576px) {
            max-width: 340px;
          }
          h3,
          p {
            font-size: 26px;
            font-weight: 300;
            color: #222;
            @media (max-width: 768px) {
              font-size: 18px;
            }
            @media (max-width: 576px) {
              font-size: 14px;
            }
          }
          h2 {
            font-size: 42px;
            @media (max-width: 768px) {
              font-size: 24px;
            }
          }
          .btn-asol {
            display: inline-block;
            background-color: #ffbf48;
            color: #222 !important;
            margin-top: 10px;
            @media (max-width: 576px) {
              font-size: 13px;
              padding: 10px 20px;
            }
          }
        }
      }
    }
  }
  .dots-container {
    position: absolute;
    left: 0;
    right: 0;
    bottom: 25px;
    display: flex;
    align-items: center;
    justify-content: flex-end;

    .slider-dots {
      position: absolute;
      bottom: 0;
      left: 0;
      display: flex;
      align-items: center;

      @media (max-width: 768px) {
        width: 100%;
        justify-content: center;
      }
      .dot-link {
        display: flex;
        align-items: center;
        margin-left: 60px;
        text-decoration: none;
        @media (max-width: 768px) {
          margin-left: 20px;
        }
        .number {
          font-size: 64px;
          color: #222;
          font-weight: bold;
          margin-left: 30px;
          @media (max-width: 768px) {
            font-size: 32px;
            margin-left: 5px;
          }
        }
        .title {
          color: #222;
          font-weight: 500;
          font-size: 21px;
          @media (max-width: 768px) {
            font-size: 12px;
          }
        }
        &.active {
          display: none;
        }
      }
      .count {
        display: flex;
        align-items: center;
        font-size: 21px;
        font-weight: 500;
        color: #222;
        @media (max-width: 768px) {
          font-size: 16px;
        }
        .next {
          width: 64px;
          height: 64px;
          line-height: 64px;
          text-align: center;
          background-color: #71e7fd;
          border-radius: 50%;
          color: #222;
          text-decoration: none;
          font-size: 21px;
          margin-right: 10px;
          @media (max-width: 768px) {
            width: 34px;
            height: 34px;
            line-height: 34px;
            font-size: 16px;
          }
        }
      }
    }
  }
}
.fade-enter-active,
.fade-leave-active {
  transition: all 0.9s ease;
  overflow: hidden;
  visibility: visible;
  position: absolute;
  width: 100%;
  opacity: 1;
}

.fade-enter,
.fade-leave-to {
  visibility: hidden;
  width: 100%;
  opacity: 0;
}
</style>
