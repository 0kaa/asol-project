<template>
  <main class="contact-us pb-100">
    <jumbotron :image="image" :pageTitle="pageTitle"></jumbotron>
    <div class="container">
      <div class="row">
        <div class="col-md-5">
          <div class="right-col">
            <h4 class="mb-40">تواصل معنا</h4>
            <p>يمكنكم التواصل معنا عبر البيانات والارقام الموجودة هنا او يمكنكم ارسال لنا رسالة عبر النموذج وسيتم التواصل معكم في أقرب وقت</p>
            <ul class="list-unstyled">
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
                <div class="info">
                  <h5>رقم الجوال</h5>
                  <span v-text="phone"></span>
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
            <div class="social-list mt-40">
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
          </div>
        </div>
        <div class="col-md-7">
          <div class="left-col">
            <h4 class="mb-40">أتصل بنا</h4>
            <form @submit.prevent="handleSubmit">
              <div class="position-relative">
                <div class="form-boxes">
                  <div class="row">
                    <div class="col-6 mb-40">
                      <label for="form_name">الاسم كامل</label>
                      <input
                        type="text"
                        class="form-control"
                        id="form_name"
                        v-model="form.fullname"
                        placeholder="الأسم الأول, الأسم الاخير"
                      />
                    </div>
                    <div class="col-6 mb-40">
                      <label for="form_name">رقم هاتفك</label>
                      <input
                        type="text"
                        class="form-control"
                        id="form_name"
                        v-model="form.phone"
                        placeholder="الأسم الأول, الأسم الاخير"
                      />
                    </div>
                    <div class="col-6 mb-40">
                      <label for="form_email">بريد إلكتروني</label>
                      <input
                        type="email"
                        id="form_email"
                        class="form-control"
                        v-model="form.mail"
                        placeholder="john@example.com"
                      />
                    </div>
                    <div class="col-6 mb-40">
                      <label for="form_name">الموضوع</label>
                      <input
                        type="text"
                        class="form-control"
                        id="form_name"
                        v-model="form.subject"
                        placeholder="ما هو موضوعك"
                      />
                    </div>
                    <div class="col-12">
                      <label for="form_message">رسالتك</label>
                      <textarea class="form-control" id="form_message" v-model="form.message" />
                    </div>
                  </div>
                </div>
              </div>
              <button type="submit" class="btn btn-asol">أرسل التعليق</button>
            </form>
          </div>
        </div>
      </div>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d956959.2121263393!2d39.380906409766986!3d24.461022633280777!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x15bdbe5197d220d5%3A0x2e54514fea3b08d9!2sMedina%20Saudi%20Arabia!5e0!3m2!1sen!2sus!4v1593982120966!5m2!1sen!2sus"
        width="100%"
        height="450"
        frameborder="0"
        style="border:0;"
        allowfullscreen
        aria-hidden="false"
        tabindex="0"
      ></iframe>
    </div>
  </main>
</template>

<script>
import Jumbotron from "../../components/global/Jumbotron";
export default {
  name: "Contact",
  components: { Jumbotron },
  data() {
    return {
      image: "/img/about_slider.jpg",
      pageTitle: "تواصل معنا",
      address: "الدمام - السعودية",
      phone: "0546651216",
      email: "info@ghaddy.com",
      form: {
        fullname: "",
        mail: "",
        phone: "",
        subject: "",
        message: ""
      }
    };
  },
  methods: {
    handleSubmit() {
      console.log(JSON.stringify(this.form));
      this.form.fullname = "";
      this.form.phone = "";
      this.form.mail = "";
      this.form.message = "";
    }
  }
};
</script>


<style lang="scss" scoped>
.contact-us {
  .right-col {
    margin-top: -50px;
    background-color: #f7fafd;
    padding: 100px 30px;
    @media (max-width: 768px) {
      padding: 50px 20px;
    }
    li {
      display: flex;
      align-items: center;
      margin-bottom: 20px;
      &:last-child {
        margin: 0;
      }
      .icon {
        width: 40px;
        height: 40px;
        line-height: 40px;
        text-align: center;
        background-color: #1da9f7;
        border-radius: 50%;
        color: #fff;
        margin-left: 20px;
      }
      .info {
        font-size: 14px;
        h5 {
          font-size: 14px;
          font-weight: 400;
        }
      }
    }
    .social-list {
      a {
        color: #222;
        margin: 0 5px;
      }
    }
  }
  .left-col {
    padding: 50px 0;
    h4 {
      color: #1da9f7;
    }
    label {
      font-weight: 600;
      color: #222;
      margin: 0;
      font-size: 13px;
      position: absolute;
      top: 0;
      background: white;
      padding: 5px;
      right: 15px;
      margin-top: -18px;
      @media (max-width: 576px) {
        font-size: 12px;
      }
    }
    .form-control {
      border: 1px solid #eee;
      background: none;
      padding: 25px 20px;
      font-size: 14px;
      @media (max-width: 576px) {
        font-size: 12px;
      }
      &::placeholder {
        color: #cccccc;
      }
    }
    textarea {
      resize: none;
    }
    .btn-asol {
      margin-top: 40px;
      background-color: #1da9f7;
    }
  }
}
</style>