<template>
  <div class="home-shop">
    <div class="row-on">
        <div class="nav-home">
            <div class="nav-home-item">
                <a @click="backUp()" style="cursor:pointer;">
                    <b><i class="bi bi-chevron-left"></i>All Categories</b>
                </a>
            </div>
            <div class="nav-home-item">
                <h3 class="logo-home" style="font-size:26px;font-weight:700;padding-top:15px;padding-left:30px;">Home Electronics</h3>
            </div>
            <div class="nav-home-item">
                <label for="cars" style="display:block;text-align: left;">Categry</label>
                <select name="cars" id="cars">
                    <option value="All Categories">All Categories</option>
                    <option value="saab">Saab</option>
                    <option value="opel">Opel</option>
                    <option value="audi">Audi</option>
                </select>
            </div>
        </div>
    </div>
    <div class="row-on">
        <div class="select-home">
            <label for="cars" style="text-align: left; color: #777;font-weight:500;">SORT BY :</label>
            <h4 style="font-size:18px;font-weight:400;padding-top:9px;padding-right:30px;">Popularity</h4>
                <select name="cars" id="cars">
                    <option value="All Categories">Price</option>
                    <option value="saab">Saab</option>
                    <option value="opel">Opel</option>
                    <option value="audi">Audi</option>
                </select>
                <select name="cars" id="cars">
                    <option value="All Categories">Alphabetical</option>
                    <option value="saab">Saab</option>
                    <option value="opel">Opel</option>
                    <option value="audi">Audi</option>
                </select>
        </div>
    </div>
    <div class="goods">
        <div class="goods-item" >
            <div class="all-goods" v-for="productItem in productItems" :key="productItem.id">
                        <div class="goods-img">
                            <img :src="productItem.image_tag" >
                        </div>
                <div class="goods-text">
                        <h6 style="font-size: medium;"><a style="text-decoration: none; color:black;" >
                            {{ productItem.email }}
                        </a></h6>
                    <h5 style="font-weight:700;font-size: medium;"> {{productItem.price}} ฿</h5>
                    <a @click="addCartItem(productItem)" class="link-1">
                        <strong><i class="bi bi-cart-fill"></i></strong>
                    </a>
                </div>
            </div>
        </div>
    </div>
    <div class="next-page">
        <button class="action">1</button>
        <button>2</button>
        <button>3</button>
    </div>
    <FooterView></FooterView>
  </div>
</template>

<script>
import { mapGetters ,mapActions} from 'vuex';
export default {
    data() {
        return {
            
        }
    },
  computed: {
    ...mapGetters([
      'productItems'
    ])
  },
  methods: {
    ...mapActions(["addCartItem"]),
    backUp() {
       return history.back()
    }
  },
  created() {
    this.$store.dispatch('getProductItems');
  }
};
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=DynaPuff&family=Nunito&display=swap');
.row-on
{
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: 'Nunito', sans-serif;
}
.nav-home
{
    width: 960px;
    display: flex;
    justify-content: space-between;
    align-items: center;
}
.nav-home .nav-home-item select
{
    display: block;
    width: 200px;
    text-align: start;
    border: none;
    padding: 10px ;
    background-color: #F6F6F6;
}
.nav-home .nav-home-item select option
{
    height: 20px;
    background-color: #F6F6F6;
}
.select-home
{
    display: flex;
    justify-content: center;
    align-items: center;
    padding-top: 30px;
}
.select-home label
{
    padding: 0 20px;
}
.select-home h4
{
 padding: 0 20px;
}
.select-home select
{
    padding: 0 20px;
    margin-right: 20px;
    width: 150px;
    text-align: start;
    border: none;
    padding: 10px ;
    background-color: #F6F6F6;
}
.goods
{
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: 'Nunito', sans-serif;
}
.goods .goods-item
{
    width: 960px;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    align-items: stretch;
}
.goods .goods-item .all-goods
{
    flex-wrap: wrap;
    margin: 10px 0px;
    flex-basis: 30%;
}
.goods .goods-item .all-goods .goods-img
{
    width: 250px;
    height: 250px;
    position: relative;
}
.goods .goods-item .all-goods .goods-img img
{
    width: 100%;
    height: 100%;
    object-fit: cover;
}
.goods .goods-item .all-goods .goods-text
{
    position: relative;
}
.goods .goods-item .all-goods .goods-text h6
{
    text-align: start;
    cursor: pointer;
    transition: .5s;
}
.goods .goods-item .all-goods .goods-text h6:hover
{
    font-weight: 700;
    color: #000;
}
.goods .goods-item .all-goods .goods-text h5
{
    text-align: start;
    display: inline-block;
}
.goods .goods-item .all-goods .goods-text .link-1
{
    position: absolute;
    right: 16%;
    bottom: 10%;
    font-size: larger;
    cursor: pointer;
    color: #000;
}
.next-page
{
    display: flex;
    justify-content: center;
    align-items: center;
}
.next-page button 
{
    padding: 7px 14px;
    background-color: #F6F6F6;
    color: #000;
    margin: 10px;
    border: none;
}
.next-page button.action
{
    padding: 7px 14px;
    background-color: black;
    color: #F6F6F6;
    margin: 10px;
    border: none;
}
</style>