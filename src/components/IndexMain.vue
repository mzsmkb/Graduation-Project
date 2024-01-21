<template>
  <div class="box">
    <!-- 商品种类导航和搜索框 -->
    <div class="category-nav">
      <a href="#">手机</a>
      <a href="#">平板</a>
      <a href="#">笔记本</a>
      <a href="#">穿戴设备</a>
      <a href="#">家电</a>
      <a-input-search placeholder="搜索商品" style="width: 200px;" />
    </div>

    <!-- 轮播图 -->
    <a-carousel effect="fade" autoplay>
      <div v-for="n in 4" :key="n">
        <img :src="`https://via.placeholder.com/800x300?text=Slide${n}`" alt="">
      </div>
    </a-carousel>

    <!-- 手机展示区 -->
    <div class="product-display">
      <div class="title-bar">
        <span>手机</span>
        <a href="#">查看更多 ></a>
      </div>
      <a-row :gutter="16">
        <a-col v-for="n in 8" :key="n" :span="6">
          <a-card
              :cover="`https://via.placeholder.com/200x200?text=Phone${n}`"
              hoverable
          >
            <a-card-meta title="商品名称" description="商品描述"></a-card-meta>
          </a-card>
        </a-col>
      </a-row>
    </div>
  </div>
</template>

<script>
export default{
  name:"IndexMain",
}

</script>


<style scoped>
//中间栏
.box .category-nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
}

.box .product-display {
  padding: 1rem;
}

.box .title-bar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
}

</style>
