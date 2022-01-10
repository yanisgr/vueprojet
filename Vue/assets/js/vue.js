// data
const products = [
  { id: 1, description: "iphone 13 pro max", price: 1700, img: 'https://c1.lestechnophiles.com/images.frandroid.com/wp-content/uploads/2021/09/apple-iphone-13-pro-frandroid-2021.png?resize=580,580'},
  { id: 2, description: 'iphone 7', price: 100, img: 'https://allomerci.com/wp-content/uploads/2021/01/a42bc66b-c85c-4ac1-bb23-2df508157720_1.20c286c2e3c55dc3eebca669420ee218.jpeg'},
  { id: 3, description: 'ipad air 2020', price: 1200, img: 'https://images.frandroid.com/wp-content/uploads/2020/09/apple-ipad-air-2020-frandroid.png'},
  { id: 4, description: 'ipad 5', price: 500, img: 'https://m.media-amazon.com/images/I/81gd3uyxc3L._AC_SX522_.jpg'},
  { id: 5, description: 'iphone xs', price: 650, img: 'https://c2.lestechnophiles.com/images.frandroid.com/wp-content/uploads/2019/04/iphone-xs-2018.png?resize=580,580'},
  { id: 6, description: 'iphone 12', price: 900, img: 'https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone-12-purple-select-2021?wid=470&hei=556&fmt=jpeg&qlt=95&.v=1617130317000'},
  { id: 7, description: 'iphone xr ', price: 45, img: 'https://images.frandroid.com/wp-content/uploads/2019/04/iphone-xr-2018.png'},
  { id: 8, description: 'accesoire iphone', price: 50, img: 'https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1549577035-apple_mmx62am_a_lightning_to_3_5mm_headphone_1474046523000_1280795.jpg?crop=1.00xw:1.00xh;0,0&resize=480:*'},
  { id: 9, description: 'ipad 2021', price: 1300, img: 'https://www.allotech-dz.com/wp-content/uploads/2020/05/ipad_pro_2020_11_128gb_wifi_gris_01_m.jpg'},
  { id: 10, description: 'adaptateur', price: 30, img: 'https://advancedoffice.dz/media/catalog/product/cache/1/image/17149bac2779a7bccf629fa0b9379a14/i/m/image.jpeg_9326.jpg'},
  { id: 11, description: 'capble chargeur', price: 41, img: 'https://static.fnac-static.com/multimedia/Images/C1/C1/C5/86/8832449-1505-1540-1/tsp20180828204622/Cable-de-chargeur-USB-pour-iPhone-4-et-iPad-1ere-generation.jpg#aaec2915-f973-4037-89f1-81af80fd5a5e'},
  { id: 12, description: 'coque iphone 12promax', price: 20, img: 'https://image.darty.com/telephonie/accessoire_pour_iphone-housse_protection_pour_iphone/housse_pour_iphone/bbc_cq_sil_ip20pm_trsp_t2010214862210A_165440626.jpg'},
  { id: 13, description: 'iphone 6s', price: 60, img: 'https://static.fnac-static.com/multimedia/Images/FR/NR/31/7a/86/8813105/1540-1/tsp20170720120316/APPLE-IPHONE-6S-32GB-SILVER.jpg'},
  { id: 14, description: 'ipad mini', price: 540, img: 'https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/ipad-mini-select-wifi-purple-202109_FMT_WHH?wid=940&hei=1112&fmt=png-alpha&.v=1629840706000'},
  { id: 15, description: 'pochette ipad', price: 60, img: 'https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/MM6M3?wid=532&hei=582&fmt=png-alpha&.v=1630022917000'},

];

const Home = {
  template: '#home',
  name: 'Home',
  data: () => {
    return {
      products,
      searchKey: '',
      liked: [],
      cart: []
    }
  },
  computed: {
    filteredList(){
      return this.products.filter((product) => {
        return product.description.toLowerCase().includes(this.searchKey.toLowerCase());
      })
    },
    getLikeCookie(){
      let cookieValue = JSON.parse($cookies.get('like'));
      cookieValue == null ? this.liked = [] : this.liked = cookieValue
    },
    cartTotalAmount(){
      let total = 0;
      for (let item in this.cart){
        total = total + (this.cart[item].quantity * this.cart[item].price)
      }
      return total;
    },
    itemTotalAmount(){
      let itemTotal = 0;
      for (let item in this.cart){
        itemTotal = itemTotal + (this.cart[item].quantity);          
      }
      return itemTotal;
    }
  },
  methods: {
    setLikeCookie(){
      document.addEventListener('input', () => {
        setTimeout(() => {
          $cookies.set('like', JSON.stringify(this.liked));
        }, 300);
      })
    },
    addToCart(product){
      // check if already in array
      for (let i = 0; i < this.cart.length; i++){
        if (this.cart[i].id === product.id) {
          return this.cart[i].quantity++
        }
      }
      this.cart.push({
        id: product.id,
        img: product.img,
        description: product.description,
        price: product.price,
        quantity: 1
      })
    },
    cartPlusOne(product){
      product.quantity = product.quantity + 1;
    },
    cartMinusOne(product, id){
      if (product.quantity == 1) {
        this.cartRemoveItem(id);
      } else {
        product.quantity = product.quantity -1;
      }
    },
    cartRemoveItem(id){
      this.$delete(this.cart, id)
    }
  },
  mounted: () => {
    this.getLikeCookie;
  }
}
const Vente = {
  template: '<h1> vente<h1>',
  name: 'UserSettings'
}
const Actualite = {
  template: '<h1>actualite</h1>',
  name: 'WishList'
}
const Reparation = {
  template: '<h1>reparation</h1>',
  name: 'ShoppingCart'
}


// router
const router = new VueRouter({
  routes: [
    { path: '/', component: Home, name: 'Home' },
    { path: '/Vente', component: Vente, name : 'Vente' },
    { path: '/Actualite', component: Actualite, name: 'Actualite' },
    { path: '/Reparation', component: Reparation, name: 'Reparation' },
  ]
})

const vue = new Vue({
  router
}).$mount('#app');
