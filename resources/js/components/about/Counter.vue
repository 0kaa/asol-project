<template>
  <div class="counter-section pb-100">
    <div class="container">
      <div class="position-relative">
        <div class="secound-section">
          <ul class="list-unstyled">
            <li v-for="(question,index) in questions" :key="index">
              <span>0{{index+1}}</span>
              <div class="question-info">
                <h3>{{question.title}}</h3>
                <p>{{question.description}}</p>
              </div>
            </li>
          </ul>
        </div>
      </div>
      <ul class="counter-facts list-unstyled">
        <li
          class="d-flex align-items-center flex-column"
          v-for="(counter,index) in counters"
          :key="index"
        >
          <img :src="counter.image" class="img-fluid mb-20" />
          <span>{{counter.count}}</span>
          <h3>{{counter.title}}</h3>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
export default {
  name: "Counter",
  data() {
    return {
      questions: [
        {
          title: "ماذا نقدم ؟",
          description:
            "هو ببساطة نص شكلي بمعنى أن الغاية هي الشكل وليس المحتوى ويُستخدم في صناعات .المطابع ودور النشر كان لوريم إيبسوم ولايزال المعيار للنص الشكلي"
        },
        {
          title: "اهداف الشركة",
          description:
            "هو ببساطة نص شكلي بمعنى أن الغاية هي الشكل وليس المحتوى ويُستخدم في صناعات .المطابع ودور النشر كان لوريم إيبسوم ولايزال المعيار للنص الشكلي"
        },
        {
          title: "ما حققته الشركة",
          description:
            "هو ببساطة نص شكلي بمعنى أن الغاية هي الشكل وليس المحتوى ويُستخدم في صناعات .المطابع ودور النشر كان لوريم إيبسوم ولايزال المعيار للنص الشكلي"
        }
      ],
      counters: [
        {
          image: "/img/svg/star.svg",
          count: 15,
          title: "عام خبرة"
        },
        {
          image: "/img/svg/rocket.svg",
          count: 1320,
          title: "مشررع"
        },
        {
          image: "/img/svg/heart.svg",
          count: 3301,
          title: "عميل"
        },
        {
          image: "/img/svg/pin.svg",
          count: 3,
          title: "فروع"
        }
      ]
    };
  }
};
</script>
<style lang="scss" scoped>
.counter-section {
  position: relative;
  &:after {
    content: "";
    position: absolute;
    bottom: 100px;
    left: 0px;
    width: 347px;
    height: 487px;
    background: #f7fafd;
    z-index: -1;
    @media (max-width: 1400px) {
      display: none;
    }
  }
}
.secound-section {
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: 65%;
  margin: auto;
  padding-top: 70px;
  @media (max-width: 992px) {
    max-width: 100%;
    margin: 0;
    padding: 0;
  }
  &:before {
    content: "";
    background-image: url(/img/svg/about_shape.svg);
    width: 253px;
    height: 100%;
    position: absolute;
    right: -140px;
    top: 0;
    @media (max-width: 992px) {
      display: none;
    }
  }
  li {
    display: flex;
    &:last-child {
      .question-info {
        margin-bottom: 0;
      }
    }
    span {
      font-size: 38px;
      color: #1da9f7;
      margin-left: 20px;
    }
    .question-info {
      margin-top: 10px;
      margin-bottom: 40px;
      h3 {
        font-size: 21px;
        font-weight: 600;
      }
      p {
        margin: 0;
        line-height: 1.7;
        @media (max-width: 576px) {
          font-size: 14px;
        }
      }
    }
  }
}
.counter-facts {
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 65%;
  margin: auto;
  padding-top: 70px;
  @media (max-width: 992px) {
    max-width: 100%;
  }
  li {
    &:first-child {
      span,
      h3 {
        color: #222;
      }
    }
    &:nth-child(2) {
      span,
      h3 {
        color: #e95557;
      }
    }
    &:nth-child(3) {
      span,
      h3 {
        color: #ffbf48;
      }
    }
    &:nth-child(4) {
      span,
      h3 {
        color: #1da9f7;
      }
    }
    span {
      font-size: 32px;
      font-weight: 400;
      line-height: 1;
      @media (max-width: 768px) {
        font-size: 24px;
      }
    }
    h3 {
      font-size: 21px;
      font-weight: 400;
      margin: 0;
      @media (max-width: 768px) {
        font-size: 16px;
      }
    }
  }
}
</style>