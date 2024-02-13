<script setup>
import { RouterLink, RouterView } from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'
</script>

<template>
  <div class="header">
    <div class="header__content">
      <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="40" height="40" />
      <div class="header__menu menu">
        <div class="menu__icon icon-menu">
          <span></span>
          <span></span>
          <span></span>
        </div>
        <nav class="menu__body">
          <img alt="Vue logo" class="menu_logo" src="@/assets/logo.svg" width="40" height="40" />
          <ul role="list" class="menu__list">
            <li>
              <RouterLink class="menu__link" to="/">Главная</RouterLink>
            </li>
            <li>
              <RouterLink class="menu__link" to="/about">О службе</RouterLink>
            </li>
            <li>
              <RouterLink class="menu__link" to="/documents">Нормативные акты</RouterLink>
            </li>
            <li><a href="" class="menu__link">Трудоустройство</a></li>
            <li><a href="" class="menu__link">Контакты</a></li>
          </ul>
        </nav>
      </div>
    </div>
  </div>
  <div class="wrapper">
    <HelloWorld msg="Служба в городе Сосновом Бору" />
  </div>

  <RouterView />
</template>

<style lang="scss" scoped>
.header {
  position: relative;
  z-index: 100;
  &__content {
    margin: 0 auto;
    max-width: 1052px;

    //todo прилипание работает не правильно
  }

  &__menu {
    height: 82px;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    padding: 0px 0px;
    @media (max-width: 767.98px) {
      height: 40px;
    }
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
          content: '';
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
    content: '';
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
    display: block;
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

// header {
//   line-height: 1.5;
//   max-height: 100vh;
// }

.logo {
  display: none;
  @media (max-width: 767.98px) {
    position: absolute;
    top: 0;
    left: 45%;
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

// nav {
//   width: 100%;
//   font-size: 14px;
//   text-align: center;
//   margin-top: 2rem;
// }

// nav a.router-link-exact-active {
//   color: var(--color-text);
// }

// nav a.router-link-exact-active:hover {
//   background-color: transparent;
// }

// nav a {
//   display: inline-block;
//   padding: 0 1rem;
//   border-left: 1px solid var(--color-border);
// }

// nav a:first-of-type {
//   border: 0;
// }

// @media (min-width: 1024px) {
//   header {
//     display: flex;
//     place-items: center;
//     padding-right: calc(var(--section-gap) / 2);
//   }

//   .logo {
//     margin: 0 2rem 0 0;
//   }

//   header .wrapper {
//     display: flex;
//     place-items: flex-start;
//     flex-wrap: wrap;
//   }

//   nav {
//     text-align: left;
//     margin-left: -1rem;
//     font-size: 1rem;

//     padding: 1rem 0;
//     margin-top: 1rem;
//   }
// }
</style>
