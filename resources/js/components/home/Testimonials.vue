<template>
  <div class="testimonials-section pd-100">
    <div class="container">
      <div class="section-header text-center mb-40">
        <h3 class="text-title mb-20">{{ sectionTitle }}</h3>
        <div class="dots d-flex align-items-center justify-content-center">
          <span class="dot"></span>
          <span class="dot is-active"></span>
          <span class="dot"></span>
        </div>
      </div>
      <hooper :settings="hooperSettings">
        <Slide
          class="testimonial-box position-relative"
          v-for="(testimonial, index) in testimonials"
          :key="index"
        >
          <div class="inner">
            <div class="user-image">
              <img :src="testimonial.image" alt="user" class="img-fluid" />
            </div>
            <h3 class="testimonial-title">{{ testimonial.title }}</h3>
            <p class="testimonial-message">{{ testimonial.message }}</p>
            <div class="user-info">
              <span class="username">{{ testimonial.userName }}</span>
              <span class="job-title">{{testimonial.jobTitle}}</span>
            </div>
          </div>
        </Slide>

        <hooper-navigation slot="hooper-addons"></hooper-navigation>
      </hooper>
    </div>
  </div>
</template>

<script>
import { Hooper, Slide, Navigation as HooperNavigation } from "hooper";
import "hooper/dist/hooper.css";
export default {
  name: "Testimonials",
  components: {
    Hooper,
    Slide,
    HooperNavigation
  },
  data() {
    return {
      sectionTitle: "ماذا قالوا عن أصول؟",
      hooperSettings: {
        rtl: true,
        wheelControl: false,
        autoPlay: true,
        playSpeed: "8000",
        trimWhiteSpace: true,
        breakpoints: {
          576: {
            itemsToShow: 1
          },
          768: {
            itemsToShow: 2
          },
          992: {
            itemsToShow: 3
          }
        }
      },
      testimonials: [
        {
          image: "/img/svg/user.svg",
          title: "خدمة ممتازة",
          message:
            "هنالك العديد من الأنواع المتوفرة لنصوص لوريم تعديلها بشكل ما عبر إدخال بعض النوادر أو الكلمات كنت تريد أن تستخدم نص لوريم إيبسوم",
          userName: "عبد الرحمن محمد",
          jobTitle: "مدير شركة أنصار"
        },
        {
          image: "/img/svg/user.svg",
          title: "خدمة ممتازة",
          message:
            "هنالك العديد من الأنواع المتوفرة لنصوص لوريم تعديلها بشكل ما عبر إدخال بعض النوادر أو الكلمات كنت تريد أن تستخدم نص لوريم إيبسوم",
          userName: "عبد الرحمن محمد",
          jobTitle: "مدير شركة أنصار"
        },
        {
          image: "/img/svg/user.svg",
          title: "خدمة ممتازة",
          message:
            "هنالك العديد من الأنواع المتوفرة لنصوص لوريم تعديلها بشكل ما عبر إدخال بعض النوادر أو الكلمات كنت تريد أن تستخدم نص لوريم إيبسوم",
          userName: "عبد الرحمن محمد",
          jobTitle: "مدير شركة أنصار"
        },
        {
          image: "/img/svg/user.svg",
          title: "خدمة ممتازة",
          message:
            "هنالك العديد من الأنواع المتوفرة لنصوص لوريم تعديلها بشكل ما عبر إدخال بعض النوادر أو الكلمات كنت تريد أن تستخدم نص لوريم إيبسوم",
          userName: "عبد الرحمن محمد",
          jobTitle: "مدير شركة أنصار"
        },
        {
          image: "/img/svg/user.svg",
          title: "خدمة ممتازة",
          message:
            "هنالك العديد من الأنواع المتوفرة لنصوص لوريم تعديلها بشكل ما عبر إدخال بعض النوادر أو الكلمات كنت تريد أن تستخدم نص لوريم إيبسوم",
          userName: "عبد الرحمن محمد",
          jobTitle: "مدير شركة أنصار"
        }
      ]
    };
  }
};
</script>

<style lang="scss" scoped>
.testimonials-section {
  background-color: #f7fafd;
  background: linear-gradient(0, #ffffff 35%, #f7fafd 35%);
  .inner {
    background-color: #fff;
    padding: 20px;
    box-shadow: 0 3px 6px #0000000d;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 40px 10px 10px;
    &::before {
      content: "\e95b";
      font-family: "icomoon" !important;
      font-size: 30px;
      position: absolute;
      width: 42px;
      height: 42px;
      line-height: 42px;
      text-align: center;
      left: 30px;
      color: #7777771a;
      top: 50px;
    }
    .user-image {
      //margin-top: -50px;
      position: absolute;
      top: 0;
      width: 64px;
      height: 64px;
      margin: 0;
    }
    .testimonial-title {
      margin-top: 30px;
      margin-bottom: 20px;
    }
  }
  .hooper {
    height: 100%;
  }
  .hooper-navigation {
    position: absolute;
    top: -40px;
    width: 100%;
  }
}
</style>
