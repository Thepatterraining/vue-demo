<template>
    <div>
        <ul>
            <li v-for="(v, index) in PreCart" :key="v.id">
               <span>
                   {{v.text}}
                   </span> 
                   <span>
                       {{v.price}}
                   </span>
                   <button @click="addCart(index)">加入购物车</button>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
  name: "PreCart",
  data() {
    return {
      PreCart: [
        { text: "商品", price: 100, id: 1 },
        { text: "文具", price: 200, id: 2 },
        { text: "书籍", price: 300, id: 3 }
      ]
    };
  },
  methods: {
    addCart(index) {
      let good = this.PreCart[index];
      console.log("商品信息" + JSON.stringify(good));
      this.$bus.$emit("addCart", good);
    }
  }
};
</script>

<style scoped>
</style>