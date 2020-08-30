<template>
  <div class="compare-section pb-100">
    <div class="container">
      <h4 class="text-title text-center mb-40">{{textTitle}}</h4>

      <table class="table table-hover">
        <thead>
          <tr class="heading">
            <th scope="col" v-for="(title,index) in titles" :key="index">
              {{title.name}}
              <h4 v-if="title.price">{{title.price + title.renewBy}}</h4>
            </th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(table,index) in tables" :key="index">
            <td scope="row">{{table.name}}</td>
            <td :class="checkColumnOne(table)">{{table.columnOne}}</td>
            <td :class="checkColumnTwo(table)">{{table.columnTwo}}</td>
            <td :class="checkColumnThree(table)">{{table.columnThree}}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  name: "Compare",
  data() {
    return {
      textTitle: "قارن جميع خطط الاستضافة",
      titles: [
        {
          name: "ميزات الخطة"
        },
        {
          name: "ميزات أحادي",
          price: "0.89$",
          renewBy: "/الشهر"
        },
        {
          name: "ميزات ممتاز",
          price: "0.89$",
          renewBy: "/الشهر"
        },
        {
          name: "ميزات اعمال",
          price: "0.89$",
          renewBy: "/الشهر"
        }
      ],
      tables: [
        {
          name: "قوة المعالجة والذاكرة",
          columnOne: "X1",
          columnTwo: "X2",
          columnThree: "X3"
        },
        {
          name: "مواقع",
          columnOne: "1",
          columnTwo: "غير محدود",
          columnThree: "غير محدود"
        },
        {
          name: "مساحة القرص",
          columnOne: "10GB",
          columnTwo: "20GB",
          columnThree: "30GB"
        },
        {
          name: "كمية نقل البيانات",
          columnOne: "100GB",
          columnTwo: "غير محدود",
          columnThree: "غير محدود"
        },
        {
          name: "قواعد بيانات MySQL",
          columnOne: "1",
          columnTwo: "غير محدود",
          columnThree: "غير محدود"
        },
        {
          name: "التسجيل المجاني للنطاق",
          columnOne: "لا يوجد",
          columnTwo: "يوجد",
          columnThree: "يوجد"
        },
        {
          name: "شهادة SSL مجانية",
          columnOne: "يوجد",
          columnTwo: "يوجد",
          columnThree: "يوجد"
        },

        {
          name: "نسخ احتياطية يومية",
          columnOne: "لا يوجد",
          columnTwo: "لا يوجد",
          columnThree: "يوجد"
        },
        {
          name: "حسابات البريد الإلكتروني",
          columnOne: "1",
          columnTwo: "غير محدود",
          columnThree: "غير محدود"
        },
        {
          name: "حجم قاعدة البيانات",
          columnOne: "3GB",
          columnTwo: "3GB",
          columnThree: "3GB"
        }
      ]
    };
  },
  methods: {
    checkColumnOne(table) {
      if (table.columnOne === "يوجد") {
        return "green";
      } else if (table.columnOne === "لا يوجد") {
        return "red";
      }
    },
    checkColumnTwo(table) {
      if (table.columnTwo === "يوجد") {
        return "green";
      } else if (table.columnTwo === "لا يوجد") {
        return "red";
      }
    },
    checkColumnThree(table) {
      if (table.columnThree === "يوجد") {
        return "green";
      } else if (table.columnThree === "لا يوجد") {
        return "red";
      }
    }
  }
};
</script>

<style lang="scss" scoped>
table {
  font-size: 14px;
  .heading {
    background-color: #f6f6f6;
    th {
      vertical-align: middle;
      h4 {
        font-weight: 300;
        font-size: 14px;
      }
    }
  }
  td {
    color: #777777;
    font-size: 14px;
    font-weight: 500;
    vertical-align: middle;
  }
  td[scope="row"] {
    color: #222;
  }
  td.red {
    color: red;
  }
  td.green {
    color: green;
  }
}
</style>