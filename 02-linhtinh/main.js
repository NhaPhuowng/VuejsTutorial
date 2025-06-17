const app = Vue.createApp({
  data() {
    return {
        products: [
            {
                name: 'Product 1',
                price: 100,
            },
            {
                name: 'Product 2',
                price: 100,
            },
            {
                name: 'Product 3',
                price: 100,
            },
        ]
    };
  },
  methods: {},
});

app.mount('#contact')
