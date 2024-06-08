<script setup>
import InfoItem from "../components/InfoItem.vue";
import Header from "../components/Header.vue";
import ToolingIcon from "../components/icons/IconTooling.vue";
import EcosystemIcon from "../components/icons/IconEcosystem.vue";
import SliderInfo from "../components/SliderInfo.vue";
import WorkIcon from "../components/icons/IconWork.vue";
import CaseIcon from "../components/icons/IconCase.vue";
</script>

<template>
  <v-card class="mt-3">
    <v-carousel
      height="344"
      :show-arrows="false"
      cycle
      interval="20000"
      hide-delimiter-background
      color="blue"
    >
      <v-carousel-item>
        <v-card elevation="0" class="flex-1-1">
          <div class="item bg-grey-lighten-5 py-3 pr-3 pl-4 d-flex">
            <i>
              <WorkIcon />
            </i>
            <div class="details ml-1">
              <h3 class="text-black ml-1 text-md-h5 text-lg-h5 text-xl-h5">
                Направления деятельности
              </h3>
            </div>
          </div>
          <v-divider color="blue-darken-4" class="pb-2"></v-divider>
          <div class="px-3 mb-2">
            <div class="px-md-2">
              <p>
                Страны запада наращивают военное присутствие у Российских
                границ. В ответ на их недружественные шаги руководство страны
                приняло решение усилить наши рубежи, в связи с этим, ПУ ФСБ
                России по г. Санкт-Петербургу и Ленинградской области, объявляет
                набор кандидатов на военную службу по контракту в подразделения
                границы.
                <span class="font-weight-medium"
                  >Участие в СВО только по желанию.</span
                >
              </p>
            </div>
          </div>
        </v-card>
      </v-carousel-item>
      <v-carousel-item>
        <v-card elevation="0" class="flex-1-1">
          <div class="item bg-grey-lighten-5 py-3 pr-3 pl-4 d-flex">
            <i>
              <v-icon color="green-darken-4" size="large"
                >mdi-account-tie-hat</v-icon
              >
            </i>
            <div class="details ml-1">
              <h3 class="text-black ml-1 text-md-h5 text-lg-h5 text-xl-h5">
                Вакансии по контракту
              </h3>
            </div>
          </div>
          <v-divider color="blue-darken-4" class="pb-2"></v-divider>
          <div class="px-3 mb-2">
            <div class="px-md-2">
              <li>Контролер подразделения пограничного контроля.</li>
              <li>Специалист плавсостава.</li>
              <li>Специалист радиотехнического поста.</li>
              <li>Инструктор РПГ.</li>
              <li>Вожатый служебной собаки (кинолог).</li>
              <li>Водитель.</li>
              <li>Повар.</li>
              <li>Фельдшер.</li>
            </div>
          </div>
        </v-card>
      </v-carousel-item>
      <v-carousel-item>
        <v-card elevation="0" class="flex-1-1">
          <div class="item bg-grey-lighten-5 py-3 pr-3 pl-4 d-flex">
            <i>
              <ToolingIcon />
            </i>
            <div class="details ml-1">
              <h3 class="text-black ml-1 text-md-h5 text-lg-h5 text-xl-h5">
                Условия контракта
              </h3>
            </div>
          </div>
          <v-divider color="blue-darken-4" class="pb-2"></v-divider>
          <div class="px-3 mb-2">
            <div class="px-md-2">
              <li>Возраст от 18 до 40 лет.</li>
              <li>Гражданство РФ.</li>
              <li>Удовлетворительный уровнь физического развития.</li>
              <li>Образование: среднее (11 классов) или средне-специальное.</li>
              <li>
                Отсутствие близких родственников постоянно проживающих за
                границей.
              </li>
              <li>Отсутствие судимости.</li>
            </div>
          </div>
        </v-card>
      </v-carousel-item>
      <v-carousel-item>
        <v-card elevation="0" class="flex-1-1">
          <div class="item bg-grey-lighten-5 py-3 pr-3 pl-4 d-flex">
            <i>
              <EcosystemIcon />
            </i>
            <div class="details ml-1">
              <h3 class="text-black ml-1 text-md-h5 text-lg-h5 text-xl-h5">
                Льготы для военнослужащих
              </h3>
            </div>
          </div>
          <v-divider color="blue-darken-4" class="pb-2"></v-divider>
          <div class="px-3 mb-2">
            <div class="px-md-2">
              <li>Денежное довольствие до 85000 руб.</li>
              <li>Ежегодная материальная помощь.</li>
              <li>Бесплантное медицинское сопровождение.</li>
              <li>Страхование жизни.</li>
              <li>Вещевое обеспечение.</li>
              <li>Оплачиваемый отпуск до 60 суток.</li>
              <li>Предоставление служебного жилья.</li>
              <li>Военная ипотека (НИС).</li>
              <li>Выход на пенсию через 13 лет.</li>
            </div>
          </div>
        </v-card>
      </v-carousel-item>
    </v-carousel>
  </v-card>
</template>

<style scoped>
h3 {
  font-size: 1.2rem;
  font-weight: 500;
}
.item {
  /* margin: 1.5rem 0px; */
  display: flex;
  position: relative;
  @media (max-width: 767.98px) {
    /* margin-top: 1.5rem; */
    /* margin-bottom: 0.5rem; */
  }
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
</style>
<script></script>
