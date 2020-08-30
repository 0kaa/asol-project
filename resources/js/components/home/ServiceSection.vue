<template>
  <div class="services-section pb-100">
    <div class="container">
      <div class="section-heading text-center">
        <h3 class="section-title">
          <span class="section-title-icon">
            <span class="icon-cogs-solid"></span>
          </span>
          {{ sectionTitle }}
        </h3>
        <h4 class="text-title mb-20">{{ textTitle }}</h4>
        <p class="text-description">{{ textDescription }}</p>
        <div class="dots d-flex align-items-center justify-content-center">
          <span class="dot"></span>
          <span class="dot is-active"></span>
          <span class="dot"></span>
        </div>
      </div>
      <div class="row">
        <services-box
          v-for="(box, index) in boxes"
          :key="index"
          :title="box.boxTitle"
          :description="box.boxDescription"
          :icon="box.boxIcon"
          :background="box.boxColor"
          :to="box.to"
          class="col-md-6 col-lg-4"
        ></services-box>
      </div>
    </div>
  </div>
</template>

<script>
import ServicesBox from "../global/ServicesBox";
export default {
  name: "HomeServicesSection",
  components: { ServicesBox },
  data() {
    return {
      sectionTitle: "الخدامات",
      textTitle: "تصميم مواقع الكترونية و تطبيقات جوال من شركة أصول تك",
      textDescription:
        "هنالك العديد من الأنواع المتوفرة لنصوص لوريم إيبسوم ولكن الغالبية تم تعديلها بشكل ما عبر إدخال بعض النوادر أو الكلمات العشوائية إلى النص إن كنت تريد أن تستخدم نص لوريم إيبسوم ما عليك أن تتحقق أولاً أن ليس هناك أي كلمات",
      boxes: [
        {
          boxIcon: "icon-4",
          boxColor: "red",
          boxTitle: "برمجة المواقع الالكترونية",
          boxDescription:
            "إنشاء مواقع بأعلى معايير الجودة (سرعة - حماية) لتأسيس وجود قوي وتحقيق مكاسب وجذب شريحة العملاء المحتملين",
          to: "/services/web-development"
        },
        {
          boxIcon: "icon-62",
          boxColor: "blue",
          boxTitle: "تصميم المتاجر الكترونية",
          boxDescription:
            "العمل على مختلف أنواع التسويق الإلكتروني للوصول إلى جمهورك من خلال جميع قنوات التسويق الإلكتروني المتاحة",
          to: "/services/e-commerce"
        },
        {
          boxIcon: "icon-9",
          boxColor: "yellow",
          boxTitle: "تصميم مواقع إحترافية",
          boxDescription:
            "إنشاء مواقع بأعلى معايير الجودة (سرعة - حماية) لتأسيس وجود قوي وتحقيق مكاسب وجذب شريحة العملاء المحتملين",
          to: "/services/web-design"
        },
        {
          boxIcon: "icon-30",
          boxColor: "yellow",
          boxTitle: "تهيئة المواقع",
          boxDescription:
            "إنشاء مواقع بأعلى معايير الجودة (سرعة - حماية) لتأسيس وجود قوي وتحقيق مكاسب وجذب شريحة العملاء المحتملين",
          to: "/services/seo"
        },
        {
          boxIcon: "icon-38",
          boxColor: "blue",
          boxTitle: "استضافة المواقع",
          boxDescription:
            "إنشاء مواقع بأعلى معايير الجودة (سرعة - حماية) لتأسيس وجود قوي وتحقيق مكاسب وجذب شريحة العملاء المحتملين",
          to: "/services/hosting"
        },
        {
          boxIcon: "icon-20",
          boxColor: "red",
          boxTitle: "برمجة تطبيقات الجوال",
          boxDescription:
            "إنشاء مواقع بأعلى معايير الجودة (سرعة - حماية) لتأسيس وجود قوي وتحقيق مكاسب وجذب شريحة العملاء المحتملين",
          to: "/services/mobile-development"
        }
      ]
    };
  }
};
</script>

<style lang="scss" scoped>
.services-section {
  padding-bottom: 132px;
  position: relative;
  &:before {
    content: "";
    background-image: url("/img/svg/Group1465.svg");
    position: absolute;
    left: 0;
    top: 150px;
    width: 350px;
    height: 250px;
    z-index: -1;
    @media (max-width: 1200px) {
      display: none;
    }
  }
  &:after {
    content: "";
    background-image: url(/img/svg/Group1516.svg);
    background-repeat: no-repeat;
    position: absolute;
    right: 0;
    top: 450px;
    width: 350px;
    height: 100%;
    z-index: -2;
    @media (max-width: 1200px) {
      display: none;
    }
  }

  .section-heading {
    .text-description {
      width: 75%;
      margin: auto;
      margin-bottom: 30px;
      @media (max-width: 768px) {
        width: 100%;
        font-size: 14px;
        padding: 0 20px;
      }
    }
  }
}
</style>
