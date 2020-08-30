<template>
  <div class="contact-section overflow-hidden pb-100" :class="theme">
    <div class="container">
      <div class="row">
        <div class="col-md-5 image-section">
          <div class="d-flex justify-content-end group-right">
            <img :src="`/img/${theme}_image.png`" class="img-fluid" />
          </div>
        </div>
        <div class="col-md-7">
          <div class="d-flex justify-content-end group-left">
            <div class="form-mail">
              <div class="group-text">
                <span class="icon-mail-contact"></span>
                <h3 class="text-title mb-0">{{ formTitle }}</h3>
                <p class="text-description">{{ formDescription }}</p>
              </div>
              <div class="form-container">
                <form @submit.prevent="handleSubmit">
                  <div class="position-relative">
                    <div class="form-boxes">
                      <div class="form-group">
                        <label for="form_name">الاسم كامل</label>
                        <input
                          type="text"
                          class="form-control"
                          id="form_name"
                          v-model="form.fullname"
                          placeholder="الأسم الأول, الأسم الاخير"
                        />
                        <span class="icon-user"></span>
                      </div>
                      <div class="form-group">
                        <label for="form_phone">رقم الهاتف</label>
                        <input
                          type="number"
                          id="form_phone"
                          class="form-control"
                          v-model="form.phone"
                          placeholder="+1 xxx-xxx-xxxx"
                        />
                        <span class="icon-phone-solid"></span>
                      </div>
                      <div class="form-group">
                        <label for="form_email">بريد إلكتروني</label>
                        <input
                          type="email"
                          id="form_email"
                          class="form-control"
                          v-model="form.mail"
                          placeholder="john@example.com"
                        />
                        <span class="icon-envelope-solid"></span>
                      </div>
                      <div class="form-group">
                        <label for="form_message">رسالتك</label>
                        <textarea class="form-control" id="form_message" v-model="form.message" />
                      </div>
                    </div>
                  </div>
                  <button type="submit" class="btn btn-asol">
                    ارسل رسالة
                    <span class="icon-arrow-left"></span>
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "Contact",
  props: {
    theme: {
      type: String,
      default: "red"
    }
  },
  data() {
    return {
      formTitle: "تواصل معنا الأن",
      formDescription: "نحن نحب المساعدة في المشروع الخاص بك",
      mail_image: "/img/svg/mail.svg",
      form: {
        fullname: "",
        phone: "",
        mail: "",
        message: ""
      }
    };
  },
  methods: {
    handleSubmit(e) {
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
.contact-section {
  .container {
    @media (min-width: 992px) {
      max-width: 100%;
    }
  }
  .image-section {
    @media (max-width: 1200px) {
      align-self: center;
    }
  }
  .group-right {
    position: relative;
    @media (max-width: 1200px) {
      justify-content: center !important;
      img {
        width: 100%;
        object-fit: cover;
      }
    }
    &::before {
      content: "";
      background-color: #e95557;
      background-image: url(/img/svg/left_logo.svg);
      width: 100%;
      height: 336px;
      position: relative;
      top: 73px;
      overflow: hidden;
      @media (max-width: 1200px) {
        display: none;
      }
    }
  }
  .group-left {
    margin-left: -15px;
    position: relative;
    padding-right: 30px;
    @media (max-width: 768px) {
      margin: 0;
      padding: 0;
      margin-top: 40px;
    }
    .group-text {
      padding-top: 20px;
      margin-bottom: 50px;
      &:before {
        content: "";
        background-color: #f6f6f6;
        position: absolute;
        right: 32px;
        width: 180px;
        height: 180px;
        border-radius: 50%;
        z-index: -1;
        top: 0;
        @media (max-width: 768px) {
          display: none;
        }
      }
      .text-title {
        @media (max-width: 768px) {
          margin-top: 10px;
          font-size: 28px;
          font-weight: 500;
        }
      }
      span {
        margin-right: 60px;
        font-size: 64px;
        color: #222;
        @media (max-width: 768px) {
          margin: 0;
        }
      }
      .text-description {
        font-weight: 500;
        color: #222;
        margin-bottom: 0px;
        @media (max-width: 768px) {
          font-size: 14px;
          font-weight: 400;
          margin-top: 10px;
        }
      }
    }
    .form-mail {
      width: 100%;
      .form-boxes {
        width: 80%;
        padding-left: 80px;
        @media (max-width: 1200px) {
          width: 100%;
          padding-left: 0;
        }
        .form-group {
          position: relative;
          margin-bottom: 25px;
          z-index: 99;
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
          }
          .form-control {
            border: 1px solid #eee;
            padding: 25px 20px;
            font-size: 14px;
            &::placeholder {
              color: #cccccc;
            }
            &:focus {
              border-color: #1da9f7;
            }
          }
          [class^="icon-"] {
            position: absolute;
            left: 15px;
            top: 0;
            bottom: 0;
            display: flex;
            align-items: center;
          }
          textarea {
            resize: none;
          }
        }
        &::after {
          content: "";
          background-color: #e95557;
          background-image: url(/img/svg/left_logo.svg);
          width: 202px;
          height: 100%;
          position: absolute;
          overflow: hidden;
          bottom: 0;
          left: 0;
          background-position: 100% 0;
          @media (max-width: 1200px) {
            display: none;
          }
        }
      }
      .btn-asol {
        background-color: #e95557;
        i {
          margin-right: 5px;
        }
      }
    }
  }
}

.yellow {
  .group-right::before,
  .form-boxes::after {
    background-color: #ffbf48 !important;
  }
  .btn-asol {
    background-color: #ffbf48 !important;
    color: #222 !important;
  }
}
.red {
  .group-right::before,
  .form-boxes::after {
    background-color: #e95557 !important;
  }
  .btn-asol {
    background-color: #e95557 !important;
  }
}
.blue {
  .group-right::before,
  .form-boxes::after {
    background-color: #1da9f7 !important;
  }
  .btn-asol {
    background-color: #1da9f7 !important;
  }
}
</style>
