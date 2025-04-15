<script setup>
import { RouterView } from "vue-router";
</script>

<template>
  <RouterView />
  <footer class="footer">
    <div class="footer__content _container">
      <div class="footer__copy">© 2025</div>
    </div>
  </footer>
</template>

<style lang="scss" scoped>
.header {
  position: relative;
  z-index: 100;
  &__content {
    margin: 0 auto;
    max-width: 1052px;
  }

  &__menu {
    height: 100px;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    padding: 0px 0px;
  }
}

.menu {
  &__icon {
  }

  &__body {
    @media (max-width: 767.98px) {
      transform: translate(0px, -100%);
      transition: transform 0.8s ease 0s;
      position: fixed;
      width: 100%;
      height: 100%;
      top: 0;
      left: 0;
      overflow: auto;
      padding: 70px 10px 30px 10px;
      background-color: rgba(255, 255, 255, 0.97);
      &._active {
        transform: translate(0px, 0%);
      }
    }
  }
  &__list {
    li {
      margin: 0 0 0 0;
      padding: 0px 0px;
      &:last-child {
        margin: 0px 0px 0px 0px;
      }
      @media (max-width: 767.98px) {
        &::after {
          content: "";
          display: block;
          height: 1px;
          background: #424245;
        }
      }
    }
    @media (min-width: 767.98px) {
      display: flex;
      li {
        margin: 0 33px 0 0;
      }
    }
  }
  &__list::before {
    content: "";
    display: block;
    // position:absolute;
    height: 1px;
    background: #424245;
  }
  &__link {
    font-size: 17px;
    font-weight: 400;
    transition: color 0.3s ease 0s;
    text-decoration: none;
    color: #000;
    &._active {
      color: greenyellow;
    }
    @media (min-width: 991.98px) {
      &:hover {
        color: green;
      }
    }
    @media (max-width: 767.98px) {
      font-size: 17px;
      display: flex;
      height: 44px;
      // justify-content: center;
      align-items: center;
      // text-align: center;
    }
  }
}

.icon-menu {
  display: none;
  @media (max-width: 767.98px) {
    // display: block;
    display: none;
    position: relative;
    width: 30px;
    height: 18px;
    cursor: pointer;
    z-index: 5;
    span {
      transition: all 0.3s ease 0s;
      top: calc(50% - 1px);
      left: 0px;
      position: absolute;
      width: 100%;
      height: 2px;
      background-color: #000;
      &:first-child {
        top: 0px;
      }
      &:last-child {
        top: auto;
        bottom: 0px;
      }
    }
    &._active {
      span {
        transform: scale(0);
        &:first-child {
          transform: rotate(-45deg);
          top: calc(50% - 1px);
        }
        &:last-child {
          transform: rotate(45deg);
          bottom: calc(50% - 1px);
        }
      }
    }
  }
}

.logo {
  display: none;
  @media (max-width: 767.98px) {
    // position: absolute;
    // top: 0;
    // left: 45%;
    display: block;
    /* margin: 0 auto 2rem; */
    margin: 0 auto;
  }
}
.menu_logo {
  display: none;
  @media (max-width: 767.98px) {
    position: absolute;
    top: 1rem;
    left: 45%;
    display: block;
    margin: 0 auto;
  }
}

.footer {
  // .footer__content
  text-align: center;
  padding: 30px 0 10px 0px;
  @media (max-width: 767.98px) {
    padding: 30px 0px 0px 0px;
    padding-bottom: 15px;
  }
  &__message {
    margin: 0px 0px 20px 0px;
  }

  // .footer__social

  &__social {
    margin: 0px 0px 25px 0px;
  }

  // .footer__copy

  &__copy {
  }
}
.social {
  // .social__item
  display: flex;
  justify-content: center;
  align-items: center;
  // .social__item
  &__item {
    transition: color 0.3s ease 0s;
    margin: 0px 17px;
    font-size: 30px;
    color: inherit;
    @media (min-width: 991.98px) {
      &:hover {
        color: green;
      }
    }
  }
}
</style>
