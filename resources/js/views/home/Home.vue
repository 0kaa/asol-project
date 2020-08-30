<template>
  <main class="home">
    <home-slider></home-slider>
    <home-about-section></home-about-section>
    <home-services-section></home-services-section>
    <why-us :items="whyus.accordions" :image="whyus.imageUrl" :title="whyus.title"></why-us>
    <works-section></works-section>
    <home-testimonials-section></home-testimonials-section>
    <contact></contact>
  </main>
</template>

<script>
import HomeSlider from "../../components/home/Slider.vue";
import HomeAboutSection from "../../components/home/AboutSection.vue";
import HomeServicesSection from "../../components/home/ServiceSection.vue";
import WhyUs from "../../components/global/WhyUs.vue";
import WorksSection from "../../components/global/WorksSection.vue";
import HomeTestimonialsSection from "../../components/home/Testimonials.vue";
import Contact from "../../components/global/Contact.vue";

export default {
  name: "Home",
  components: {
    HomeSlider,
    HomeAboutSection,
    HomeServicesSection,
    WhyUs,
    WorksSection,
    HomeTestimonialsSection,
    Contact
  },
  data() {
    return {
      whyus: {
        imageUrl: "/img/svg/whyus.svg",
        title: "لماذا شركة أصول ؟",
        accordions: [
          {
            accordionTitle: "هناك حقيقة مثبتة منذ زمن طويل",
            accordionDescription:
              "لكن الغالبية تم تعديلها بشكل ما عبر إدخال بعض النوادر أو الكلمات العشوائية إلى النص إن كنت تريد أن تستخدم نص لوريم إيبسوم ما عليك أن تتحقق أولاً أن ليس هناك أي كلمات أو عبارات محرجة أو غير لائقة مخبأة في هذا النص"
          },
          {
            accordionTitle: "خلافاَ للإعتقاد السائد فإن لوريم إيبسوم",
            accordionDescription:
              "لكن الغالبية تم تعديلها بشكل ما عبر إدخال بعض النوادر أو الكلمات العشوائية إلى النص إن كنت تريد أن تستخدم نص لوريم إيبسوم ما عليك أن تتحقق أولاً أن ليس هناك أي كلمات أو عبارات محرجة أو غير لائقة مخبأة في هذا النص"
          },
          {
            accordionTitle: "هنالك العديد من الأنواع المتوفرة لنصوص",
            accordionDescription:
              "لكن الغالبية تم تعديلها بشكل ما عبر إدخال بعض النوادر أو الكلمات العشوائية إلى النص إن كنت تريد أن تستخدم نص لوريم إيبسوم ما عليك أن تتحقق أولاً أن ليس هناك أي كلمات أو عبارات محرجة أو غير لائقة مخبأة في هذا النص"
          },
          {
            accordionTitle: "شكل منطقي قريب إلى النص الحقيقي",
            accordionDescription:
              "لكن الغالبية تم تعديلها بشكل ما عبر إدخال بعض النوادر أو الكلمات العشوائية إلى النص إن كنت تريد أن تستخدم نص لوريم إيبسوم ما عليك أن تتحقق أولاً أن ليس هناك أي كلمات أو عبارات محرجة أو غير لائقة مخبأة في هذا النص"
          }
        ]
      }
    };
  }
};
</script>
