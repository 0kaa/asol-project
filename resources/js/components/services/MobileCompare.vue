<template>
  <div class="mobile-compare pb-100">
    <div class="container">
      <div class="section-heading text-center mb-40">
        <div class="image-banner mb-20">
          <span class="icon-question"></span>
        </div>
        <h3 class="text-title">{{sectionTitle}}</h3>
      </div>
      <div class="row">
        <div class="col-md-6">
          <h3 class="section-banner cross-plat">{{crossPlatFormTitle}}</h3>
          <ul class="cross-platform list-unstyled">
            <li v-for="(item,index) in crossPlatForm" :key="index">
              <div class="box-image">
                <span :class="item.icon"></span>
              </div>
              <div class="info">
                <h3 class="title">{{item.title}}</h3>
                <p>{{item.description}}</p>
              </div>
            </li>
          </ul>
        </div>
        <div class="col-md-6">
          <h3 class="section-banner native">{{nativeTitle}}</h3>
          <ul class="native list-unstyled">
            <li v-for="(item,index) in native" :key="index">
              <div class="box-image">
                <span :class="item.icon"></span>
              </div>
              <div class="info">
                <h3 class="title">{{item.title}}</h3>
                <p>{{item.description}}</p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "MobileCompare",
  data() {
    return {
      sectionTitle: "ايش أنسب طريقة برمجة لمشروعي؟",
      crossPlatFormTitle: "البرمجه بنظام الكروس بلات فورم",
      crossPlatForm: [
        {
          icon: "icon-42",
          title: "التكلفة",
          description:
            "التكلفة تكلفه التطوير عبر نظام الكروس بلات فورم يعتبر أقل نسبيا بنسبة 40% من التطوير عبر نظام النيتيف"
        },
        {
          icon: "icon-41",
          title: "وقت المشروع",
          description:
            "وقت المشروع الـ Source Code واحد لجميع المنصات و بالتالي اختصار للزمن"
        },
        {
          icon: "icon-95",
          title: "هدد المستخدمين",
          description:
            "التكلفة تكلفه التطوير عبر نظام الكروس بلات فورم يعتبر أقل نسبيا بنسبة 40% من التطوير عبر نظام النيتيف"
        },
        {
          icon: "icon-84",
          title: "وفره المبرمجين",
          description:
            "التكلفة تكلفه التطوير عبر نظام الكروس بلات فورم يعتبر أقل نسبيا بنسبة 40% من التطوير عبر نظام النيتيف"
        },
        {
          icon: "icon-87",
          title: "الاداء",
          description:
            "التكلفة تكلفه التطوير عبر نظام الكروس بلات فورم يعتبر أقل نسبيا بنسبة 40% من التطوير عبر نظام النيتيف"
        },
        {
          icon: "icon-90",
          title: "سهولة الاستخدام",
          description:
            "التكلفة تكلفه التطوير عبر نظام الكروس بلات فورم يعتبر أقل نسبيا بنسبة 40% من التطوير عبر نظام النيتيف"
        },
        {
          icon: "icon-93",
          title: "التحديثات",
          description:
            "التكلفة تكلفه التطوير عبر نظام الكروس بلات فورم يعتبر أقل نسبيا بنسبة 40% من التطوير عبر نظام النيتيف"
        },
        {
          icon: "icon-85",
          title: "الثبات",
          description:
            "التكلفة تكلفه التطوير عبر نظام الكروس بلات فورم يعتبر أقل نسبيا بنسبة 40% من التطوير عبر نظام النيتيف"
        }
      ],
      nativeTitle: "البرمجه بنظام نيتيف",
      native: [
        {
          icon: "icon-42",
          title: "التكلفة",
          description:
            "التكلفة تكلفه التطوير عبر نظام الكروس بلات فورم يعتبر أقل نسبيا بنسبة 40% من التطوير عبر نظام النيتيف"
        },
        {
          icon: "icon-41",
          title: "وقت المشروع",
          description:
            "وقت المشروع الـ Source Code واحد لجميع المنصات و بالتالي اختصار للزمن"
        },
        {
          icon: "icon-95",
          title: "هدد المستخدمين",
          description:
            "التكلفة تكلفه التطوير عبر نظام الكروس بلات فورم يعتبر أقل نسبيا بنسبة 40% من التطوير عبر نظام النيتيف"
        },
        {
          icon: "icon-84",
          title: "وفره المبرمجين",
          description:
            "التكلفة تكلفه التطوير عبر نظام الكروس بلات فورم يعتبر أقل نسبيا بنسبة 40% من التطوير عبر نظام النيتيف"
        },
        {
          icon: "icon-87",
          title: "الاداء",
          description:
            "التكلفة تكلفه التطوير عبر نظام الكروس بلات فورم يعتبر أقل نسبيا بنسبة 40% من التطوير عبر نظام النيتيف"
        },
        {
          icon: "icon-90",
          title: "سهولة الاستخدام",
          description:
            "التكلفة تكلفه التطوير عبر نظام الكروس بلات فورم يعتبر أقل نسبيا بنسبة 40% من التطوير عبر نظام النيتيف"
        },
        {
          icon: "icon-93",
          title: "التحديثات",
          description:
            "التكلفة تكلفه التطوير عبر نظام الكروس بلات فورم يعتبر أقل نسبيا بنسبة 40% من التطوير عبر نظام النيتيف"
        },
        {
          icon: "icon-85",
          title: "الثبات",
          description:
            "التكلفة تكلفه التطوير عبر نظام الكروس بلات فورم يعتبر أقل نسبيا بنسبة 40% من التطوير عبر نظام النيتيف"
        }
      ]
    };
  }
};
</script>
<style lang="scss" scoped>
.mobile-compare {
  .section-heading {
    .image-banner {
      padding: 20px;
      border-radius: 100px;
      background-color: #f6f6f6;
      display: inline-block;
      span {
        display: block;
        font-size: 64px;
        color: #222;
      }
    }
  }
  .section-banner {
    background-color: #e95557;
    border-radius: 100px;
    padding: 15px;
    font-size: 18px;
    color: #fff;
    font-weight: 500;
    text-align: center;
    &.native {
      background-color: #ffbf48;
      color: #222;
    }
  }
  ul {
    &.native {
      li .box-image {
        background-color: #fff9ec;
        span {
          color: #ffbf48;
        }
      }
    }
    &.cross-platform {
      @media (max-width: 768px) {
        margin-bottom: 40px;
      }
    }
    li {
      display: flex;
      align-items: center;
      margin-top: 30px;
      .box-image {
        width: 100px;
        height: 100px;
        margin-left: 20px;
        display: flex;
        background: #fef6f6;
        border-radius: 50px;
        text-align: center;
        align-items: center;
        justify-content: center;
        span {
          font-size: 60px;
          color: #e95557;
        }
      }
      .info {
        width: 75%;
        text-align: start;
        .title {
          font-size: 18px;
          font-weight: 500;
        }
        p {
          font-size: 14px;
        }
      }
    }
  }
}
</style>