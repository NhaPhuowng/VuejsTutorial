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
            },
            {
                thumb:"./assets/p2.png",
                name: 'Product 2',
                price: 100,
            },
            {
                thumb:"./assets/p3.png",
                name: 'Product 3',
                price: 100,
            },
        ]
    };
  },
  methods: {},
});

app.mount('#contact')
