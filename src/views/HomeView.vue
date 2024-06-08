<script setup>
import InfoItem from "../components/InfoItem.vue";
import Header from "../components/Header.vue";
import ToolingIcon from "../components/icons/IconTooling.vue";
import EcosystemIcon from "../components/icons/IconEcosystem.vue";
import SliderInfo from "../components/SliderInfo.vue";
import VideoInfo from "../components/VideoInfo.vue";
import WorkIcon from "../components/icons/IconWork.vue";
import CaseIcon from "../components/icons/IconCase.vue";
</script>

<template>
  <v-card>
    <Header msg="Служба в Сосновом Бору"></Header>
  </v-card>
  <SliderInfo class="d-md-none d-lg-none d-xl-none d-xxl-none" />
  <VideoInfo class="d-sm-none d-md-none d-lg-none d-xl-none d-xxl-none" />
  <v-row
    class="d-none d-sm-flex d-md-flex d-lg-flex d-xl-flex d-xxl-flex mt-4 flex-wrap flex-sm-wrap flex-md-nowrap"
  >
    <v-col class="d-flex flex-1-1 py-0 mt-4" md="6">
      <InfoItem>
        <template #icon>
          <WorkIcon />
        </template>
        <template #heading>Направления деятельности </template>
        <div class="px-md-2">
          <p>
            Страны запада наращивают военное присутствие у Российских границ. В
            ответ на их недружественные шаги руководство страны приняло решение
            усилить наши рубежи, в связи с этим, ПУ ФСБ России по г.
            Санкт-Петербургу и Ленинградской области, объявляет набор кандидатов
            на военную службу по контракту в подразделения границы. Участие в
            СВО только по желанию. Сотрудники управления несут службу на
            воздушных, морских и сухопутных рубежах нашей Родины с Финляндской и
            Эстонской республиками общей протяженностью более 400 километров.
          </p>
          <!-- <p>, большая ее
        часть - 237 километров проходит по морю, около 80 километров приходятся на речной и озерные
        участки. Государственная граница - это важнейший, ключевой рубеж обеспечения безопасности
        страны и она должна быть надежно прикрыта, а попытки ее нарушить присекаться быстро и
        эффективно.</p> -->
        </div>
      </InfoItem>
    </v-col>
    <v-col class="d-flex flex-1-1 py-0 mt-4" xs="12" md="6">
      <InfoItem>
        <template #icon>
          <v-icon color="green-darken-4" size="large"
            >mdi-account-tie-hat</v-icon
          >
        </template>
        <template #heading>Вакансии по контракту</template>
        <div class="px-md-2">
          <li>Контролер подразделения пограничного контроля.</li>
          <li>Специалист плавсостава береговой охраны.</li>
          <li>Специалист радиотехнического поста.</li>
          <li>Инструктор разведывательно-поисковой группы.</li>
          <li>Вожатый служебной собаки (кинолог).</li>
          <li>Водитель.</li>
          <li>Повар.</li>
          <li>Фельдшер.</li>
        </div>
      </InfoItem>
    </v-col>
  </v-row>
  <v-row
    class="d-none d-sm-flex d-md-flex d-lg-flex d-xl-flex d-xxl-flex flex-wrap flex-sm-wrap flex-md-nowrap my-4 pt-0"
  >
    <v-col class="d-flex flex-1-1 py-0 mt-4" xs="12" md="6">
      <InfoItem>
        <template #icon>
          <ToolingIcon />
        </template>
        <template #heading>Условия контракта</template>
        <div class="px-md-2">
          <!-- <div class="d-flex">
            <div class="align-center d-flex">
              <v-icon size="small">mdi-check</v-icon>
            </div> 
          <p class="ml-1">Возраст от 18 лет. Пол значения не имеет.</p>
          </div> -->
          <li>Возраст от 18 до 40 лет.</li>
          <li>Гражданство РФ.</li>
          <li>Удовлетворительный уровнь физического развития.</li>
          <li>
            Образование: среднее (11 классов) или средне-специальное (колледж,
            техникум).
          </li>
          <li>
            Отсутствие близких родственников постоянно проживающих за границей,
            а также состоящих на учете в психиатрических учреждениях (имеющих
            психические заболевания).
          </li>
          <li>Отсутствие судимости.</li>
        </div>
      </InfoItem>
    </v-col>

    <v-col class="d-flex flex-1-1 py-0 mt-4" xs="12" md="6">
      <InfoItem>
        <template #icon>
          <EcosystemIcon />
        </template>
        <template #heading>Льготы для военнослужащих</template>
        <div class="px-md-2">
          <li>Денежное довольствие до <i>85000</i> руб.</li>
          <li>Ежегодная материальная помощь.</li>
          <li>Бесплантное медицинское сопровождение.</li>
          <li>Страхование жизни.</li>
          <li>Вещевое обеспечение.</li>
          <li>Оплачиваемый отпуск до <i>60</i> суток.</li>
          <li>Предоставление служебного жилья.</li>
          <li>Военная ипотека.</li>
        </div>
      </InfoItem>
    </v-col>
  </v-row>
  <v-stepper v-model="stepperItem" min-height="400" hide-actions>
    <div class="d-flex py-2 bg-grey-lighten-5">
      <div class="d-flex align-center pl-4"><CaseIcon /></div>
      <h3 class="ditails text-black pl-3 py-2 text-md-h5 text-lg-h5 text-xl-h5">
        Порядок трудоустройства
      </h3>
    </div>
    <v-stepper-header>
      <v-stepper-item
        title="Опрос"
        subtitle="10 мин"
        editable
        color="green"
        class="py-4"
      ></v-stepper-item>
      <v-divider class="px-5"></v-divider>
      <v-stepper-item
        title="Контакты"
        :editable="!accessStep"
        :complete="!accessStep"
        color="green"
        :error="accessStep"
        error-icon="mdi-lock-outline"
        class="py-4"
      ></v-stepper-item>
      <v-divider class="px-5"></v-divider>

      <v-stepper-item
        title="Документы"
        :editable="!accessStep"
        :complete="!accessStep"
        color="green"
        :error="accessStep"
        error-icon="mdi-lock-outline"
        class="py-4"
      ></v-stepper-item>
      <v-divider class="px-5"></v-divider>
      <v-stepper-item
        title="Собеседование"
        :editable="!accessStep"
        :complete="!accessStep"
        color="green"
        :error="accessStep"
        error-icon="mdi-lock-outline"
        class="py-4"
      ></v-stepper-item>
      <v-divider class="px-5"></v-divider>
      <v-stepper-item
        title="ВВК и ПФО"
        :editable="!accessStep"
        :complete="!accessStep"
        color="green"
        :error="accessStep"
        error-icon="mdi-lock-outline"
        class="py-4"
      ></v-stepper-item>
    </v-stepper-header>
    <v-stepper-window>
      <v-stepper-window-item value="0">
        <v-card elevation="0" class="px-md-2">
          <h3 class="pb-4 pt-2">Порядок заключения контракта</h3>
          <v-divider></v-divider>
          <li class="pt-2">Опрос.</li>
          <li class="">Беседа с куратором.</li>
          <li class="">Предоставление документов.</li>
          <li class="">Собеседование.</li>
          <li class="pb-2">Прохождение ВВК и ПФО.</li>
          <v-divider class="mb-1"></v-divider>
          <!-- Сделать вертикальное выравнивание блока -->
          <div class="d-flex">
            <v-icon class="d-flex align-self-center" color="red">mdi-alert-circle-outline</v-icon>
            <p class="ml-1 text-caption align-self-center">Переводами из других ведомств не занимаемся.</p>
          </div>

          <v-divider class="mt-1"></v-divider>
          <div class="text-left pt-3 pb-1">
            <v-dialog v-model="dialog2" max-width="380" persistent>
              <template v-slot:activator="{ props: activatorProps2 }">
                <v-btn
                  block
                  outlined
                  variant="flat"
                  color="indigo-darken-3"
                  class="mt-2"
                  :disabled="disableButton"
                  v-bind="activatorProps2"
                  @click="startTest()"
                >
                  Начать опрос
                </v-btn>
              </template>
              <v-card>
                <div class="d-flex">
                  <h3 class="ml-6 py-2 mt-2">
                    Вопрос {{ numberQuestion + 1 }} из {{ questions.length }}
                  </h3>
                  <v-spacer />
                  <v-btn
                    @click="dialog2 = false"
                    icon="$close"
                    variant="text"
                    class="mr-1 mt-1"
                  ></v-btn>
                </div>
                <v-divider color="green"></v-divider>
                <p
                  class="pl-4 pr-2 mb-3 d-flex align-center"
                  style="min-height: 80px"
                >
                  {{ questions[numberQuestion].question }}
                </p>
                <v-divider color="green"></v-divider>
                <v-radio-group
                  class="mx-auto py-1"
                  inline
                  hide-details
                  v-model="radioValue"
                >
                  <v-radio class="pr-4" label="Да" value="Да"></v-radio>

                  <v-radio class="" label="Нет" value="Нет"></v-radio>
                </v-radio-group>
                <v-divider color="green"></v-divider>
                <template v-slot:actions>
                  <v-spacer></v-spacer>
                  <v-btn
                    class="text-none my-1"
                    prepend-icon="mdi-check"
                    variant="text"
                    block
                    border
                    @click="nextQuestion()"
                  >
                    Ответить
                  </v-btn>
                </template>
              </v-card>
            </v-dialog>
          </div>
        </v-card>
      </v-stepper-window-item>
      <v-stepper-window-item value="1">
        <v-card class="px-md-2" elevation="0">
          <h3>Консультация</h3>
          <p class="mb-2">Куратор</p>
          <v-divider></v-divider>
          <div class="mt-3">
            <div class="d-flex justify-center">
              <p class="text-center">
                Для консультации по заполнению и дальнейшей отправке документов
                обращайтесь к куратору в Telegram или VK.
              </p>
            </div>
            <v-divider class="mt-3" />
            <div class="d-flex justify-center mt-6">
              <a
                href="https://t.me/psfsbspb"
                class="social__item icon-telegram"
              ></a>
              <a
                href="https://vk.com/id48935027"
                class="social__item icon-vk"
              ></a>
            </div>
          </div>
        </v-card>
      </v-stepper-window-item>
      <v-stepper-window-item value="2">
        <v-card class="px-md-2" elevation="0"
          ><h3>Первый этап</h3>
          <div class="mb-2">Предоставление документов</div>
          <v-divider></v-divider>
          <div class="d-flex align-center justify-space-between">
            <div>
              <li>Заявление</li>
              <li>Анкета</li>
              <li>Автобиография</li>
            </div>
            <div class="mr-2">
              <div class="pa-4 text-center">
                <v-dialog width="auto" scrollable>
                  <template v-slot:activator="{ props: activatorProps }">
                    <v-btn
                      color="teal-lighten-3"
                      density="comfortable"
                      icon="mdi-download"
                      v-bind="activatorProps"
                    ></v-btn>
                  </template>

                  <template v-slot:default="{ isActive }">
                    <v-card
                      prepend-icon="mdi-earth"
                      title="Скачать бланки документов"
                    >
                      <v-divider class="mt-3"></v-divider>

                      <v-card-text class="px-4" style="height: 300px">
                        <v-divider></v-divider>
                        <div
                          class="d-flex align-center justify-space-between py-3"
                        >
                          <div>1. Заявление</div>
                          <div>
                            <v-btn
                              color="teal-lighten-3"
                              density="comfortable"
                              icon="mdi-download"
                              href="https://psfsbspb.ru/src/Заявление.docx"
                            >
                            </v-btn>
                          </div>
                        </div>
                        <v-divider></v-divider>
                        <div
                          class="d-flex align-center justify-space-between py-3"
                        >
                          <div>2. Анкета</div>
                          <div>
                            <a
                              href="https://psfsbspb.ru/src/Анкета.pdf"
                              download="test"
                              target="_blank"
                            >
                              <v-btn
                                color="teal-lighten-3"
                                density="comfortable"
                                icon="mdi-download"
                              ></v-btn>
                            </a>
                          </div>
                        </div>
                        <v-divider></v-divider>
                        <div
                          class="d-flex align-center justify-space-between py-3"
                        >
                          <div>3. Автобиография</div>
                          <div>
                            <a
                              href="https://psfsbspb.ru/src/Автобиография.docx"
                              download="https://psfsbspb.ru/src/Автобиография.docx"
                            >
                              <v-btn
                                color="teal-lighten-3"
                                density="comfortable"
                                icon="mdi-download"
                              ></v-btn>
                            </a>
                          </div>
                        </div>
                        <v-divider></v-divider>
                      </v-card-text>

                      <v-divider></v-divider>

                      <v-card-actions>
                        <v-spacer></v-spacer>
                        <v-btn
                          text="Закрыть"
                          @click="isActive.value = false"
                        ></v-btn>
                      </v-card-actions>
                    </v-card>
                  </template>
                </v-dialog>
              </div>
            </div>
          </div>
          <v-divider></v-divider>
          <li class="mt-1">Личные документы:</li>
          <li class="pl-4">Свидетельство о рождении</li>
          <li class="pl-4">Паспорт, загранпаспорт (при наличии)</li>
          <li class="pl-4">Военный билет (при наличии)</li>
          <li class="pl-4">Аттестат с табелем оценок</li>
          <li class="pl-4">Диплом об образовании</li>
          <v-divider></v-divider>
          <li class="mt-1">Документы на близких родственников:</li>
          <li class="pl-4">Свидетельство о рождении (смерти)</li>
          <v-tooltip text="">
            <template v-slot:activator="{ props }">
              <li v-bind="props" class="pl-4">
                Свидетельство о заключении брака
              </li>
            </template>
          </v-tooltip>
          <li class="pl-4">Паспорт</li>
        </v-card>
      </v-stepper-window-item>
      <v-stepper-window-item value="3">
        <v-card class="px-md-2" elevation="0">
          <h3>Второй этап</h3>
          <p class="mb-2">Собеседование</p>
          <v-divider></v-divider>
          <div class="mt-2">
            После получения копий документов, осуществляется их проверка
            (процесс занимает около 2 месяцев). По результатам изучения
            предоставленных документов, по месту регистрации или проживания
            (уточняется заранее) кандидату на военную службу будет предложено
            прибыть на первичное собеседование или отказано в трудоустройстве.
          </div>
        </v-card>
      </v-stepper-window-item>
      <v-stepper-window-item value="4">
        <v-card class="px-md-2" elevation="0">
          <h3>Третий этап</h3>
          <p class="mb-2">
            Военно-врачебная комиссия и психофизиологическое обследование
          </p>
          <v-divider></v-divider>
          <p class="mt-2">
            По результатм первичного собеседования, кандидату на военную службу
            по контракту доводятся (не доводятся) даты прохождения ВВК и ПФО.
            После всех проверок и положительных результатов эти проверок
            обговаривается удобное время прибытия к месту службы кандидата для
            подписания контракта.
          </p>
        </v-card>
      </v-stepper-window-item>
    </v-stepper-window>
  </v-stepper>
  <div class="text-center">
    <v-snackbar v-model="snackbar" :timeout="timeout" :color="colorSnack">
      <div class="d-flex justify-center">{{ textSnackBar }}</div>
    </v-snackbar>
  </div>
