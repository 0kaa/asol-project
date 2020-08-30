<template>
  <div class="single-post pb-100">
    <jumbotron :image="image" :pageTitle="pageTitle"></jumbotron>
    <div class="container">
      <div class="row">
        <div class="post col-md-9 m-auto">
          <span class="post-date">{{posts[0].date}}</span>
          <h3 class="post-title">{{posts[0].title}}</h3>
          <div class="post-content mb-40">
            <div>
              <img :src="posts[0].thumbnail" class="img-fluid" />
              <div class="content" v-html="posts[0].content"></div>
            </div>
            <div class="social-share">
              <h5>شارك</h5>
              <a :href="posts[0].permalink" class="facebook">
                <span class="icon-facebook"></span>
              </a>
              <a :href="posts[0].permalink" class="twitter">
                <span class="icon-twitter"></span>
              </a>
              <a :href="posts[0].permalink" class="whatsapp">
                <span class="icon-whatsapp"></span>
              </a>
              <a :href="posts[0].permalink" class="instagram">
                <span class="icon-instagram"></span>
              </a>
            </div>
          </div>
          <div class="comments text-center mb-60">
            <h4 class="mb-40">التعليقات</h4>
            <form @submit.prevent="handleSubmit">
              <div class="position-relative">
                <div class="form-boxes">
                  <div class="row">
                    <div class="col mb-20">
                      <label for="form_name">الاسم كامل</label>
                      <input
                        type="text"
                        class="form-control"
                        id="form_name"
                        v-model="form.fullname"
                        placeholder="الأسم الأول, الأسم الاخير"
                      />
                    </div>
                    <div class="col mb-20">
                      <label for="form_email">بريد إلكتروني</label>
                      <input
                        type="email"
                        id="form_email"
                        class="form-control"
                        v-model="form.mail"
                        placeholder="john@example.com"
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
          <div class="related">
            <h4 class="text-center mb-40">إقرأ أيضاً</h4>
            <div class="row">
              <router-link
                class="col-md-6 col-lg-4 related-post"
                v-for="(post,index) in relatedPosts"
                :key="index"
                :to="post.link"
              >
                <div class="post-wrapper">
                  <img class="img-fluid post-image" v-bind:src="post.image" />
                  <h4 class="post-title">{{ post.title }}</h4>
                </div>
              </router-link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Jumbotron from "../../components/global/Jumbotron";

