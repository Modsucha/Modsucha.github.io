<template>
    <div class="row-on">
        <div class="nav-home">
            <div class="nav-home-item">
                <a @click="backUp()" style="cursor:pointer;"><b><i class="bi bi-chevron-left"></i></b></a>
            </div>
            <div class="nav-home-item">
                <h3 class="logo-home" >Cart</h3>
            </div>
            <div class="nav-home-item">
                <p>{{cartQuantity}} items in bag</p>
            </div>
        </div>
    </div>
  <div class="allder">
        <div class="item-cart" v-for="cartItem in cartItems" :key="cartItem.id">
            <div class="all-item-cart">
                <div class="cart-img">
                    <img :src="cartItem.image_tag">
                </div>
                <div class="cart-text">
                    <h3>{{cartItem.title}}</h3>
                    <!-- <p style="color:#777;">Color: Black</p> -->
                    <h4><b>{{cartItem.price}}</b></h4>
                </div>
            </div>
            <div class="all-item-cart">
                <h4>{{cartItem.quantity}}</h4>
                <span><b>{{cartItem.price * cartItem.quantity}}</b></span>
                <button @click="removeCartItem(cartItem)"><i class="bi bi-x-lg"></i></button>
            </div>
        </div>
        <p>
          Total:
          <span>{{ cartTotal }}</span>
        </p>
    </div>
</template>  
<script>
import { mapGetters, mapActions } from "vuex";
export default {
  name: "ProductList",
  computed: {
    ...mapGetters(["cartItems", "cartTotal", "cartQuantity"]),
  },
  created() {
    this.$store.dispatch("getCartItems");
  },
  methods: {
    ...mapActions(["removeCartItem"]),
    backUp() {
       return history.back()
    }
  }
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=DynaPuff&family=Nunito&display=swap');
*
{
    box-sizing: border-box;
}
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
.nav-home .nav-home-item
{
    position: relative;
}
.nav-home .nav-home-item a
{
    padding: 5px 10px;
    background-color: black;
    color: #fff;
    position: relative;
    left: 100%;
    transition: .5s;
}
.nav-home .nav-home-item a:hover
{
    background-color: rgb(199, 199, 199);
    color: #191919;
}
.nav-home .nav-home-item a:hover:active
{
    background-color: rgb(199, 199, 199);
    color: #191919;
}
.nav-home .nav-home-item p
{
    text-align: center;
    padding-right: 30px;
    padding-top:12px ;
}
.nav-home .nav-home-item .logo-home
{
    font-size:22px;
    font-weight:700;
    padding-top:5px;
    position: relative;
    left: 100%;
}
.allder
{
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-family: 'Nunito', sans-serif;
}
.allder p
{
    padding: 30px 0;
    font-size: 16px;
}
.allder .item-cart
{
    width: 960px;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    margin-top:2rem;
}
.all-item-cart
{
    flex-basis: 45%;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    padding-left: 10px;
}
.all-item-cart button
{
    padding: 5px 10px;
    border: none;
    background-color: black;
    color: aliceblue;
    transition: .5s;
}
.all-item-cart button:hover
{
    background-color: rgb(199, 199, 199);
    color: #191919;
}
.all-item-cart button:hover:active
{
    background-color: rgb(199, 199, 199);
    color: #191919;
}
.all-item-cart input
{
    width: 100px;
    padding: 5px 10px;
    border: none;
    background-color: #CEE5D0;
}
.all-item-cart button i
{
    font-weight: 700;
}
.cart-img
{
    width:150px;
    height: 150px;
    object-fit: cover;
}
.cart-img img
{
    width:100%;
    height: 100%;
    object-fit: cover;
}
.cart-text
{
    text-align: left;
}
@media (min-width: 300px) and (max-width: 700px)
{
.nav-home
{
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
}
.allder p
{
    padding: 30px 0;
    font-size: small;
}
.allder .item-cart
{
    width: 100%;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    margin-top:2rem;
}
.nav-home .nav-home-item p
{
    text-align:  start;
    padding-right: 10px;
    padding-top:12px ;
    font-size: 15px;
}
.nav-home .nav-home-item a
{
    padding: 2px 6px;
    background-color: black;
    position: relative;
    left: 100%;
    color: #fff;
}
.cart-img
{
    width:110px;
    height: 110px;
    object-fit: cover;
}
.cart-img img
{
    width:100%;
    height: 100%;
    object-fit: cover;
}
.cart-text
{
    text-align: left;
    padding-left: 10px;
}
.cart-text h3
{
    font-size: 16px;
}
.cart-text p
{
    font-size: 13px;
}
.cart-text h4
{
    font-size: 16px;
}
.all-item-cart h4
{
    font-size: 16px;
}
.all-item-cart button
{
    padding: 2px 6px;
    border: none;
    background-color: black;
    color: aliceblue;
}
.nav-home .nav-home-item p
{
    text-align: center;
    padding-right: 10px;
    padding-top:12px;
    font-size: 13px;
}
}
@media (min-width: 700px) and (max-width: 1024px)
{
.nav-home
{
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
}
.allder .item-cart
{
    width: 100%;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    margin-top:2rem;
}
.nav-home .nav-home-item a
{
    background-color: black;
    position: relative;
    left: 100%;
    color: #fff;
}
}
</style>