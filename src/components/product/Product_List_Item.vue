<template>
    <div class="card">
        <div class="all-goods">
                <div class="goods-img">
                    <img :src="productItem.image_tag" >
                </div>
                <div class="goods-text">
                    <h5 style="font-size: medium;"><a style="text-decoration: none; color:black;" @click="addCartItem(productItem)">
                        {{ productItem.email }}
                    </a></h5>
                    <h5 style="font-weight:700;font-size: medium;"> {{productItem.price}} ฿</h5>
                </div>
        </div>
        
      <!-- <div class="card-content">
        <div class="content">
          <h4></h4>
          <a
            class="button is-rounded is-pulled-left"
            @click="addCartItem(productItem)"
          >
            <strong>Add to Cart</strong>
          </a>
          <br />
          <p class="mt-4">
            {{ productItem.description }}
          </p>
        </div>
        <div class="media">
          <div class="media-content">
            <p class="title is-6">{{ productItem.owner }}</p>
            <p class="subtitle is-7">{{ productItem.email }}</p>
          </div>
          <div class="media-right">
            <a class="button is-primary is-light">
              <strong>$ {{ productItem.price }}</strong>
            </a>
          </div>
        </div>
      </div> -->
    </div>
</template>
<script>
import {mapActions} from 'vuex'
export default {
  name: "ProductListItem",
  props: ["productItem"],
  methods: {
    ...mapActions(["addCartItem"]),
  },
};
</script>
<style>
.card
{
    width: 960px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: 'Nunito', sans-serif;
}
.all-goods
{
    margin: 10px 0px;
    flex-basis: 30%;
}
.all-goods .goods-img
{
    width: 250px;
    height: 250px;
    position: relative;
}
.all-goods .goods-img img
{
    width: 100%;
    height: 100%;
    object-fit: cover;
}
.all-goods .goods-text
{
    text-align: start;
}
</style>