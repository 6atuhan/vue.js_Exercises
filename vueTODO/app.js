const app = Vue.createApp({
  data() {
    return {
      todoListItems: [],
      todoItemAdd: "",
      removeBackİtem: "",
      sayac: 0,
      todidListItems: [],
    };
  },
  methods: {
    doneList(removeİtem) {
      this.todidListItems.push(removeİtem);
      this.todoListItems = this.todoListItems.filter(
        (x) => !this.todidListItems.includes(x)
      );
    },
    doList(removeBackİtem) {
      this.todoListItems.push(removeBackİtem);
      this.todidListItems = this.todidListItems.filter(
        (x) => !this.todoListItems.includes(x)
      );
    },
    ekle(event) {
      if (event.target.value != "") {
        this.todoListItems.push({
          id: this.sayac,
          text: event.target.value,
          checked: false,
        });
        this.sayac++;
        this.todoItemAdd = "";
      }
    },
  },
}).mount("#app");
