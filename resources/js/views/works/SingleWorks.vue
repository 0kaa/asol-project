<template>
  <main class="single-works">
    <jumbotron :image="image" :overlay="false" :breadcrumb="false"></jumbotron>
    <div class="about-section">
      <div class="container">
        <div class="wrapper row">
          <div class="right-corner col-md-7 offset-md-2 align-self-center">
            <button class="btn-asol btn btn-category">تصميم مواقع</button>
            <h2 class="text-title mb-20">تصميم وبرمجة موقع العربة</h2>
            <p class="description">
              هنالك العديد من الأنواع المتوفرة لنصوص لوريم إيبسوم، ولكن الغالبية تم تعديلها بشكل ما عبر
              إدخال بعض النوادر أو الكلمات العشوائية إلى النص. إن كنت تريد أن تستخدم نص لوريم إيبسوم
              .ما، عليك أن تتحقق أولاً أن ليس هناك أي كلمات أو عبارات محرجة
            </p>
          </div>
          <div class="left-corner col-md-3">
            <button class="btn btn-asol" v-for="i in 4" :key="i">لينك الموقع</button>
          </div>
        </div>
      </div>
    </div>

    <div class="video-section">
      <div class="container">
        <video width="100%" height="440" controls>
          <source src="/../../video.mp4" type="video/mp4" />Your browser does not support the video tag.
        </video>
      </div>
    </div>

    <div class="portfolio-section">
      <div class="container">
        <h4 class="title-portfolio">صور خاصة بالعمل</h4>
        <hooper :settings="hooperSettings">
          <Slide class="portfolio-works position-relative" v-for="i in 6" :key="i">
            <div class="inner">
              <div class="user-image">
                <img src="/img/portoflio.jpg" alt="user" class="img-fluid" />
              </div>
            </div>
          </Slide>

          <hooper-navigation slot="hooper-addons"></hooper-navigation>
        </hooper>
      </div>
    </div>
  </main>
</template>
<script>
import Jumbotron from "../../components/global/Jumbotron";
import { Hooper, Slide, Navigation as HooperNavigation } from "hooper";
import "hooper/dist/hooper.css";
export default {
  name: "SingleWorks",
  components: { Jumbotron, Hooper, Slide, HooperNavigation },
  data() {
    return {
      image: "/img/single-works/slider.png",
      hooperSettings: {
        rtl: true,
        wheelControl: false,
        autoPlay: true,
        playSpeed: "8000",
        trimWhiteSpace: true,
        breakpoints: {
          576: {
            itemsToShow: 1,
            
          },
          768: {
            itemsToShow: 2,
          },
          992: {
            itemsToShow: 4,
          },
        },
      },
    };
  },
};
</script>

<style lang="scss">
.single-works {
  .jumbotron-asol {
    height: 500px;
    margin-bottom: 100px;
    .jumbotron-image {
      &:after {
        top: 418px;
      }
    }
  }
  .breadcrumb-2 {
    padding-top: 20px;
    ul {
      display: flex;
      align-items: center;
      a,
      li {
        color: #222222;
      }
    }
  }
  .about-section {
    padding-bottom: 80px;
    .wrapper {
      .right-corner {
        p {
          line-height: 28px;
          font-weight: 400;
          font-size: 15px;
        }
      }
      .left-corner {
        .btn {
          width: 100%;
          margin-bottom: 20px;
          &:last-child {
            margin: 0;
          }
        }
      }
    }
  }
  .video-section,
  .portfolio-section {
    padding-bottom: 80px;
  }

  .portfolio-section {
    .title-portfolio {
      position: relative;
      display: flex;
      align-items: center;
      margin: 0 10px;
      margin-bottom: 30px;
      &:after {
        content: "";
        background-image: url("/img/svg/single-portfolio-shape.svg");
        position: absolute;
        left: 0;
        width: 327px;
        height: 46px;
        background-size: cover;
      }
    }
    .hooper {
      height: 100%;
      .hooper-navigation.is-rtl .hooper-prev,
      .hooper-navigation.is-rtl .hooper-next {
        right: -40px;
        border: 1px solid #1da9f7;
        border-radius: 50%;
        padding: 0;
        color: #1da9f7;
        padding: 0.2rem;
      }
      .hooper-navigation.is-rtl .hooper-next {
        left: -40px;
        right: inherit;
      }
    }
    .inner {
      padding: 0 10px;
      img {
        width: 100%;
        object-fit: cover;
      }
    }
  }
}
</style>
