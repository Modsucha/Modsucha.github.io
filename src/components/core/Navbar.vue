<template>
     <div class="nav-bar">
        <div class="nav-all">
            <div class="navpro">
                <div class="nav-logo">
                    <h2>Lorem</h2>
                </div>
                <button style="font-size:30px;cursor:pointer" @click="openNav()">&#9776;</button>
                <div class="nav-link" id="myNav">
                    <a style="text-decoration: none;" class="closebtn" @click="closeNav()"><i class="bi bi-x"></i></a>
                    <ul class="nav-item">
                        <li class="items">
                            <a href="/inventory" style="text-decoration: none;"><strong> home </strong></a>
                        </li>
                        <li class="items">about</li>
                        <li class="items">categoriesr</li>
                        <li class="items"><i class="bi bi-search"></i></li>
                        <li class="items">
                            <a href="/cart" style="text-decoration: none;"><i class="bi bi-cart"></i> {{cartQuantity}}</a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import {mapGetters} from "vuex"
export default {
    name: "NavBar",
    computed: {
    ...mapGetters([
      'cartQuantity'
    ])
  },
  created() {
    this.$store.dispatch("getCartItems");
  },
  methods: {
    openNav(){
        document.querySelector('.nav-link').style.height = "100%"
    },
    closeNav() {
        document.getElementById("myNav").style.height = "0%";
    }
  }
}
</script>
<style>
@import url('https://fonts.googleapis.com/css2?family=DynaPuff&family=Nunito&display=swap');
.nav-bar
{
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
}
.nav-all
{
    width: 960px;
    height: 10vh;
}
.navpro
{
    display: flex;
    justify-content: space-between;
    align-items: center;
}
.navpro button {
    visibility: hidden;
}
.nav-logo
{
    padding-left: 2%;
    padding-top: 10px;
    cursor: pointer;
    font-family: 'DynaPuff', cursive;
    font-size: large;
}
.nav-logo h2
{
    font-size: 36px;
}
.nav-link 
{
    padding-top: 0px;
}
.nav-link .closebtn
{
    visibility: hidden;
}
.nav-link ul li
{
    display: inline-block;
    padding: 0;
    padding-left: 18px;
    text-transform: uppercase;
    font-size: 13px;
    color: #191919;
    cursor: pointer;
    font-family: 'Nunito', sans-serif;
}
.nav-link ul li::after
{
    content: '';
    width: 0%;
    height: 2px;
    background-color: #191919;
    display: block;
    margin: auto;
    transition: 0.5s;
}
.nav-link ul li:hover::after
{
    width: 100%;
}
.nav-link ul
{
    margin-right: 50px;
}
.nav-link ul li a{
  color: #191911;
}

@media screen and (max-width: 600px) {
.nav-all
{
    height: 10vh;
}
.navpro
{
    padding-top: 10px;
}
.navpro button {
    visibility: visible;
    font-size: medium;
    border: none;
    background-color: transparent;
    padding: 0px 18px;
}
.nav-logo h2
{
    font-size: 24px;
}
.nav-link
{
  height: 0%;
  width: 100%;
  position: fixed;
  z-index: 1;
  top: 0;
  left: 0;
  background-color: rgb(0,0,0);
  background-color: rgba(0,0,0, 0.9);
  overflow-y: hidden;
  transition: 0.5s;
  overflow: hidden;
}
.nav-link .closebtn {
  visibility: visible;
  position: absolute;
  top: 15px;
  right: 20px;
  font-size: 40px;
  color: #FFFF;
}
.nav-link ul {
position: relative;
  top: 25%;
  right: 2%;
  width: 100%;
  text-align: center;
  margin-top: 30px;
}
.nav-link ul li
{
  padding: 8px;
  text-decoration: none;
  font-size: 16px;
  color: #FFFF;
  display: block;
  transition: 0.3s;
}
.nav-link ul li a{
  color: #FFFF;
}
.nav-link ul li:hover, .nav-link ul li:focus
{
    color: #f1f1f1;
}
.nav-link ul li 
.nav-link ul li::after
{
    content: '';
    width: 0%;
    height: 2px;
    background-color: #191919;
    display: block;
    margin: auto;
    transition: 0.5s;
}
.nav-link ul li:hover::after
{
    width: 0%;
}
}
</style>