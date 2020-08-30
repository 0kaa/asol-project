<template>
  <div class="about-section pd-100">
    <div class="container">
      <div class="row">
        <div class="col-md-5 offset-lg-1 col-lg-4">
          <div class="column-banner">
            <img class="img-fluid" :src="columnBanner.bannerImage" alt="image" />
            <div class="inner-text">
              <img class="img-fluid" :src="columnBanner.bannerIcon" alt="diamond" />
              <p class="text">{{ columnBanner.bannerText }}</p>
            </div>
          </div>
        </div>
        <div class="col-md-7 align-self-center">
          <div class="column-text">
            <h3 class="section-title">
              <div class="section-title-icon">
                <span class="icon-building-regular"></span>
              </div>
              {{ columnText.sectionTitle }}
            </h3>
            <h4 class="text-title mb-30">{{ columnText.textTitle }}</h4>
            <p class="about-description">{{ columnText.textDescription }}</p>
            <ul class="list-unstyled d-flex align-items-center facts-box">
              <li
                class="fact-item d-flex align-items-center justify-content-between flex-column"
                v-for="(fact, index) in columnText.facts"
                :key="index"
              >
                <span class="fact-title">
                  {{
                  fact.factTitle
                  }}
                </span>
                <span class="fact-subtitle">
                  {{
                  fact.factSubtitle
                  }}
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "HomeAboutSection",
  data() {
    return {
      columnText: {
        sectionTitle: "تعرف علينا",
        textTitle: "أصول تك",
        textDescription:
          "هنالك العديد من الأنواع المتوفرة لنصوص لوريم إيبسوم ولكن الغالبية تم تعديلها بشكل ما عبر إدخال بعض النوادر أو الكلمات العشوائية إلى النص إن كنت تريد أن تستخدم نص لوريم إيبسوم ما عليك أن تتحقق أولاً أن ليس هناك أي كلمات",
        facts: [
          {
            factTitle: "أفكار متجددة",
            factSubtitle: " تميزك عن الآخرين"
          },
          {
            factTitle: "فريق عمل",
            factSubtitle: "يتطور من اجلك"
          },
          {
            factTitle: "في الموعد",
            factSubtitle: "يقدر وقتك"
          }
        ]
      },
      columnBanner: {
        bannerImage: "/img/red_image.png",
        bannerIcon: "/img/svg/diamond.svg",
        bannerText: "اكثر من 300 عميل من الوطن العربي"
      }
    };
  }
};
</script>

<style lang="scss" scoped>
.about-section {
  .column-banner {
    position: relative;
    height: 100%;
    border: 10px solid #eee;
    &:after {
      content: "";
      position: absolute;
      background-image: url("/img/svg/about_svg.svg");
      display: block;
      height: 100%;
      width: 100%;
      background-repeat: no-repeat;
      top: -200px;
      right: 0;
      left: 0;
      background-position: center;
      z-index: -1;
    }
    @media (max-width: 768px) {
      display: none;
    }
    & > img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
    .inner-text {
      position: absolute;
      left: -75px;
      bottom: 40px;
      background-color: #e95557;
      max-width: 150px;
      border-radius: 40px 0 0 0;
      padding: 20px 25px;
      text-align: center;
      @media (max-width: 992px) {
        display: none;
      }
      img {
        margin-bottom: 10px;
      }
      p {
        color: #fff;
        font-weight: 400;
        line-height: 1.7;
        margin: 0;
      }
    }
  }
  .column-text {
    .section-title {
      background-color: #e955571a;
      .section-title-icon {
        background: #e95557;
      }
    }
    .text-title {
      @media (max-width: 576px) {
        font-size: 24px;
      }
    }
    .about-description {
      margin-bottom: 30px;
      line-height: 1.7;
      font-weight: 300;
      @media (max-width: 576px) {
        font-size: 14px;
      }
    }
  }
  .facts-box {
    flex-wrap: wrap;
    .fact-item {
      margin-left: 60px;
      line-height: 1.9;
      @media (max-width: 576px) {
        margin-left: 30px;
      }
      .fact-title {
        color: #222;
        font-weight: 500;
        font-size: 16px;
        @media (max-width: 576px) {
          font-size: 14px;
        }
      }
      .fact-subtitle {
        font-size: 14px;
        color: #777;
        font-weight: 400;
        @media (max-width: 576px) {
          font-size: 12px;
        }
      }
    }
  }
}
</style>
