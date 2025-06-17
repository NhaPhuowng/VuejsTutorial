const app = Vue.createApp({
  data() {
    return {
      x: 0,
      y: 0,
    };
  },
  methods: {
    onLogEvent(Event, newX, newY) {
      console.log("Mouse event: ", event);
      this.x = newX;
      this.y = newY;
    },
    onMouseMove(event) {
      console.log("Mouse move event: ", event);
      this.x = event.offsetX;
      this.y = event.offsetY;
    },
  },
});

app.mounted("#contact");
