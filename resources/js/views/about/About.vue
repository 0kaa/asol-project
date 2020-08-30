<template>
  <main class="about">
    <jumbotron :image="image" :pageTitle="pageTitle"></jumbotron>
    <who-us-section></who-us-section>
    <counter></counter>
    <why-us :items="whyus.accordions" :image="whyus.imageUrl" :title="whyus.title"></why-us>
    <contact-us></contact-us>
  </main>
</template>

<script>
import Jumbotron from "../../components/global/Jumbotron";
import WhoUsSection from "../../components/about/WhoUsSection";
import Counter from "../../components/about/Counter";
import WhyUs from "../../components/global/WhyUs";
import ContactUs from "../../components/about/ContactUs";
export default {
  name: "About",
  components: { Jumbotron, WhoUsSection, Counter, WhyUs, ContactUs },
  data() {
    return {
      image: "/img/about_slider.jpg",
      pageTitle: "عن الشركة",
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

<style lang="scss"></style>
