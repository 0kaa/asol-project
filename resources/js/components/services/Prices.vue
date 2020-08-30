<template>
  <div class="prices-section pd-100">
    <div class="container">
      <div class="section-heading text-center">
        <h3 class="section-title">
          <div class="section-title-icon">
            <span class="icon-images1"></span>
          </div>الاسعار
        </h3>
        <h4 class="text-title">{{textTitle}}</h4>
      </div>
      <div class="row">
        <div class="col-lg-3 col-sm-6 mt-50" v-for="(price,index) in prices" :key="index">
          <div class="price-list" :class="price.theme">
            <div class="list-heading mb-20">
              <h4 class="title">{{price.title}}</h4>
              <span class="sub-title">{{price.subTitle}}</span>
            </div>
            <div class="discount d-flex align-items-center justify-content-center">
              <span class="old-price">{{price.symbol + price.oldPrice}}</span>
              <span class="percent">وفِّر {{price.discount}}</span>
            </div>
            <div class="new-price d-flex align-items-center justify-content-center">
              <h2 class="price">{{price.newPrice + price.symbol }}</h2>
              <span>/ {{price.pricingBy}}</span>
            </div>
            <ul class="list-unstyled">
              <li v-for="(list,index) in price.lists" :key="index">
                <span class="icon-check-circle"></span>
                <span>{{list.title}}</span>
              </li>
            </ul>
            <a href="#" class="btn add-to-cart">أضافة الى السلة</a>
            <div
              class="on-renew"
            >{{price.symbol + price.renewPrice}} /{{price.pricingBy}} عند التجديد</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Prices",
  data() {
    return {
      textTitle: "خطط أسعار الاستضافة لدينا",
      prices: [
        {
          title: "اصول احدي",
          subTitle: "الحل المثالي للمبتدئين",
          newPrice: "0.89",
          oldPrice: "8.39",
          discount: "89%",
          symbol: "$",
          pricingBy: "الشهر",
          renewPrice: "2.49",
          theme: "blue",
          lists: [
            {
              title: "موقع واحد"
            },
            {
              title: "حساب بريد إلكتروني واحد"
            },
            {
              title: "100 GB كمية نقل البيانات"
            },
            {
              title: "شهادة SSL مجانية"
            },
            {
              title: "1X الموارد المخصصة"
            }
          ]
        },
        {
          title: "اصول ممتازة",
          subTitle: "خطة مثالية للمواقع الشخصية",
          newPrice: "0.89",
          oldPrice: "8.39",
          discount: "89%",
          symbol: "$",
          pricingBy: "الشهر",
          renewPrice: "2.49",
          theme: "yellow",
          lists: [
            {
              title: "موقع واحد"
            },
            {
              title: "حساب بريد إلكتروني واحد"
            },
            {
              title: "100 GB كمية نقل البيانات"
            },
            {
              title: "شهادة SSL مجانية"
            },
            {
              title: "1X الموارد المخصصة"
            },
            {
              title: "تسريع WordPress (LSCWP)"
            }
          ]
        },
        {
          title: "اصول عمال",
          subTitle: "للشركات الصغيرة والمتوسطه",
          newPrice: "0.89",
          oldPrice: "8.39",
          discount: "89%",
          symbol: "$",
          pricingBy: "الشهر",
          renewPrice: "2.49",
          theme: "purple",
          lists: [
            {
              title: "موقع واحد"
            },
            {
              title: "حساب بريد إلكتروني واحد"
            },
            {
              title: "100 GB كمية نقل البيانات"
            },
            {
              title: "شهادة SSL مجانية"
            },
            {
              title: "1X الموارد المخصصة"
            }
          ]
        },
        {
          title: "اصول سحابية",
          subTitle: "للشركات المدرة للدخل",
          newPrice: "0.89",
          oldPrice: "8.39",
          discount: "89%",
          symbol: "$",
          pricingBy: "الشهر",
          renewPrice: "2.49",
          theme: "red",
          lists: [
            {
              title: "موقع واحد"
            },
            {
              title: "حساب بريد إلكتروني واحد"
            },
            {
              title: "100 GB كمية نقل البيانات"
            },
            {
              title: "شهادة SSL مجانية"
            },
            {
              title: "1X الموارد المخصصة"
            }
          ]
        }
      ]
    };
  }
};
</script>

<style lang="scss" scoped>
.prices-section {
  .price-list {
    padding: 40px 10px;
    text-align: center;
    border: 2px solid #1da9f7;
    height: 100%;
    position: relative;
    display: flex;
    align-items: center;
    flex-direction: column;
    &.red {
      border-color: #e95557;
      .title {
        color: #e95557;
      }

      .percent,
      .add-to-cart {
        background-color: #e95557 !important;
      }
    }
    &.purple {
      border-color: #da56fb;
      .title {
        color: #da56fb;
      }

      .percent,
      .add-to-cart {
        background-color: #da56fb !important;
      }
    }
    &.yellow {
      border-color: #ffbf48;
      .title {
        color: #ffbf48;
      }

      .percent,
      .add-to-cart {
        background-color: #ffbf48 !important;
        color: #222 !important;
      }
    }
    &.red {
      border-color: #e95557;
      .title {
        color: #e95557;
      }

      .percent,
      .add-to-cart {
        background-color: #e95557 !important;
      }
    }
    .title {
      font-size: 21px;
      font-weight: 600;
    }
    .sub-title {
      color: #222;
    }
    .discount {
      .old-price {
        color: #cccccc;
        text-decoration: line-through;
        margin-left: 15px;
      }
      .percent {
        padding: 5px 20px;
        background: #1da9f7;
        border-radius: 100px;
        color: #fff;
        font-size: 14px;
      }
    }
    .new-price {
      margin-top: 10px;
      span {
        font-weight: 500;
        color: #222;
      }
    }
    ul {
      text-align: start;
      padding: 0 15px;
      height: 100%;
      li {
        font-size: 14px;
        font-weight: 400;
        color: #222;
        margin-bottom: 10px;
        display: flex;
        align-items: center;
        .icon-check-circle {
          margin-left: 5px;
        }
      }
    }
    .add-to-cart {
      margin-top: 20px;
      display: inline-block;
      background-color: #1da9f7;
      color: #fff;
      border-radius: 50px;
      padding: 10px 30px;
    }
    .on-renew {
      font-size: 10px;
      margin-top: 10px;
    }
  }
}
</style>