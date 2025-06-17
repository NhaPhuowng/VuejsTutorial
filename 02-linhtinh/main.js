const app = Vue.createApp({
  data() {
    return {
        urlTest: 'https://vuejs.org/',
        classTest: 'text-red',
        products: [
            {
                thumb:"./assets/p1.png",
                name: 'Product 1',
                price: 100,
                isCart: false,
            },
            {
                thumb:"./assets/p2.png",
                name: 'Product 2',
                price: 180,
                isCart: false,
            },
            {
                thumb:"./assets/p3.png",
                name: 'Product 3',
                price: 120,
                isCart: true,
            },
        ]
    };
  },
  methods: {
    onToggleCart(event, product) {
      product.isCart = !product.isCart
    }
  },
  computed:{
    filterProducts() {
        return this.products.filter(product => product.price < 160)  
    }
  }, 
});

app.mount('#contact')
