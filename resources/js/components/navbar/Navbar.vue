<template>
  <header>
    <div class="nav-header">
      <div class="d-flex align-items-center justify-content-between">
        <router-link to="/" exact-active-class exact active-class class="logo">
          <img :src="'/img/svg/logo.svg'" />
          <h3 class="logo-brand">
            <span class="logo-name">{{LogoName}}</span>
            <span class="logo-description">{{LogoDescription}}</span>
          </h3>
        </router-link>

        <nav>
          <ul class="nav-menu list-unstyled d-flex align-items-center justify-content-between m-0">
            <router-link to="/" exact tag="li" class="nav-item">
              <a class="nav-link">الرئيسية</a>
            </router-link>
            <router-link to="/about" tag="li" class="nav-item">
              <a class="nav-link">عن الشركة</a>
            </router-link>
            <li class="nav-item dropdown">
              <a class="nav-link dropdown-link" href="#">الخدامات</a>
              <div class="drop-container">
                <router-link
                  :to="service.link"
                  class="nav-link"
                  v-for="(service,index) in services"
                  :key="index"
                >{{service.title}}</router-link>
              </div>
            </li>
            <router-link to="/works" tag="li" class="nav-item">
              <a class="nav-link">اعمالنا</a>
            </router-link>
            <router-link to="/clients" tag="li" class="nav-item">
              <a class="nav-link">اراء عملائنا</a>
            </router-link>
            <router-link to="/blog" tag="li" class="nav-item">
              <a class="nav-link">المدونة</a>
            </router-link>
            <router-link to="/contact" tag="li" class="nav-item">
              <a class="nav-link">تواصل معنا</a>
            </router-link>
          </ul>
        </nav>

        <div class="menu-icon-bar">
          <a href="#" class="search-icon" @click.prevent="searchTerm = !searchTerm">
            <span class="icon-18"></span>
          </a>
          <a href="#" class="menu-icon" @click.prevent="openMenu()">
            <span class="icon-menu-icon"></span>
          </a>
          <a href="#" class="shop-icon">
            <span class="icon-shop"></span>
          </a>
        </div>
      </div>
    </div>
    <div class="search-form" v-if="searchTerm" @click.prevent="searchTerm = !searchTerm">
      <form @submit.prevent="handleSubmit">
        <input
          type="text"
          v-model="searchInput"
          class="form-control"
          placeholder="عن ماذا تبحث..."
          @click.stop
        />
        <button type="submit">
          <span class="icon-18"></span>
        </button>
      </form>
    </div>
    <mobile-menu :hidden="open" v-on:close="close($event)"></mobile-menu>
  </header>
</template>


<script>
import MobileMenu from "./MobileMenu";
export default {
  name: "Navbar",
  components: {
    MobileMenu
  },
  data() {
    return {
      open: false,
      LogoName: "أصول تك",
      LogoDescription: "ASOL TEC",
      searchTerm: false,
      searchInput: null,
      LogoIcon: "",
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
    handleSubmit() {
      this.searchInput = "";
    },
    close(close) {
      this.open = close;
      document.body.classList.remove("modal-open");
    },
    openMenu() {
      this.open = !this.open;
      document.body.classList.add("modal-open");
    }
  }
};
</script>
<style lang="scss" scoped>
.nav-header {
  direction: rtl;
  background-color: #ffffff;
  padding: 0 20px;
  position: fixed;
  left: 20px;
  right: 20px;
  top: 10px;
  z-index: 999;
  @media (max-width: 992px) {
    display: none;
  }
  .logo {
    display: flex;
    align-items: center;
    justify-content: space-between;
    color: #222;
    text-decoration: none;
    img {
      width: 49px;
      height: 56px;
    }
    .logo-brand {
      display: flex;
      align-items: center;
      flex-direction: column;
      margin: 0 10px;
      font-size: 14px;
      line-height: 1.5;
      .logo-name {
        font-weight: bold;
      }
      .logo-description {
        font-weight: 300;
      }
    }
  }
  .nav-menu {
    li {
      font-weight: 500;
      padding: 20px 0;
      position: relative;
      .nav-link {
        color: #222;
        font-size: 14px;
        transition: all 0.3s linear;
      }
      .drop-container {
        transition: 0.2s ease-in-out;
        position: absolute;
        width: 230px;
        background: #fff;
        top: 90px;
        visibility: hidden;
        opacity: 0;
        .nav-link {
          &:hover,
          &.router-link-active {
            color: #1da9f7;
            background-color: #1da9f714;
          }
        }
      }
      &.dropdown:hover {
        .drop-container {
          opacity: 1;
          visibility: visible;
          top: 70px;
        }
      }
      &:hover {
        & > .nav-link {
          color: #1da9f7;
        }
      }

      &.router-link-exact-active,
      &.router-link-active {
        &:after {
          content: "";
          position: absolute;
          bottom: 0;
          left: 0;
          width: 100%;
          height: 3px;
          background-color: #1da9f7;
        }
        a {
          position: relative;
          color: #1da9f7;
        }
      }
    }
  }
  .menu-icon-bar {
    a {
      width: 20px;
      height: 20px;
      line-height: 20px;
      text-align: center;
      margin: 0 10px;
      display: inline-block;
      color: #222;
    }
  }
}
</style>