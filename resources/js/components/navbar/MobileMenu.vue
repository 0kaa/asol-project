<template>
  <div>
    <!-- Mobile Bar -->
    <div class="mobile-nav">
      <div class="d-flex align-items-center justify-content-between">
        <div class="logo-section">
          <router-link to="/" exact-active-class exact active-class class="logo">
            <img :src="'/img/svg/logo.svg'" class="img-fluid" />
            <h3 class="logo-brand">
              <span class="logo-name">{{LogoName}}</span>
              <span class="logo-description">{{LogoDescription}}</span>
            </h3>
          </router-link>
        </div>
        <a href="#" class="menu-icon" @click.prevent="open">
          <span class="icon-menu-icon"></span>
        </a>
      </div>
    </div>
    <!-- Mobile Sidebar -->
    <div class="mobile-menu" v-if="hidden">
      <div class="overlay" @click.prevent="close"></div>
      <div class="menu">
        <div class="logo-section">
          <router-link to="/" exact-active-class exact active-class class="logo">
            <img :src="'/img/svg/logo.svg'" class="img-fluid" />
            <h3 class="logo-brand">
              <span class="logo-name">{{LogoName}}</span>
              <span class="logo-description">{{LogoDescription}}</span>
            </h3>
          </router-link>
        </div>
        <div class="social-list d-flex align-items-center justify-content-center">
          <a href="#" class="facebook">
            <span class="icon-facebook"></span>
          </a>
          <a href="#" class="twitter">
            <span class="icon-twitter"></span>
          </a>
          <a href="#" class="whatsapp">
            <span class="icon-whatsapp"></span>
          </a>
          <a href="#" class="instagram">
            <span class="icon-instagram"></span>
          </a>
        </div>
        <ul class="list-unstyled about-company">
          <li>
            <div class="icon">
              <span class="icon-map-marked-alt-solid"></span>
            </div>
            <div class="info">
              <h5>العنوان</h5>
              <span v-text="address"></span>
            </div>
          </li>
          <li>
            <div class="icon">
              <span class="icon-phone-solid"></span>
            </div>
            <div class="info ltr">
              <h5>رقم الجوال</h5>
              <a :href="'tel:'+phone" v-text="phone"></a>
            </div>
          </li>
          <li>
            <div class="icon">
              <span class="icon-envelope-solid"></span>
            </div>
            <div class="info">
              <h5>البريد الإلكتروني</h5>
              <span v-text="email"></span>
            </div>
          </li>
        </ul>

        <ul class="nav-menu list-unstyled m-0">
          <router-link to="/" exact tag="li" class="nav-item red">
            <span class="icon-home1"></span>
            <a class="nav-link">الرئيسية</a>
          </router-link>
          <router-link to="/about" tag="li" class="nav-item blue">
            <span class="icon-building-regular"></span>
            <a class="nav-link">عن الشركة</a>
          </router-link>

          <li class="nav-item dropdown yellow flex-column align-items-start">
            <div class="d-flex align-items-center w-100">
              <span class="icon-cogs-solid"></span>
              <a class="nav-link dropdown-link" href="#">الخدامات</a>
            </div>
            <div class="drop-container">
              <router-link
                :to="service.link"
                class="nav-link"
                v-for="(service,index) in services"
                :key="index"
              >{{service.title}}</router-link>
            </div>
          </li>
          <router-link to="/works" tag="li" class="nav-item purple">
            <span class="icon-images1"></span>
            <a class="nav-link">اعمالنا</a>
          </router-link>
          <router-link to="/clients" tag="li" class="nav-item red">
            <span class="icon-users-solid"></span>
            <a class="nav-link">اراء عملائنا</a>
          </router-link>
          <router-link to="/blog" tag="li" class="nav-item blue">
            <span class="icon-file-alt-regular"></span>
            <a class="nav-link">المدونة</a>
          </router-link>
          <router-link to="/contact" tag="li" class="nav-item yellow">
            <span class="icon-envelope-solid"></span>
            <a class="nav-link">تواصل معنا</a>
          </router-link>
        </ul>
      </div>
    </div>
  </div>
</template>


<script>
export default {
  name: "MobileMenu",
  props: ["hidden"],
  data() {
    return {
      show: true,
      LogoName: "أصول تك",
      LogoDescription: "ASOL TEC",
      LogoIcon: "",
      address: "جمهورية مصر العربية - المنصورة شارع أحمد ماهر",
      phone: "0020 1025 1524 21",
      email: "info@asol-tec.com",
      services: [
        {
          title: "برمجة المواقع الالكترونية",
          link: "/services/web-development"
        },
        {
          title: "تصميم المتاجر الكترونية",
          link: "/services/e-commerce"
        },
        {
          title: "تصميم مواقع إحترافية",
          link: "/services/web-design"
        },
        {
          title: "تهيئة المواقع",
          link: "/services/seo"
        },
        {
          title: "استضافة المواقع",
          link: "/services/hosting"
        },
        {
          title: "برمجة تطبيقات الجوال",
          link: "/services/mobile-development"
        }
      ]
    };
  },
  methods: {
    close: function() {
      this.$emit("close", false);
      document.body.classList.remove("modal-open");
    },
    open: function() {
      this.$emit("close", true);
      document.body.classList.add("modal-open");
    },
    testPro(e) {
      return false;
    }
  },
  watch: {
    $route() {
      this.close();
    }
  }
};
</script>

