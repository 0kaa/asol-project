<template>
  <footer class="footer">
    <div class="footer-widgets">
      <div class="container">
        <div class="row">
          <div class="col-md-6">
            <h3 class="text-title">
              {{ footerTitle }}
              <span class="icon-wink"></span>
            </h3>
            <div class="row">
              <div class="footer-widget col-md-6">
                <h3 class="widget-title">نتشرف بزيارتكم</h3>
                <ul class="list-unstyled">
                  <li class="address">{{ address }}</li>
                </ul>
              </div>
              <div class="footer-widget col-md-6">
                <h3 class="widget-title">تواصل معنا</h3>
                <ul class="list-unstyled">
                  <li class="phone">
                    <a :href="'tel:' + phone">{{ phone }}</a>
                  </li>
                  <li class="email">
                    <a :href="'mail:' + email">{{ email }}</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div class="col-md-2">
            <div class="footer-widget d-flex align-items-center flex-column col-two">
              <h3 class="widget-title">روابط سريعة</h3>
              <ul class="list-unstyled">
                <router-link to="/about" tag="li">
                  <a>عن الشركة</a>
                </router-link>
                <router-link to="/services" tag="li">
                  <a>الخدامات</a>
                </router-link>
                <router-link to="/works" tag="li">
                  <a>اعمالنا</a>
                </router-link>
                <router-link to="/clients" tag="li">
                  <a>اراء عملائنا</a>
                </router-link>
                <router-link to="/blog" tag="li">
                  <a>المدونة</a>
                </router-link>
                <router-link to="/contact" tag="li">
                  <a>تواصل معنا</a>
                </router-link>
              </ul>
            </div>
          </div>
          <div class="col-md-4">
            <div class="footer-widget">
              <h3 class="widget-title">تابعنا على شبكات التواصل</h3>
              <ul class="list-unstyled social-icons d-flex align-items-center mb-40">
                <li :class="`${icon.name}-icon`" v-for="(icon, index) in icons" :key="index">
                  <a :href="icon.link">
                    <span :class="`icon-${icon.name}`"></span>
                  </a>
                </li>
              </ul>
              <h3 class="widget-title">الاشتراك في القائمة البريدية</h3>
              <form @submit.prevent="handleSubscribe">
                <div class="form-group">
                  <label for="subscribe">بريد إلكتروني</label>
                  <input
                    type="email"
                    class="form-control"
                    id="subscribe"
                    v-model="subscribeInput"
                    placeholder="john@example.com"
                  />
                  <button type="submit">
                    <span class="icon-location"></span>
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="copyright">
      <div class="container">
        <div class="row">
          <div class="col-md-6">
            <a href="#" class="scroll" @click.prevent="scrollTo">
              <span class="icon-arrow-up"></span>
            </a>
          </div>
          <div class="col-md-6">
            <p class="copyright-text">{{ copyrightText }}</p>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: "FooterSection",
  data() {
    return {
      footerTitle: "نحن نحب أن نسمع منك",
      address: "جمهورية مصر العربية - المنصورة شارع أحمد ماهر",
      phone: "0020 1025 1524 21",
      email: "info@asol-tec.com",
      copyrightText: "جميع الحقوق محفوظة لشركة أصول للتسويق الالكترونى © 2020",
      icons: [
        {
          name: "facebook",
          link: "#"
        },
        {
          name: "twitter",
          link: "#"
        },
        {
          name: "instagram",
          link: "#"
        },
        {
          name: "whatsapp",
          link: "#"
        }
      ],
      subscribeInput: ""
    };
  },
  methods: {
    handleSubscribe() {
      console.log(this.subscribeInput);
    },
    scrollTo() {
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth"
      });
    }
  }
};
</script>

<style lang="scss" scoped>
.footer {
  .footer-widgets {
    padding: 50px 0 20px;
    background: linear-gradient(90deg, #ffffff 50%, #f7fafd 50%);
    @media (max-width: 768px) {
      background: none !important;
      padding: 0;
    }
    .text-title {
      font-size: 42px;
      font-weight: 600;
      margin-bottom: 20px;
      @media (max-width: 768px) {
        font-size: 28px;
      }
    }
    .footer-widget {
      @media (max-width: 768px) {
        align-items: flex-start !important;
      }
      .widget-title {
        font-size: 18px;
        font-weight: 500;
        margin-bottom: 20px;
        @media (max-width: 768px) {
          font-size: 24px;
        }
      }
      ul {
        li {
          color: #222;
          font-size: 14px;
          margin-bottom: 10px;
          font-weight: 400;
          &:last-child {
            margin: 0;
          }
          &.phone {
            direction: ltr;
          }
          a {
            color: #222;
            text-decoration: none;
          }
        }
        &.social-icons {
          li {
            margin: 0;
          }
          a {
            background-color: #1da9f7;
            display: block;
            width: 40px;
            height: 40px;
            margin-left: 5px;
            border-radius: 50%;
            color: #fff;
            display: flex;
            align-items: center;
            justify-content: center;
          }
        }
      }
      .form-group {
        position: relative;
        display: flex;
        justify-content: center;
        align-items: center;
        label {
          font-weight: 400;
          color: #222;
          margin: 0;
          font-size: 13px;
          position: absolute;
          top: 0;
          background: white;
          padding: 5px;
          right: 15px;
          margin-top: -18px;
        }
        .form-control {
          border: 1px solid #cecece;
          padding: 25px 20px;
          font-size: 14px;
          &::placeholder {
            color: #cccccc;
          }
        }
        button {
          background: transparent;
          border: none;
          position: absolute;
          left: 5px;
          font-size: 20px;
          color: #777777;
          height: 100%;
          padding: 0;
          span {
            height: 100%;
            display: flex;
            justify-content: center;
            align-items: center;
          }
        }
      }
    }
  }
  .copyright {
    background: linear-gradient(90deg, #f7fafd 50%, #ffffff 50%);
    padding: 15px 0;
    @media (max-width: 768px) {
      background: none !important;
    }
    .scroll {
      color: #202020;
    }
    .copyright-text {
      margin: 0;
      font-size: 14px;
      height: 100%;
    }
  }
}
.red {
  & + footer {
    .copyright {
      background: linear-gradient(90deg, #e9555714 50%, #ffffff 50%);
    }
    .footer-widgets {
      background: linear-gradient(90deg, #ffffff 50%, #e9555714 50%);
    }
    .social-icons {
      a {
        background-color: #e95557 !important;
      }
    }
  }
}
.yellow {
  & + footer {
    .copyright {
      background: linear-gradient(90deg, #ffbf4814 50%, #ffffff 50%);
    }
    .footer-widgets {
      background: linear-gradient(90deg, #ffffff 50%, #ffbf4814 50%);
    }
    .social-icons {
      a {
        background-color: #ffbf48 !important;
        color: #222 !important;
      }
    }
  }
}
</style>
