<template>
    <div class="ip">
    <NavBar></NavBar>
    <section class="show-img">
        <div class="all-show-img">
            <div class="item-img-one">
                <img src="../assets/ff51.jpg">
                <div class="line">
                    <h2>Comfortable</h2>
                </div>
            </div>
            <div class="item-img">
                <img src="../assets/10c6.jpg">
                <div class="line">
                    <h2>Skincare</h2>
                </div>
            </div>
            <div class="item-img">
                <div class="item">
                    <img src="../assets/37680617eef.jpg">
                    <div class="line">
                        <h2>Kitchen & Dining</h2>
                    </div>
                </div>
                <div class="item">
                    <img src="../assets/ccb60ccf.jpg">
                    <div class="line">
                        <h2>Fashion</h2>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <section class="one-img">
        <div class="one-show-img">
            <div class="one-text">
                <h1> <b>Creative, <br>harmonnious living </b></h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo libero,
                    doloribus amet voluptates soluta cumque ipsam modi </p>
                    <button type="button">SHOP NOW</button>
            </div>
        </div>
    </section>

    <section class="two-img">
        <div class="two-show-img">
            <div class="two-text">
                <h1> <b> Comfortable<br>& elegant bicycles </b></h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo libero,
                     voluptatibus delectus eveniet reiciendis!</p>
                    <button type="button">SHOP NOW</button>
            </div>
        </div>
    </section>
    <div class="row-on">
        <div class="select-home">
            <label for="cars" style="text-align: left; color: #777;font-weight:500;">SORT BY :</label>
            <h4 style="font-size:18px;font-weight:400;padding-top:9px;padding-right:30px;">All Categories</h4>
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
                        <h6 style="font-size: medium;">
                            <router-link style="text-decoration: none; color:black;" :to="{path: '/listProduct/' +  productItem.id, params: { id: productItem.id}}">
                            {{ productItem.title }}
                            </router-link>
                        </h6>
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
  name: "ProductList",
  computed: {
    ...mapGetters([
      'productItems'
    ])
  },
  methods: {
    ...mapActions(["addCartItem"]),
  },
  created() {
    this.$store.dispatch('getProductItems');
  }
};
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=DynaPuff&family=Nunito&display=swap');
.show-img
{
    height: 90vh;
    width: 100%;
    display: flex;
    justify-content: center;
}
.show-img .all-show-img
{
    display: flex;
    justify-content: center;
    align-items: stretch;
    width: 960px;
    font-family: 'Nunito', sans-serif;
    box-sizing: border-box;
}
.show-img .all-show-img .item-img-one
{
    flex-basis: 40%;
    margin: 0 5px;
    height: 90%;
    width: 40%;
    object-fit: cover;
    position: relative;
}
.show-img .all-show-img .item-img-one img
{
    width: 100%;
    height: 100%;
    object-fit: cover;
    vertical-align: middle;
}
.show-img .all-show-img .item-img-one .line
{
    background: rgba(0, 0, 0, 0);
    position: absolute;
    height: 100%;
    width: 100%;
    bottom: 0;
    transition: .5s;
}
.show-img .all-show-img .item-img-one .line:hover
{
    background: rgba(0, 0, 0, 0.5);
}
.show-img .all-show-img .item-img-one .line h2
{
    position: absolute;
    left: 12%;
    bottom: 2%;
    color: black;
    font-size: 24px;
    font-weight: 700;
    text-transform: capitalize;
    transition: .5s;
    cursor: pointer;
}
.show-img .all-show-img .item-img-one .line h2:hover
{
    color:#fff;
}
.show-img .all-show-img .item-img
{
    flex-basis: 28%;
    margin: 0 5px;
    height: 60%;
    width: 25%;
    object-fit: cover;
    position: relative;
}
.show-img .all-show-img .item-img img
{
    width: 100%;
    height: 150%;
    object-fit: cover;
    vertical-align: middle;
}
.show-img .all-show-img .item-img .line
{
    background: rgba(0, 0, 0, 0);
    position: absolute;
    height: 150%;
    width: 100%;
    bottom: -50%;
    transition: .5s;
}
.show-img .all-show-img .item-img .line:hover
{
    background: rgba(0, 0, 0, 0.5);
}
.show-img .all-show-img .item-img h2
{
    position: absolute;
    left: 12%;
    bottom: 2%;
    color: black;
    font-size: 24px;
    font-weight: 700;
    text-transform: capitalize;
    transition: 1s;
    cursor: pointer;
}
.show-img .all-show-img .item-img h2:hover
{
    color: #fff;
}
.show-img .all-show-img .item-img .item
{
    height: 73%;
    width: 100%;
    object-fit: cover;
    flex-direction: column;
    margin-bottom: 20px;
    position: relative;
}
.show-img .all-show-img .item-img .item img
{
    width: 100%;
    height: 100%;
    object-fit: cover;
    vertical-align: middle;
}
.show-img .all-show-img .item-img .item .line
{
    background: rgba(0, 0, 0, 0);
    position: absolute;
    height: 100%;
    width: 100%;
    bottom: 0;
    transition: .5s;
}
.show-img .all-show-img .item-img .item .line:hover
{
    background: rgba(0, 0, 0, 0.5);
}
.show-img .all-show-img .item-img .item h2
{
    position: absolute;
    left: 12%;
    bottom: 5%;
    color: black;
    font-size: 24px;
    font-weight: 700;
    text-transform: capitalize;
    transition: .5s;
    cursor: pointer;
}
.show-img .all-show-img .item-img .item h2:hover
{
    color: #fff;
}
.one-img
{
    height: 60vh;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
}
.one-img .one-show-img
{
    background-color: antiquewhite;
    width: 960px;
    height: 40vh;
    display: flex;
    justify-content:start;
    align-items: center;
    object-fit: cover;
    font-family: 'Nunito', sans-serif;
    position: absolute;
    background: linear-gradient(rgba(0,0,0,0.1),rgba(0,0,0,0.1)) ,url(../assets/aromatherapy-table-setting-with-scented-candles-towel.jpg);
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
}
.one-img .one-show-img .one-text h1,
.one-img .one-show-img .one-text p
{
    text-align: start;
}
.one-img .one-show-img .one-text
{
    display: flex;
    flex-direction: column;
    justify-content: start;
    padding: 20px 35px;
    width: 450px;
    margin: 5px 35px;
}
.one-img .one-show-img .one-text button
{
    width: 130px;
    height: 40px;
    font-size: small;
    border: none;
    color: #fff;
    background-color: black;
}
.two-img
{
    height: 50vh;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
}
.two-img .two-show-img
{
    background-color: antiquewhite;
    width: 960px;
    height: 40vh;
    display: flex;
    justify-content:end;
    align-items: center;
    object-fit: cover;
    font-family: 'Nunito', sans-serif;
    position: absolute;
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
}
.two-img .two-show-img .two-text
{
    display: flex;
    flex-direction: column;
    justify-content: start;
    padding: 20px 35px;
    width: 450px;
    margin: 5px 35px;
}
.one-img .one-show-img .one-text p,
.two-img .two-show-img .two-text p
{
    font-size: smaller;
}
.two-img .two-show-img .two-text h1,
.two-img .two-show-img .two-text p
{
    text-align: start;
}
.two-img .two-show-img .two-text button
{
    width: 130px;
    height: 40px;
    font-size: small;
    border: none;
    color: #fff;
    background-color: black;
}
.one-img .one-show-img .one-text h1,
.two-img .two-show-img .two-text h1
{
    color: #191919;
    font-size: 28px;
}
.image-item
{
    width: 400px;
    height: 25vh;
    object-fit: cover;
}
.image-item img
{
    width: 100%;
    height: 100%;
    object-fit: cover;
}
.row-on
{
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: 'Nunito', sans-serif;
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
    align-items: center;
    padding-left: 10px;
    padding-right: 5px;
}
.goods .goods-item .all-goods
{
    flex: 25%;
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
    right: 15%;
    bottom: 10%;
    font-size: larger;
    cursor: pointer;
    color: #000;
}
.goods .goods-item .all-goods .goods-text .link-1:active
{
    color: #777;
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
@media screen and (max-width: 600px) {
    .show-img
{
    height: 40vh;
}
.show-img .all-show-img
{
    width: 100%;
    height: 40vh;
}
.show-img .all-show-img .item-img-one
{
    flex-basis: 42%;
}
.show-img .all-show-img .item-img-one .line h2
{
    position: absolute;
    left: 12%;
    bottom: 2%;
    font-size: 14px;
}
.show-img .all-show-img .item-img-one .line h2:hover
{
    color:#fff;
}
.show-img .all-show-img .item-img
{
    flex-basis: 28%;
}
.show-img .all-show-img .item-img h2
{
    font-size: 14px;
}
.show-img .all-show-img .item-img .item
{
    margin-bottom: 12px;
}
.show-img .all-show-img .item-img .item img
{
    width: 100%;
}
.show-img .all-show-img .item-img .item h2
{
    font-size: 14px;
}
.items-product
{
    height: 20vh;
}
.show-img .all-show-img .item-img .item .line
{
    width: 100%;
}
.one-img .one-show-img
{
    width: 100%;
}
.one-img .one-show-img .one-text
{
    padding: 18px 20px;
    width: 390px;
    margin: 5px 20px;
}
.one-img .one-show-img .one-text button
{
    width: 100px;
    height: 30px;
    font-size: 12px;
    border: none;
    color: #fff;
    background-color: black;
}
.two-img .two-show-img
{
    width: 100%;
    height: 35vh;
}
.two-img .two-show-img .two-text
{
    padding: 18px 20px;
    width: 390px;
    margin: 5px 20px;
}
.two-img .two-show-img .two-text button
{
    width: 100px;
    height: 30px;
    font-size: 12px;
    border: none;
    color: #fff;
    background-color: black;
}
.one-img .one-show-img .one-text h1,
.two-img .two-show-img .two-text h1
{
    color: #191919;
    font-size: 16px;
}
.one-img .one-show-img .one-text p,
.two-img .two-show-img .two-text p
{
    font-size: 12px;
    color: #191919;
    font-weight: 500;
}
.row-on
{
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: 'Nunito', sans-serif;
}
.select-home
{
    display: flex;
    justify-content: center;
    align-items: center;
    padding-top: 10px !important;
    width: 200px;
}
.select-home label
{
    width: 120px !important;
    font-size: x-small !important;
    padding: 0 10px !important;
}
.select-home h4
{
    font-size: x-small !important;
    padding-right: 15px !important;
}
.select-home select
{
    font-size: x-small !important;
    padding: 0 5px;
    margin-right: 9px !important;
    width: 80px !important;
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
    width: 960px !important;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
}
.goods .goods-item .all-goods
{
    margin: 0px 10px !important;
    flex:30% !important;
}
.goods .goods-item .all-goods .goods-text
{
    position: relative;
}
.goods .goods-item .all-goods .goods-img
{
    width: 100% !important;
    height: 70% !important;
    object-fit: cover !important;
    
}
.goods .goods-item .all-goods .goods-img img
{
    width: 100% !important;
    height: 100% !important;
    object-fit: cover !important;
}
.goods .goods-item .all-goods .goods-text h6
{
    font-size: small !important;
    padding-top: 10px;
}
.goods .goods-item .all-goods .goods-text h6:hover
{
    font-weight: 700;
    color: #000;
}
.goods .goods-item .all-goods .goods-text h5
{
    font-size: small !important;
}
.goods .goods-item .all-goods .goods-text .link-1
{
    position: absolute;
    right:4% !important;
    bottom: 10%;
    font-size: larger;
    cursor: pointer;
    color: #000;
}
.goods .goods-item .all-goods .goods-text .link-1:active
{
    color: #777;
}
}


@media (min-width: 601px) and (max-width: 900px) {
.show-img
{
    height: 70vh;
}
.show-img .all-show-img
{
    width: 100%;
    height: 60vh;
}
.show-img .all-show-img .item-img-one
{
    flex-basis: 42%;
}
.show-img .all-show-img .item-img-one .line h2
{
    position: absolute;
    left: 12%;
    bottom: 2%;
    font-size: 18px;
}
.show-img .all-show-img .item-img-one .line h2:hover
{
    color:#fff;
}
.show-img .all-show-img .item-img
{
    flex-basis: 28%;
}
.show-img .all-show-img .item-img h2
{
    font-size: 18px;
}
.show-img .all-show-img .item-img .item
{
    margin-bottom: 12px;
}
.show-img .all-show-img .item-img .item img
{
    width: 100%;
}
.show-img .all-show-img .item-img .item h2
{
    font-size: 18px;
}
.items-product
{
    height: 20vh;
}
.show-img .all-show-img .item-img .item .line
{
    width: 100%;
}
.one-img .one-show-img
{
    width: 100%;
}
.one-img .one-show-img .one-text
{
    padding: 20px 30px;
    width: 390px;
    margin: 5px 30px;
}
.one-img .one-show-img .one-text button
{
    width: 100px;
    height: 40px;
    font-size: small;
    border: none;
    color: #fff;
    background-color: black;
}
.two-img .two-show-img
{
    width: 100%;
    height: 40vh;
}
.two-img .two-show-img .two-text
{
    padding: 18px 20px;
    width: 390px;
    margin: 5px 20px;
}
.two-img .two-show-img .two-text button
{
    width: 100px;
}
.one-img .one-show-img .one-text h1,
.two-img .two-show-img .two-text h1
{
    color: #191919;
    font-size: 26px;
}
.select-home label
{
    padding: 0 5px;
    font-size: 15px;
}
.select-home h4
{
 padding: 0 5px;
}
.select-home select
{
    padding: 0 5px;
    margin-right: 5px;
    width: 150px;
    text-align: start;
    border: none;
    padding: 10px ;
    background-color: #F6F6F6;
}
/* ======================================== */
.goods
{
    width: 100% !important;
    display: flex !important;
    justify-content: center !important;
    align-items: center !important;
    font-family: 'Nunito', sans-serif !important;
}
.goods .goods-item
{
    width: 100% !important;
    display: flex !important;
    flex-direction: row !important;
    flex-wrap: wrap !important;
    justify-content: center !important;
    align-items: center;
}
.goods .goods-item .all-goods
{
    flex: 25% !important;
}
.goods .goods-item .all-goods .goods-img
{
    width: 100%;
    height: 100%;
    object-fit: cover;
}
.goods .goods-item .all-goods .goods-img img
{
    width: 100%;
    height: 100%;
    object-fit: cover;
}
}



@media (min-width: 901px) and (max-width: 1440px) {
.image-item
{
    width: 350px;
    height: 25vh;
    object-fit: cover;
}
.image-item img
{
    width: 100%;
    height: 100%;
    object-fit: cover;
}
.goods .goods-item .all-goods
{
    margin: 10px 0px;
    flex: 30%;
}
.goods .goods-item .all-goods .goods-img
{
    width: 250px;
    height: 250px;
    object-fit: cover;
}
.goods .goods-item .all-goods .goods-img img
{
    width: 100%;
    height: 100%;
    object-fit: cover;
}
}

</style>