<style lang="scss" scoped>
.mobile-menu {
  position: fixed;
  width: 100%;
  height: 100%;
  z-index: 9999;
  top: 0;
  .overlay {
    background-color: #00000080;
    height: 100%;
    width: 100%;
  }
  .menu {
    position: fixed;
    top: 0;
    right: 0;
    z-index: 99;
    background-color: #fff;
    width: 340px;
    height: 100%;
    overflow-y: scroll;
    &::-webkit-scrollbar {
      display: none;
    }
    .logo-section {
      padding: 20px;
      text-align: center;
      .logo {
        display: flex;
        align-items: center;
        text-decoration: none;
        justify-content: center;
        img {
          width: 60px;
        }
        .logo-brand {
          margin: 0;
          display: flex;
          align-items: center;
          flex-direction: column;
          margin-right: 20px;
          .logo-name {
            font-size: 22px;
          }
          .logo-description {
            font-size: 18px;
            font-weight: normal;
          }
        }
      }
    }
    .social-list {
      a {
        margin: 0 15px;
        color: #222;
      }
    }
    .about-company {
      padding: 20px;
      li {
        display: flex;
        color: #222;
        border-top: 1px dashed #eeeeee;
        padding: 15px 0;
        font-size: 14px;
        .icon {
          width: 40px;
          height: 40px;
          line-height: 40px;
          text-align: center;
          font-size: 20px;
          margin-left: 10px;
        }
        .info {
          h5 {
            font-size: 14px;
            font-weight: 600;
          }
          a {
            color: #222;
            text-decoration: none;
          }
          &.ltr {
            direction: ltr;
          }
        }
      }
    }
    .nav-menu {
      li {
        font-size: 14px;
        display: flex;
        align-items: center;
        &.red {
          background-color: #e955570d;
          span {
            background-color: #e95557;
          }
          &.router-link-exact-active,
          &.router-link-active {
            background-color: #e95557;
            & > a {
              color: #fff;
            }
          }
        }
        &.blue {
          background-color: #1da9f70d;
          span {
            background-color: #1da9f7;
          }
          &.router-link-exact-active,
          &.router-link-active {
            background-color: #1da9f7;
            & > a {
              color: #fff;
            }
          }
        }
        &.yellow {
          background-color: #ffbf480d;
          span {
            background-color: #ffbf48;
          }
          &.router-link-exact-active,
          &.router-link-active {
            background-color: #ffbf48;
          }
        }
        &.purple {
          background-color: #da56fb0d;
          span {
            background-color: #da56fb;
          }
          &.router-link-exact-active,
          &.router-link-active {
            background-color: #da56fb;
            & > a {
              color: #fff;
            }
          }
        }
        span {
          margin-left: 10px;
          width: 60px;
          display: inline-block;
          text-align: center;
          height: 100%;
          padding: 10px;
          color: #fff;
        }
        a {
          color: #222;
          font-weight: 500;
          padding: 10px;
          width: 100%;
        }
        .drop-container {
          display: none;
          .nav-link {
            color: #444;
            padding-right: 57px;
            position: relative;
            &:before {
              position: absolute;
              display: block;
              content: "";
              top: 0;
              bottom: 0;
              right: 20px;
              width: 11px;
              height: 2px;
              background: #222222;
              margin: auto;
            }
            &.router-link-active {
              background-color: #ffbf48;
            }
          }
        }
        &.dropdown:hover {
          .drop-container {
            width: 100%;
            height: auto;
            display: block;
          }
        }
      }
    }
  }
}
.mobile-nav {
  padding: 20px;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 999;
  background: #fff;
  display: none;
  @media (max-width: 992px) {
    display: block;
  }
  .logo-section {
    text-align: center;
    .logo {
      display: flex;
      align-items: center;
      text-decoration: none;
      justify-content: center;
      img {
        width: 30px;
      }
      .logo-brand {
        margin: 0;
        display: flex;
        align-items: center;
        flex-direction: column;
        margin-right: 20px;
        .logo-name {
          font-size: 16px;
        }
        .logo-description {
          font-size: 14px;
          font-weight: normal;
        }
      }
    }
  }
  .menu-icon {
    color: #222;
    font-size: 16px;
  }
}
</style>