export default {
  components: {
    Jumbotron
  },
  data() {
    return {
      image: `/img/blog/slider.jpg`,
      pageTitle: "المدونة",
      posts: [
        {
          thumbnail: "/img/blog/post-thumbnail.jpg",
          title: "هناك حقيقة مثبتة منذ زمن طويل",
          content:
            "<p>بعد أن فتحت شركة آبل متاجرها مؤخراً في الولايات المتحدة ، تراجعت وأعادت إغلاق 11 متجر في عدة ولايات مؤقتاً .حتى إشعار آخر</p> <p>وكانت آبل قد أغلقت كافة متاجرها حول العالم ما عدا الصين منذ مارس الماضي بسبب تفشي فيروس كورونا ومن .ثم عادت لفتح متاجرها في الولايات المتحدة في مايو الماضي جزئياً واقتصرت على تقديم بعض الخدمات</p> <p>والآن بحسب متحدث رسمي للشركة، فإنها تعيد إغلاق بعض متاجرها في فلوريدا، أريزونا، كارولينا الشمالية والجنوبية .مؤقتاً، بداية 20 يونيو</p> <p>وتواصل الشركة دراسة بيانات الإصابات الجديدة وتوزعها الجغرافي واتجاهات تطورها المستقبلي لتحدد إمكانية .استمرار فتح أو إعادة إغلاق متاجرها</p> <p>يذكر أن آبل ألمحت لإمكانية إعادة إغلاق متاجرها بعد أن فتحتها في مايو بحسب الظروف الصحية .ومستجدات الإصابات</p>",
          date: new Date().toLocaleDateString(),
          permalink: "#",
          id: "1"
        },
        {
          thumbnail: "/img/blog/post-thumbnail.jpg",
          title: "آبل تعيد إغلاق 11 متجر في الولايات المتحدة بسبب كورونا",
          content:
            "<p>بعد أن فتحت شركة آبل متاجرها مؤخراً في الولايات المتحدة ، تراجعت وأعادت إغلاق 11 متجر في عدة ولايات مؤقتاً .حتى إشعار آخر</p> <p>وكانت آبل قد أغلقت كافة متاجرها حول العالم ما عدا الصين منذ مارس الماضي بسبب تفشي فيروس كورونا ومن .ثم عادت لفتح متاجرها في الولايات المتحدة في مايو الماضي جزئياً واقتصرت على تقديم بعض الخدمات</p> <p>والآن بحسب متحدث رسمي للشركة، فإنها تعيد إغلاق بعض متاجرها في فلوريدا، أريزونا، كارولينا الشمالية والجنوبية .مؤقتاً، بداية 20 يونيو</p> <p>وتواصل الشركة دراسة بيانات الإصابات الجديدة وتوزعها الجغرافي واتجاهات تطورها المستقبلي لتحدد إمكانية .استمرار فتح أو إعادة إغلاق متاجرها</p> <p>يذكر أن آبل ألمحت لإمكانية إعادة إغلاق متاجرها بعد أن فتحتها في مايو بحسب الظروف الصحية .ومستجدات الإصابات</p>",
          date: new Date().toLocaleDateString(),
          permalink: "#",
          id: "2"
        },
        {
          thumbnail: "/img/blog/post-thumbnail.jpg",
          title: "هناك حقيقة مثبتة منذ زمن طويل",
          content:
            "<p>بعد أن فتحت شركة آبل متاجرها مؤخراً في الولايات المتحدة ، تراجعت وأعادت إغلاق 11 متجر في عدة ولايات مؤقتاً .حتى إشعار آخر</p> <p>وكانت آبل قد أغلقت كافة متاجرها حول العالم ما عدا الصين منذ مارس الماضي بسبب تفشي فيروس كورونا ومن .ثم عادت لفتح متاجرها في الولايات المتحدة في مايو الماضي جزئياً واقتصرت على تقديم بعض الخدمات</p> <p>والآن بحسب متحدث رسمي للشركة، فإنها تعيد إغلاق بعض متاجرها في فلوريدا، أريزونا، كارولينا الشمالية والجنوبية .مؤقتاً، بداية 20 يونيو</p> <p>وتواصل الشركة دراسة بيانات الإصابات الجديدة وتوزعها الجغرافي واتجاهات تطورها المستقبلي لتحدد إمكانية .استمرار فتح أو إعادة إغلاق متاجرها</p> <p>يذكر أن آبل ألمحت لإمكانية إعادة إغلاق متاجرها بعد أن فتحتها في مايو بحسب الظروف الصحية .ومستجدات الإصابات</p>",
          date: new Date().toLocaleDateString(),
          permalink: "#",
          id: "3"
        },
        {
          thumbnail: "/img/blog/post-thumbnail.jpg",
          title: "آبل تعيد إغلاق 11 متجر في الولايات المتحدة بسبب كورونا",
          content:
            "<p>بعد أن فتحت شركة آبل متاجرها مؤخراً في الولايات المتحدة ، تراجعت وأعادت إغلاق 11 متجر في عدة ولايات مؤقتاً .حتى إشعار آخر</p> <p>وكانت آبل قد أغلقت كافة متاجرها حول العالم ما عدا الصين منذ مارس الماضي بسبب تفشي فيروس كورونا ومن .ثم عادت لفتح متاجرها في الولايات المتحدة في مايو الماضي جزئياً واقتصرت على تقديم بعض الخدمات</p> <p>والآن بحسب متحدث رسمي للشركة، فإنها تعيد إغلاق بعض متاجرها في فلوريدا، أريزونا، كارولينا الشمالية والجنوبية .مؤقتاً، بداية 20 يونيو</p> <p>وتواصل الشركة دراسة بيانات الإصابات الجديدة وتوزعها الجغرافي واتجاهات تطورها المستقبلي لتحدد إمكانية .استمرار فتح أو إعادة إغلاق متاجرها</p> <p>يذكر أن آبل ألمحت لإمكانية إعادة إغلاق متاجرها بعد أن فتحتها في مايو بحسب الظروف الصحية .ومستجدات الإصابات</p>",
          date: new Date().toLocaleDateString(),
          permalink: "#",
          id: "4"
        },
        {
          thumbnail: "/img/blog/post-thumbnail.jpg",
          title: "آبل تعيد إغلاق 11 متجر في الولايات المتحدة بسبب كورونا",
          content:
            "<p>بعد أن فتحت شركة آبل متاجرها مؤخراً في الولايات المتحدة ، تراجعت وأعادت إغلاق 11 متجر في عدة ولايات مؤقتاً .حتى إشعار آخر</p> <p>وكانت آبل قد أغلقت كافة متاجرها حول العالم ما عدا الصين منذ مارس الماضي بسبب تفشي فيروس كورونا ومن .ثم عادت لفتح متاجرها في الولايات المتحدة في مايو الماضي جزئياً واقتصرت على تقديم بعض الخدمات</p> <p>والآن بحسب متحدث رسمي للشركة، فإنها تعيد إغلاق بعض متاجرها في فلوريدا، أريزونا، كارولينا الشمالية والجنوبية .مؤقتاً، بداية 20 يونيو</p> <p>وتواصل الشركة دراسة بيانات الإصابات الجديدة وتوزعها الجغرافي واتجاهات تطورها المستقبلي لتحدد إمكانية .استمرار فتح أو إعادة إغلاق متاجرها</p> <p>يذكر أن آبل ألمحت لإمكانية إعادة إغلاق متاجرها بعد أن فتحتها في مايو بحسب الظروف الصحية .ومستجدات الإصابات</p>",
          date: new Date().toLocaleDateString(),
          permalink: "#",
          id: "5"
        }
      ],
      relatedPosts: [
        {
          title: "هناك حقيقة مثبتة منذ زمن طويل",
          image: "/img/blog/filter/post_01.jpg",
          link: "#"
        },
        {
          title: "هناك حقيقة مثبتة منذ زمن طويل",
          image: "/img/blog/filter/post_02.jpg",
          link: "#"
        },
        {
          title: "هناك حقيقة مثبتة منذ زمن طويل",
          image: "/img/blog/filter/post_03.jpg",
          link: "#"
        }
      ],
      form: {
        fullname: "",
        mail: "",
        message: ""
      }
    };
  },
  created() {
    const newVal = this.posts.filter(i => i.id === this.$route.params.id);
    this.posts = newVal;
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
.single-post {
  .post {
    @media (max-width: 992px) {
      max-width: 100%;
      flex: 100%;
      padding-top: 40px;
    }
    .post-content {
      background-color: #f7fafd;
      border-radius: 10px;
      padding: 40px;
      display: flex;
      @media (max-width: 768px) {
        padding: 20px;
        flex-direction: column;
      }
      .content {
        margin-top: 30px;
        color: #222;
      }
      .social-share {
        display: flex;
        flex-direction: column;
        margin-right: 30px;
        align-items: center;
        @media (max-width: 768px) {
          flex-direction: row;
          margin: 0;
          justify-content: space-between;
          margin-top: 40px;
        }
        h5 {
          color: #222;
          font-size: 21px;
          font-weight: 500;
        }
        a {
          color: #fff;
          background-color: #000;
          width: 45px;
          height: 45px;
          line-height: 45px;
          text-align: center;
          border-radius: 50%;
          font-size: 24px;
          margin-top: 10px;
          &.facebook {
            background-color: #3b5999;
          }
          &.twitter {
            background-color: #55acee;
          }
          &.whatsapp {
            background-color: #25d366;
          }
          &.instagram {
            background-color: #e4405f;
          }
        }
      }
    }

    .related-post {
      text-decoration: none;
      @media (max-width: 992px) {
        margin-bottom: 40px;
        &:last-child {
          margin: 0;
        }
      }
      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
      .post-title {
        display: flex;
        font-weight: 500;
        font-size: 12px;
        padding: 20px 0 0 20px;
        margin: 0;
        align-items: center;
        justify-content: space-between;
      }
    }
    label {
      font-weight: 600;
      color: #222;
      margin: 0;
      font-size: 13px;
      position: absolute;
      top: 0;
      background: #f7fafd;
      padding: 5px;
      right: 15px;
      margin-top: -18px;
    }
    .form-control {
      border: 1px solid #eee;
      background: none;
      padding: 25px 20px;
      font-size: 14px;
      &::placeholder {
        color: #cccccc;
      }
    }
    textarea {
      resize: none;
    }
    .comments {
      background-color: #f7fafd;
      padding: 40px;
      @media (max-width: 768px) {
        padding: 20px;
      }
    }
    .btn-asol {
      background-color: #1da9f7;
      margin: auto;
      margin-top: 40px;
    }
  }
}
</style>