<template>
    <div>
<table border="1">
            <tr>
                <td>商品名称</td>
                <td>商品价格</td>
                <td>商品数量</td>
                <td>商品总价</td>
                <td>操作</td>
            </tr>
            <tr v-for="(v, index) in cart" :key="v.id">
                <td>
                    {{v.text}}
                </td>
                <td>
                    {{v.price}}
                </td>
                <td>
                    <button @click="sub(index)">-</button>
                    {{v.num}}
                    <button @click="add(index)">+</button>
                </td>
                <td>
                    {{v.amount}}
                </td>
                <td>
                    <button @click="remove(index)">删除</button>
                </td>
            </tr>
           
        </table>
    </div>
</template>

<script>
export default {
  name: "cart",
  data() {
    return {
      cart: [],
      isStorage: false
    };
  },
  watch: {
    isStorage(newValue, oldValue) {
      localStorage.cart = JSON.stringify(this.cart);
      this.isStorage = false;
    }
  },
  methods: {
    sub(index) {
      let good = this.cart[index];
      if (good && good.num > 1) {
        good.num--;
        good.amount = good.price * good.num
      } else if (good && good.num <= 1) {
        this.cart.splice(index, 1);
      }
      this.isStorage = true
    },
    add(index) {
      let good = this.cart[index];
      if (good) {
        good.num++;
        good.amount = good.price * good.num
        this.isStorage = true
      }
    },
    remove(index) {
      this.cart.splice(index, 1);
      this.isStorage = true
    }
  },
  created() {
    let cart = [];
    if (localStorage.cart) {
      //如果里面有数据 取出来
      cart = localStorage.getItem("cart");
      cart = JSON.parse(cart);

      console.log(typeof cart);
      console.log(cart);
    }
    this.cart = cart;
    this.$bus.$on("addCart", good => {
      //   good.id = id
      //   good = JSON.stringify(good)
      //放入之前先查看有没有，如果有，则数量 + 1
      let localGood = this.cart.find(t => {
        return t.id == good.id;
      });
      console.log("查找的信息：" + JSON.stringify(localGood));
      if (localGood) {
        localGood.num++;
        localGood.amount = localGood.num * localGood.price;
        console.log(1);
      } else {
        // good.amount = good.price;
        // good.num = 1;
        this.cart.push({
          ...good,
          amount: good.price,
          num: 1
        });
        console.log(2);
      }
      //存入localStorage
      //   localStorage.cart = JSON.stringify(cart);
      this.isStorage = true;
    });
  }
};
</script>

<style scoped>
</style>