</template>

<style lang="scss" scoped>
h3 {
  font-size: 1.2rem;
  font-weight: 500;
}
.hero {
  background: url("../assets/hback.png");
  background-size: no-repeat;
  background-position: center;
  background-size: cover;
}
.v-stepper-window {
  margin: 1rem;
}
.ditails {
  width: 100%;
  margin: auto;
}
.social {
  display: flex;
  justify-content: center;
  align-items: center;

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
<script>
export default {
  data() {
    return {
      stepperItem: 0,
      snackbar: false,
      textSnackBar: "",
      timeout: 4000,
      colorSnack: "green",
      dialog: "",
      dialog2: false,
      numberQuestion: 0,
      radioValue: "",
      countRightAnswer: 0,
      lastQuestion: false,
      accessStep: true,
      disableButton: false,
      falseAnswers: [],
      questions: [
        {
          question:
            "Вы гражданин РФ и не имеете гражданства (подданства) иностранного государства?",
          answer: "Да",
        },
        {
          question: "Ваш возраст от 18 до 40 лет?",
          answer: "Да",
        },
        {
          question:
            "Вы имеете среднее (11 классов) или средне-специальное (колледж, техникум) или высшее образование?",
          answer: "Да",
        },
        // {
        //   question: "Имеете ли Вы недвижимость за границей?",
        //   answer: "Нет",
        // },
        {
          question:
            "Имеете ли Вы или Ваши близкие родственники гражданство других стран или основания для постоянного проживания за границей?",
          answer: "Нет",
        },
        // {
        //   question:
        //     "Проживают ли Ваши близкие родственники (мать, отец, брат, сестра) за границей или имеют вид на жительство?",
        //   answer: "Нет",
        // },
        // {
        //   question: "Были ли у Ваc приводы в полицию?",
        //   answer: "Нет",
        // },
        // {
        //   question: "Лишали ли Вас водительских прав?",
        //   answer: "Нет",
        // },
        {
          question:
            "Имеете ли Вы серьезные заболевания (в том числе психические)? Для мужчин: Ваша категория годности к военной службе: В или Г или Д?",
          answer: "Нет",
        },
        {
          question:
            "Привлекались ли Вы или Ваши близкие родственники (мать, отец, брат, сестра) к уголовной ответственности за тяжкие или особо тяжкие преступления?",
          answer: "Нет",
        },
        {
          question:
            "Числитесь ли Вы или Ваши близкие родственники (мать, отец, брат, сестра) на учете в психдиспансере, наркодиспансере?",
          answer: "Нет",
        },
        {
          question: "Вы служили по контракту и были уволены по НУК?",
          answer: "Нет",
        },
      ],
    };
  },
  methods: {
    nextQuestion() {
      if (
        this.questions.length - 1 != this.numberQuestion &&
        this.radioValue != ""
      ) {
        if (this.radioValue == this.questions[this.numberQuestion].answer) {
          this.countRightAnswer++;
        } else {
          let answers = {
            question: this.questions[this.numberQuestion].question,
            answer: this.radioValue,
          };
          this.falseAnswers.push(answers);
        }
        this.numberQuestion++;
        this.radioValue = "";
      }
      if (
        this.questions.length - 1 == this.numberQuestion &&
        this.radioValue != ""
      ) {
        if (this.radioValue == this.questions[this.numberQuestion].answer) {
          this.countRightAnswer++;
        }
        this.dialog2 = false;

        if (this.countRightAnswer == this.questions.length) {
          this.accessStep = false;
          this.textSnackBar = "Доступ открыт";
          this.snackbar = true;
          this.stepperItem = 1;
          this.disableButton = true;
          var my_text = `Доступ открыт.`;
          this.sendMessageTG(my_text);
        } else {
          this.colorSnack = "red-darken-4";
          this.textSnackBar = "Отказано в доступе";
          this.snackbar = true;
          this.disableButton = true;
          var fAnswer = "";
          this.falseAnswers.forEach((ans) => {
            fAnswer = fAnswer + ans.question + "%0A";
          });

          var my_text = `Отказано в доступе.%0AВопросы по которым отказано:%0A${fAnswer}`;

          this.sendMessageTG(my_text);
        }
      }
    },
    startTest() {
      var my_text = `Начало опроса.`;
      this.sendMessageTG(my_text);
      this.numberQuestion = 0;
      this.countRightAnswer = 0;
      this.lastQuestion = false;
      this.radioValue = "";
    },
    sendMessageTG(my_text) {
      // var my_text = `Регион: Москва%0AРезультат: Успех`
      var token = "7169968585:AAGyXAfkhGg6iqvabBNCyWQmziuKSTDhb6k";
      var chat_id = -1002215519960;
      var url = `https://api.telegram.org/bot${token}/sendMessage?chat_id=${chat_id}&text=${my_text}`;
      let api = new XMLHttpRequest();
      api.open("GET", url, true);
      api.send();
      // https://api.telegram.org/bot7169968585:AAGyXAfkhGg6iqvabBNCyWQmziuKSTDhb6k/getUpdates
    },
  },
};
</script>
