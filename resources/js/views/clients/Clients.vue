<template>
  <main class="Clients">
    <jumbotron :image="image" :pageTitle="pageTitle" :overlay="false"></jumbotron>
    <div class="testimonials-section pb-100">
      <div class="container">
        <div class="section-header text-center">
          <h3 class="text-title mb-20">{{ sectionTitle }}</h3>
          <div class="dots d-flex align-items-center justify-content-center">
            <span class="dot"></span>
            <span class="dot is-active"></span>
            <span class="dot"></span>
          </div>
        </div>
        <div class="row">
          <div class="col-md-4" v-for="(testimonial, index) in testimonials" :key="index">
            <div class="testimonial-box mt-40">
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
          </div>
        </div>
      </div>
    </div>
  </main>
</template>
<script>
import Jumbotron from "../../components/global/Jumbotron";
export default {
  name: "Clients",
  components: { Jumbotron },
  data() {
    return {
      image: "/img/clients_slider.jpg",
      pageTitle: "آراء عملاءنا",
      sectionTitle: "ماذا قالوا عن أصول؟",
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
</style>