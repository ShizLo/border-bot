<template>
  <div class="greetings">
    <v-card class="pb-3 hero" elevation="0">
      <div class="d-flex justify-center pt-2">
        <img
          alt="Работа по контракту"
          class="logo"
          src="@/assets/IMG_2619.png"
          width="100"
          height="100"
        />
      </div>

      <h1
        class="text-black text-center font-weight-black text-h5 text-md-h4 text-lg-h4 text-xl-h4 mt-2"
      >
        {{ msg }}
      </h1>
      <h3 class="text-center text-black font-weight-black text-subtitle-1">
        Набор кандидатов на контракт
      </h3>
      <div class="d-flex justify-center pt-1 pb-2">
        <v-icon>mdi-map-marker-outline</v-icon>
        <p class="ml-2 text-black">г. Сосновый Бор, ул. Советская, 63</p>
      </div>
      <div class="px-3">
        <v-btn
          block
          outlined
          variant="flat"
          color="indigo-darken-3"
          @click="test()"
        >
          Подать заявку
        </v-btn>
      </div>
    </v-card>
  </div>
</template>

<style style="scss" scoped>
.hero {
  background: url("../assets/hback.png");
  background-size: no-repeat;
  background-position: center;
  background-size: cover;
}
.intro {
  text-align: center;
  padding-top: 10px;
  line-height: 1.4;
}
h1 {
  font-weight: 500;
  font-size: rem;
  position: relative;
  @media (max-width: 767.98px) {
    /* padding-top: 20px; */
    /* padding-bottom: 5px; */
  }
}

h3 {
  font-size: 1.2rem;
  /* padding-top: 20px; */
  line-height: 1.4;
  color: hsla(160, 100%, 37%, 1);
}

.greetings h1,
.greetings h3 {
  text-align: center;
}

@media (min-width: 1024px) {
  .greetings h1,
  .greetings h3 {
    text-align: left;
  }
}
</style>
<script>
export default {
  data() {
    return {};
  },
  props: {
    msg: String,
  },
  methods: {
    test() {
      window.scrollTo(
        0,
        document.body.scrollHeight || document.documentElement.scrollHeight
      );
    },
  },
};
</script>
