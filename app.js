/**
 * can't use template and data() together
 * v-on:click is the same as @click
 * v-bind:src is the same as :src
 * Attrbute bindling like -> :src, :alt
 */

const app = Vue.createApp({
  data() {
    return {
      show: true,
      name: "Bassem Essam",
      age: 27,
      title: "Front end developer",
      x: 0,
      y: 0,
      books: [
        {
          title: "AB 1",
          desc: "test 1",
          src: "https://images.pexels.com/photos/13765467/pexels-photo-13765467.jpeg?auto=compress&cs=tinysrgb&w=160&lazy=load",
          isFav: true,
        },
        {
          title: "AB 2",
          desc: "test 2",
          src: "https://images.pexels.com/photos/13765467/pexels-photo-13765467.jpeg?auto=compress&cs=tinysrgb&w=160&lazy=load",
          isFav: false,
        },
      ],
    };
  },
  methods: {
    updateTitle(newTitle) {
      this.title = newTitle;
    },
    toggle() {
      this.show = !this.show;
    },
    handleEvent(e, data) {
      console.log(e, e.type);
      if (data) console.log(data);
    },
    handleMouseMove(e) {
      this.x = e.offsetX;
      this.y = e.offsetY;
    },
    toggleFav(book) {
      book.isFav = !book.isFav;
    },
  },
  computed: {
    filteredBook() {
      return this.books.filter((book) => book.isFav);
    },
  },
});

app.mount("#app");
