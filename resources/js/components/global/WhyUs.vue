<template>
  <div class="why-us pd-100">
    <div class="container">
      <div class="row">
        <div class="col-md-6 align-self-center">
          <div class="section-image">
            <img class="img-fluid" :src="image" alt="whyus" />
          </div>
        </div>
        <div class="col-md-6 align-self-center">
          <h3 class="text-title mb-30">{{ title }}</h3>
          <div class="accordion" id="accordionWhyUs">
            <div class="card" v-for="(accordion, index) in items" :key="index">
              <div class="card-header" :id="'accordian_' + index">
                <button
                  class="btn"
                  type="button"
                  data-toggle="collapse"
                  :data-target="'#collapse_' + index"
                  :aria-expanded="index === 0 ? 'true' : 'false'"
                  :aria-controls="'collapse_' + index"
                >
                  {{ accordion.accordionTitle }}
                  <span class="icon-plus"></span>
                </button>
              </div>
              <div
                :id="'collapse_' + index"
                class="collapse"
                :class="{ show: index === 0 }"
                :aria-labelledby="'accordian_' + index"
                data-parent="#accordionWhyUs"
              >
                <p class="card-body">{{ accordion.accordionDescription }}</p>
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
  name: "Whyus",
  props: ["image", "title", "items"]
};
</script>

<style lang="scss" scoped>
.why-us {
  background-color: #f7fafd;
  position: relative;
  &:before,
  &:after {
    content: "";
    background-image: url(/img/svg/white_path.svg);
    width: 360px;
    height: 100%;
    right: 0;
    position: absolute;
    top: 0;
    @media (max-width: 1400px) {
      display: none;
    }
  }
  &:after {
    transform: rotate(180deg);
    left: 0;
    right: inherit;
  }
  .section-image {
    @media (max-width: 768px) {
      margin-bottom: 40px;
    }
  }
  .card {
    border: none;
    margin-bottom: 10px;
    background-color: transparent;
    &:last-child {
      margin: 0;
    }
    .card-header {
      padding: 0;
      margin: 0;
      border: none;
      button {
        padding: 0;
        color: #fff;
        font-size: 14px;
        font-weight: 500;
        background-color: #1da9f7;
        border-radius: 5px;
        padding: 15px;
        width: 100%;
        display: flex;
        align-items: center;
        text-align: start;
        position: relative;
        &[aria-expanded="true"] {
          background-color: #eeeeee;
          color: #222;
          span.icon-plus {
            &:before {
              content: "\e910";
            }
          }
        }
        span.icon-plus {
          position: absolute;
          left: 15px;
        }
      }
    }
    .card-body {
      padding: 10px 15px;
      font-size: 14px;
      font-weight: 300;
      margin: 0;
      line-height: 1.8;
    }
  }
}
</style>
