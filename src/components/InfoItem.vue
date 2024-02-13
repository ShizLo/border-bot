<template>
  <v-card elevation="1" class="flex-1-1">
    <div class="item bg-grey-lighten-5 py-3 pr-3 pl-4">
      <i>
        <slot name="icon"></slot>
      </i>
      <div class="details ml-1">
        <h3 class="text-black ml-1 text-md-h5 text-lg-h5 text-xl-h5">
          <slot name="heading"></slot>
        </h3>
      </div>
    </div>
    <v-divider color="blue-darken-4" class="pb-2"></v-divider>
    <div class="px-3 mb-2">
      <slot></slot>
    </div>
  </v-card>
</template>

<style scoped>
.item {
  /* margin: 1.5rem 0px; */
  display: flex;
  position: relative;
  @media (max-width: 767.98px) {
    /* margin-top: 1.5rem; */
    /* margin-bottom: 0.5rem; */
  }
}
.hero {
  background: url("../assets/bkinfo.png");
  background-size: no-repeat;
  background-position: center;
  background-size: cover;
}
.details {
  display: flex;
  width: 100%;
  margin: auto;
  @media (min-width: 1024px) {
  }

  /* flex: 1; */
}

i {
  display: flex;
  place-items: center;
  place-content: center;
  width: 32px;
  height: 32px;
}

h3 {
  font-size: 1.2rem;
  font-weight: 500;
}

@media (min-width: 1024px) {
  /* .item {
    margin-top: 0;
    padding: 0.4rem 0 1rem calc(var(--section-gap) / 2);
  } */

  i {
    top: calc(50% - 25px);
    /* left: -26px; */
    /* position: absolute; */
    /* border: 1px solid var(--color-border); */
    background: var(--color-background);
    border-radius: 8px;
    width: 50px;
    height: 50px;
  }

  .item:before {
    content: " ";
    border-left: 1px solid var(--color-border);
    position: absolute;
    left: 0;
    bottom: calc(50% + 25px);
    height: calc(50% - 25px);
  }

  .item:after {
    content: " ";
    border-left: 1px solid var(--color-border);
    position: absolute;
    left: 0;
    top: calc(50% + 25px);
    height: calc(50% - 25px);
  }

  .item:first-of-type:before {
    display: none;
  }

  .item:last-of-type:after {
    display: none;
  }
}
</style>
