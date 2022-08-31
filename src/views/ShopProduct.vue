<template>
    <div class="pro">
        <div class="product">
            <div class="detail">
                <div class="pva-back">
                    <button><a style="text-decoration: none;color:#fff; cursor:pointer;" @click="backUp()">
                        <i class="bi bi-chevron-left"></i>
                    </a></button>
                </div>
                <div class="text-detail" >
                    <h3>{{item.title}}</h3>
                </div>
                <div class="one-detail">
                    <div class="one-detail-one">
                        <div class="one-img">
                            <img :src="item.image_tag" >
                        </div>
                    </div>
                    <div class="one-detail-two">
                        <p class="text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora harum aspernatur vero amet velit doloremque consectetur sit, distinctio, nesciunt excepturi deserunt, illo recusandae consequuntur sint ab ut veniam ad adipisci.</p>

                        <label for="cars">Colors</label>
                        <div class="inline-one">
                            <select name="cars" id="cars">
                                <option value="volvo">Volvo</option>
                                <option value="saab">Saab</option>
                                <option value="opel">Opel</option>
                                <option value="audi">Audi</option>
                            </select>
                            <span>{{ item.price }} ฿</span>
                        </div>
                        <div class="inline-two">
                                    <input type="number" value="1" min="1" max="50">
                                    <button  @click="addCartItem(item)">ADD TO CART</button>
                            <p class="find"> find a stors</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { mapGetters ,mapActions} from 'vuex';
export default {
    components: { },
    data() {
        return {
            item:[],
        }
    },
    computed: {
    ...mapGetters([
      'productItems',
      'productItemById'
    ]),
    getData() {
            const id = this.$route.params.id
            const p = this.item[0].find(it => it.id == id)
            return [p.id, p.price]
        }
  },
  methods: {
    ...mapActions(["addCartItem"]),
    backUp() {
       return history.back()
    }
  },
  async created() {
    let res = await fetch('/api/products')
            let data = await res.json()
            this.item = data[(this.$route.params.id - 1)]
  }
}

</script>

<style>
*
{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
.product
{
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
}
.detail
{
    margin: auto;
    height: 100vh;
    width: 960px;
    background: linear-gradient(90deg, #ffff 50%, #efecec 50%);
    position: relative;
}
.pva-back
{
    position: absolute;
    left: 30px;
}
.pva-back button
{
    padding: 7px 15px;
    border:none;
    background-color: #000;
    color: #efecec;
}
.text-detail 
{
    margin-top: 5%;
}
.text-detail h3
{
    text-align: center;
}
.one-detail{
    display: flex;
    justify-content: space-around;
    align-items: start;
    margin-top: 3%;
    position: relative;
}
.one-detail .one-detail-one
{
    flex-basis: 45%;
    height: 300px;
    padding-left: 5%;
    position: relative;
}
.one-detail .one-detail-one .one-img
{
    width: 350px;
    height: 350px;
    object-fit: cover;
    position: relative;
}
.one-detail .one-detail-one .one-img img
{
    width: 100%;
    height: 100%;
    object-fit: cover;
    position: absolute;
    left: 5%;
}
.one-detail .one-detail-two
{
    flex-basis: 45%;
    padding-top: 1%;
    justify-content: start;
}
.one-detail .one-detail-two .text
{
    text-align: start;
    font-size: 14px;
    color: #191919;
    width:350px;
    margin-bottom: 10%;
}
.one-detail .one-detail-two label
{
    display: block;
    text-align: left;
}
.one-detail .one-detail-two .inline-one
{
    display: flex;
    justify-content: space-evenly;
    margin: 2% 0;
}
.one-detail .one-detail-two .inline-two
{
    display: flex;
    justify-content: flex-start;
    align-items: center;
}
.one-detail .one-detail-two select
{
    width: 70%;
    text-align: start;
    border: none;
    padding: 10px 18px;
}
.one-detail .one-detail-two span
{
    display: inline-block;
    flex: 1 1 40%;
    text-align: end;
    font-size: 24px;
    padding-right: 8%;
    font-weight: 700;
} 
.one-detail .one-detail-two input[type="number"]
{
    width: 15%;
    padding: 5px 8px;
    border: none;
}
.one-detail .one-detail-two button
{
    width: 35%;
    padding: 7px 8px;
    border: none;
    color: #CEE5D0;
    background-color: #191919;
    font-size: 14px;
}
.one-detail .one-detail-two .find
{
    margin-top: 19px;
    margin-left: 15%;
    padding: 7px 12px;
    text-transform: uppercase;
    cursor: pointer;
    color: #777;
}
@media (min-width: 300px) and (max-width: 700px)
{
    .detail
{
    width: 100%;
    position: relative;
    background: linear-gradient(180deg, #ffff 40%, #efecec 60%);
}
.pva-back
{
    position: absolute;
    left: 5%;
}
.pva-back button
{
    padding: 3px 6px;
    border:none;
    background-color: #000;
    color: #efecec;
}
.one-detail{
    position: relative;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
}
.one-detail .one-detail-one
{
    flex-basis: none;
    height: 320px;
    padding-left: 0%;
    position: relative;
}
.one-detail .one-detail-one .one-img
{
    width: 300px;
    height: 300px;
    object-fit: cover;
    position: relative;
}
.one-detail .one-detail-one .one-img img
{
    position: absolute;
    left: 1%;
    padding-bottom: 5%;
}
.one-detail .one-detail-two
{
    flex-basis: none;
    padding-top: 1%;
    padding-left: 1%;
    justify-content: start;
}
.one-detail .one-detail-two
{
    flex-basis: 45%;
    padding-top: 1%;
    padding-left: 15%;
    padding-right: 15%;
    justify-content: start;
}
.one-detail .one-detail-two .text
{
    text-align: center;
    font-size: 12px;
    color: #191919;
    width:250px;
    margin-bottom: 10%;
}
.one-detail .one-detail-two label
{
    font-size: 12px;
}
.one-detail .one-detail-two .inline-one
{
    display: flex;
    justify-content: space-evenly;
    margin: 2% 0;
}
.one-detail .one-detail-two select
{
    width: 50%;
    font-size: 12px;
}
.one-detail .one-detail-two span
{
    font-size: 14px;
    padding-top: 2%;
} 
.one-detail .one-detail-two button
{
    width: 35%;
    font-size: 10px;
    padding: 8px 5px;
}
.one-detail .one-detail-two .find
{
    margin-top: 19px;
    margin-left: 15%;
    padding: 7px 12px;
    text-transform: uppercase;
    cursor: pointer;
    color: #777;
    font-size: 10px;
}
}
@media (min-width: 700px) and (max-width: 1024px) {
.detail
{
    width: 100%;
    position: relative;
}
.pva-back
{
    position: absolute;
    left: 2%;
}
.one-detail{
    position: relative;
}
.one-detail .one-detail-one
{
    flex-basis: 45%;
    height: 320px;
    padding-left: 5%;
    position: relative;
}
.one-detail .one-detail-one .one-img
{
    width: 290px;
    height: 320px;
    object-fit: cover;
    position: relative;
}
.one-detail .one-detail-one .one-img img
{
    position: absolute;
    left: 4%;
}
.one-detail .one-detail-two
{
    flex-basis: 45%;
    padding-top: 1%;
    padding-left: 10%;
    padding-right: 5%;
    justify-content: start;
}
.one-detail .one-detail-two .text
{
    text-align: start;
    font-size: 14px;
    color: #191919;
    width:300px;
    margin-bottom: 10%;
}

}
</style>