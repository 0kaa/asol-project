<template>
  <div class="who-us-section">
    <div class="container">
      <div class="group-container">
        <div class="row">
          <div class="col-md-7 text-section">
            <h3 class="section-title">
              <div class="section-title-icon">
                <span class="icon-logo"></span>
              </div>
              {{ sectionTitle }}
            </h3>
            <h4 class="text-title mb-15">اصول تك</h4>
            <div class="dots d-flex align-items-center mb-40">
              <span class="dot"></span>
              <span class="dot is-active"></span>
              <span class="dot"></span>
            </div>
            <p class="text-description mb-40">{{aboutUs}}</p>
            <ul class="list-unstyled d-flex align-items-center facts-box">
              <li
                :class="'fact-item d-flex align-items-center justify-content-between flex-column ' + fact.theme"
                v-for="(fact, index) in facts"
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
          <div class="col-md-5 img-section">
            <img src="/img/svg/shape2.svg" class="img-fluid" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "WhoUsSection",
  data() {
    return {
      sectionTitle: "من نحن",
      aboutUs:
        "هنالك العديد من الأنواع المتوفرة لنصوص لوريم إيبسوم ولكن الغالبية تم تعديلها بشكل ما عبر إدخال بعض النوادر أو الكلمات العشوائية إلى النص إن كنت تريد أن تستخدم نص لوريم إيبسوم ما عليك أن تتحقق أولاً أن ليس هناك أي كلمات إن كنت تريد أن تستخدم نص .لوريم إيبسوم ما عليك أن تتحقق أولاً أن ليس هناك أي كلمات",
      facts: [
        {
          factTitle: "أفكار متجددة",
          factSubtitle: " تميزك عن الآخرين",
          theme: "black"
        },
        {
          factTitle: "فريق عمل",
          factSubtitle: "يتطور من اجلك",
          theme: "red"
        },
        {
          factTitle: "في الموعد",
          factSubtitle: "يقدر وقتك",
          theme: "blue"
        }
      ]
    };
  }
};
</script>

<style lang="scss" scoped>
.who-us-section {
  padding-top: 40px;
  padding-bottom: 80px;
  .group-container {
    position: relative;
    .text-section {
      @media (max-width: 992px) {
        max-width: 100%;
        flex: 1;
      }
    }
    .text-description {
      font-size: 15px;
      line-height: 1.8;
    }
    .facts-box {
      flex-wrap: wrap;

      .fact-item {
        margin-left: 30px;
        line-height: 1.9;
        @media (max-width: 576px) {
          margin-left: 20px;
        }
        .fact-title {
          color: #222;
          font-weight: 600;
          font-size: 16px;
        }
        .fact-subtitle {
          font-size: 14px;
          color: #777;
          font-weight: 500;
        }
        &.red {
          .fact-title,
          .fact-subtitle {
            color: #e95557;
          }
        }
        &.blue {
          .fact-title,
          .fact-subtitle {
            color: #1da9f7;
          }
        }
      }
    }
    .img-section {
      @media (max-width: 992px) {
        display: none;
      }
    }
  }
}
</style>
