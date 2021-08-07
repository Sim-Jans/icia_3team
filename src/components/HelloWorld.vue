<template>
  <div class="hello">
    <button @click="test">서버통신테스트</button>
    {{ text }}
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "HelloWorld",
  props: {
    msg: String,
  },
  data() {
    return {
      text: "",
    };
  },
  methods: {
    test() {
      axios
        .get("http://localhost:8083/test")
        .then((res) => {
          this.text = res.data;
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
};
</script>

<style scoped></style>
