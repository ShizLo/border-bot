<template>
  <div class="page-wrapper">
    <v-card class="hero-card" elevation="4">
      <div class="hero-overlay"></div>
      <v-card class="hero-content" elevation="0">
        <div class="d-flex justify-center pt-2">
          <img alt="Работа по контракту" class="logo pulse" src="@/assets/IMG_2619.webp" width="160" height="160" />
        </div>
        <h1 class="text-white text-center text-h4 text-md-h3 text-lg-h3 text-xl-h3 mt-2 font-weight-bold">Служба в Сосновом бору</h1>
        <h3 class="text-center text-white text-subtitle-1 font-weight-medium">Набор кандидатов на контракт</h3>
        <div class="d-flex justify-center align-center pt-1 pb-2">
          <v-icon color="white" class="mr-2">mdi-map-marker-outline</v-icon>
          <p class="text-white mb-0">г. Сосновый Бор, ул. Советская, 63</p>
        </div>
        <div class="px-3">
          <v-btn block class="apply-btn" color="primary" size="large" @click="dialogOpen()">
            <v-icon start>mdi-send</v-icon>
            Подать заявку
          </v-btn>
        </div>
      </v-card>
    </v-card>
    <v-card class="mt-6 video-card" elevation="4">
      <div class="section-header">
        <h2 class="section-title">
          <span class="title-text">Контракт в Ленинградской области</span>
          <span class="title-decoration"></span>
        </h2>
      </div>
      <div class="video-container">
        <video :src="srcVideo" poster="../assets/prev.png" controls muted loop playsinline class="elevation-3">
          <source :src="srcVideo" type="video/mp4" />
        </video>
      </div>
    </v-card>
    <v-row class="features-grid mt-6">
      <v-col cols="12" md="6" class="">
        <v-card class="feature-card h-100" elevation="4">
          <div class="feature-header primary d-flex align-center mt-4 ml-4">
            <v-icon color="black" size="x-large">mdi-compass-outline</v-icon>
            <h3 class="text-black ml-3 text-h5 font-weight-bold mb-0">О службе</h3>
          </div>
          <div class="feature-content px-6">
            <p class="text-body-1 mb-0">
              Страны запада наращивают военное присутствие у Российских границ. В ответ на их недружественные шаги руководство страны
              приняло решение усилить наши рубежи, в связи с этим, ПУ ФСБ России по г. Санкт-Петербургу и Ленинградской области, объявляет
              набор кандидатов на военную службу по контракту в подразделения границы. Участие в СВО только по желанию. Сотрудники
              управления несут службу на воздушных, морских и сухопутных рубежах нашей Родины с Финляндской и Эстонской республиками общей
              протяженностью более 400 километров.
            </p>
          </div>
        </v-card>
      </v-col>

      <v-col cols="12" md="6" class="">
        <v-card class="feature-card h-100" elevation="4">
          <div class="feature-header primary d-flex align-center mt-4 ml-4 ml-md-4">
            <v-icon size="x-large" color="black">mdi-briefcase-outline</v-icon>
            <h3 class="text-black ml-3 text-h5 font-weight-bold mb-0">Вакансии по контракту</h3>
          </div>
          <div class="feature-content pa-0 pa-md-4">
            <v-list class="py-0">
              <v-list-item v-for="(job, index) in jobs" :key="index" class="">
                <div class="d-flex">
                  <v-icon color="primary mr-2">mdi-check-circle</v-icon>
                  <v-list-item-title class="text-body-1 text-wrap">{{ job }}</v-list-item-title>
                </div>
              </v-list-item>
            </v-list>
          </div>
        </v-card>
      </v-col>

      <v-col cols="12" md="6" class="">
        <v-card class="feature-card h-100" elevation="4">
          <div class="feature-header primary d-flex align-center mt-4 ml-4">
            <v-icon size="x-large" color="black">mdi-account-check-outline</v-icon>
            <h3 class="text-black pl-4 text-h5 font-weight-bold mb-0">Условия контракта</h3>
          </div>
          <div class="feature-content pa-0 pa-md-4">
            <v-list class="py-0">
              <v-list-item v-for="(condition, index) in conditions" :key="index">
                <div class="d-flex">
                  <v-icon color="primary" class="mr-2">mdi-chevron-right</v-icon>
                  <v-list-item-title class="text-body-1 text-wrap">{{ condition }}</v-list-item-title>
                </div>
              </v-list-item>
            </v-list>
          </div>
        </v-card>
      </v-col>

      <v-col cols="12" md="6" class="">
        <v-card class="feature-card h-100" elevation="4">
          <div class="feature-header primary d-flex align-center mt-4 ml-4">
            <v-icon size="x-large" color="black">mdi-medal-outline</v-icon>
            <h3 class="text-black pl-4 text-h5 font-weight-bold mb-0">Льготы для военнослужащих</h3>
          </div>
          <div class="feature-content pa-0 pa-md-4">
            <v-list class="py-0">
              <v-list-item v-for="(benefit, index) in benefits" :key="index" class="">
                <div class="d-flex">
                  <v-icon color="primary" class="mr-2">mdi-star-circle</v-icon>

                  <v-list-item-title class="text-body-1 text-wrap" v-html="benefit"></v-list-item-title>
                </div>
              </v-list-item>
            </v-list>
          </div>
        </v-card>
      </v-col>
    </v-row>

    <v-card class="mt-6 process-card" elevation="4">
      <div class="process-header d-flex align-center pa-6 pa-md-8 primary lighten-1">
        <div>
          <h3 class="text-h4 font-weight-bold mb-1">Порядок трудоустройства</h3>
          <p class="mb-0 text-caption opacity-80">5 шагов к успешному заключению контракта</p>
        </div>
      </div>
      <v-stepper v-model="stepperItem" class="elevation-0 stepper-custom" hide-actions>
        <v-divider />
        <v-stepper-header class="elevation-0 px-4 py-2">
          <div v-for="(step, index) in steps">
            <v-stepper-item
              :key="index"
              :title="step.title"
              :subtitle="step.subtitle"
              :editable="index === 0 || !accessStep"
              :complete="index < stepperItem"
              :color="index <= stepperItem ? 'primary' : 'green'"
              :error="accessStep && index > 0"
              :error-icon="accessStep && index > 0 ? 'mdi-lock-outline' : undefined"
              class="text-no-wrap py-4 stepper-item"
            >
            </v-stepper-item>
          </div>
        </v-stepper-header>
        <v-divider />

        <v-stepper-window class="pa-0 ma-1 ma-md-6">
          <v-stepper-window-item value="0">
            <v-card elevation="0" class="process-content">
              <div class="d-flex align-center pl-4 pt-2 pt-md-0 mb-4">
                <v-icon color="primary" large class="mr-2">mdi-file-sign</v-icon>
                <h3 class="text-h5 font-weight-bold primary--text">Процесс заключения контракта</h3>
              </div>

              <v-divider class="mb-4" />

              <v-list class="process-steps">
                <v-list-item v-for="(item, index) in processItems" :key="index" class="mb-1 pa-3 rounded-lg step-item">
                  <div class="d-flex">
                    <v-icon color="primary" class="mr-2" large>mdi-numeric-{{ index + 1 }}-circle</v-icon>

                    <v-list-item-title class="text-body-1 font-weight-medium">{{ item }}</v-list-item-title>
                  </div>
                </v-list-item>
              </v-list>

              <v-alert color="red-lighten-5" class="mt-4 mx-4" border="start">
                <div class="d-flex align-center">
                  <v-icon color="red" class="mr-2">mdi-alert-circle-outline</v-icon>
                  <span class="text-caption red--text">Переводами из других ведомств не занимаемся</span>
                </div>
              </v-alert>

              <v-dialog v-model="dialog2" max-width="600" persistent>
                <template v-slot:activator="{ props }">
                  <div class="d-flex justify-center">
                    <v-btn
                      @click="startTest()"
                      color="primary"
                      class="my-6"
                      size="large"
                      prepend-icon="mdi-clipboard-text-outline"
                      v-bind="props"
                    >
                      Начать опрос
                    </v-btn>
                  </div>
                </template>
                <v-card class="survey-dialog rounded-xl">
                  <v-card-text class="pa-0">
                    <div class="dialog-header pa-6 bg-primary">
                      <div class="d-flex align-center">
                        <v-icon color="white" large>mdi-clipboard-text</v-icon>
                        <div class="ml-4">
                          <h2 class="text-h5 white--text font-weight-bold">Первичный опрос</h2>
                          <div class="text-caption white--text opacity-85">Вопрос {{ numberQuestion + 1 }} из {{ questions.length }}</div>
                        </div>
                      </div>
                      <v-progress-linear
                        :model-value="((numberQuestion + 1) / questions.length) * 100"
                        color="white"
                        height="6"
                        class="mt-4 rounded-lg"
                      />
                    </div>

                    <div class="content-wrapper pa-2 d-flex justify-space-between">
                      <div class="question-block mb-4">
                        <div class="text-h6 font-weight-medium pa-1 pa-md-4 mb-4">
                          {{ questions[numberQuestion].question }}
                        </div>
                      </div>
                      <div>
                        <v-radio-group inline v-model="radioValue" class="d-flex justify-center">
                          <v-radio v-for="(answer, ai) in ['Да', 'Нет']" :key="ai" :value="answer" color="primary" class="">
                            <template v-slot:label>
                              <span class="text-body-1">{{ answer }}</span>
                            </template>
                          </v-radio>
                        </v-radio-group>
                      </div>
                    </div>
                  </v-card-text>

                  <v-card-actions class="pa-4 bg-grey-lighten-4">
                    <v-spacer />
                    <v-btn
                      color="primary"
                      variant="outlined"
                      size="large"
                      :disabled="!radioValue"
                      @click="nextQuestion()"
                      append-icon="mdi-arrow-right"
                    >
                      Далее
                    </v-btn>
                  </v-card-actions>
                </v-card>
              </v-dialog>
            </v-card>
          </v-stepper-window-item>
          <v-stepper-window-item value="1">
            <v-card class="px-4 py-3" elevation="0">
              <div class="d-flex justify-space-between align-center">
                <div>
                  <h3 class="text-h6 font-weight-bold primary--text">Вы идеальный кандидат</h3>
                  <p class="mb-2">Связь с куратором</p>
                </div>
              </div>
              <v-divider></v-divider>
              <div class="mt-3">
                <p class="mb-3">
                  Если Вы заинтересованы в дальнейшем трудоустройстве напишите нам по одной из ссылок ниже или оставьте свои контактные
                  данные. С Вами свяжутся в ближайшее время.
                </p>
                <v-divider class="my-2"></v-divider>
                <h4 class="mb-2 text-subtitle-1 font-weight-bold">Ссылки для связи:</h4>
                <v-list class="contact-list">
                  <v-list-item v-for="(contact, index) in contacts" :key="index" :href="contact.link">
                    <div class="d-flex justify-space-between">
                      <div class="d-flex align-center">
                        <v-icon class="mr-2">{{ contact.icon }}</v-icon>
                        <v-list-item-title>{{ contact.name }}</v-list-item-title>
                      </div>
                      <v-icon>mdi-open-in-new</v-icon>
                    </div>
                  </v-list-item>
                </v-list>
                <v-divider class="mt-3" />
                <div class="d-flex mt-4 contact-form">
                  <v-text-field
                    v-model="contactInfo"
                    :loading="loading"
                    density="comfortable"
                    label="Номер телефона или email"
                    variant="outlined"
                    hide-details
                    single-line
                    @keyup.enter="onClick"
                  ></v-text-field>
                  <v-btn class="ml-2 send-btn" color="primary" @click="onClick">
                    <v-icon>mdi-send</v-icon>
                  </v-btn>
                </div>
              </div>
            </v-card>
          </v-stepper-window-item>
          <v-stepper-window-item value="2">
            <v-card class="px-4 py-3" elevation="0">
              <h3 class="text-h6 font-weight-bold primary--text">Первый этап</h3>
              <p class="mb-3">Предоставление документов</p>
              <v-divider></v-divider>

              <div class="d-flex align-center justify-space-between mt-3">
                <v-list class="documents-list">
                  <v-list-item class="py-0" v-for="(doc, index) in requiredDocs" :key="index">
                    <div class="d-flex">
                      <v-icon class="mr-2" color="primary">mdi-file-document-outline</v-icon>
                      <v-list-item-title>{{ doc }}</v-list-item-title>
                    </div>
                  </v-list-item>
                </v-list>

                <v-menu>
                  <template v-slot:activator="{ props: activatorProps }">
                    <v-btn color="primary" density="comfortable" icon="mdi-download" v-bind="activatorProps"></v-btn>
                  </template>
                  <v-list>
                    <v-list-item v-for="(template, index) in documentTemplates" :key="index" :href="template.link" target="_blank">
                      <div class="d-flex">
                        <v-list-item-title>{{ template.name }}</v-list-item-title>
                        <v-list-item-action>
                          <v-icon>mdi-download</v-icon>
                        </v-list-item-action>
                      </div>
                    </v-list-item>
                  </v-list>
                </v-menu>
              </div>

              <v-divider class="my-3"></v-divider>
              <h4 class="mb-2 text-subtitle-1 font-weight-bold">Личные документы:</h4>
              <v-list class="personal-docs-list">
                <v-list-item v-for="(doc, index) in personalDocs" :key="index">
                  <div class="d-flex">
                    <v-icon color="primary">mdi-chevron-right</v-icon>
                    <v-list-item-title>{{ doc }}</v-list-item-title>
                  </div>
                </v-list-item>
              </v-list>

              <v-divider class="my-3"></v-divider>
              <h4 class="mb-2 text-subtitle-1 font-weight-bold">Документы на близких родственников:</h4>
              <v-list class="relative-docs-list">
                <v-list-item v-for="(doc, index) in relativeDocs" :key="index">
                  <div class="d-flex">
                    <v-icon class="mr-2" color="primary">mdi-account-group</v-icon>
                    <v-list-item-title>{{ doc }}</v-list-item-title>
                  </div>
                </v-list-item>
              </v-list>
            </v-card>
          </v-stepper-window-item>
          <v-stepper-window-item value="3">
            <v-card class="px-4 py-3" elevation="0">
              <h3 class="text-h6 font-weight-bold primary--text">Второй этап</h3>
              <p class="mb-3">Собеседование</p>
              <v-divider></v-divider>
              <div class="mt-3">
                После получения копий документов, осуществляется их проверка (процесс занимает около 2 месяцев). По результатам изучения
                предоставленных документов, по месту регистрации или проживания (уточняется заранее) кандидату на военную службу будет
                предложено прибыть на первичное собеседование или отказано в трудоустройстве.
              </div>
            </v-card>
          </v-stepper-window-item>
          <v-stepper-window-item value="4">
            <v-card class="px-4 py-3" elevation="0">
              <h3 class="text-h6 font-weight-bold primary--text">Третий этап</h3>
              <p class="mb-3">Военно-врачебная комиссия и психофизиологическое обследование</p>
              <v-divider></v-divider>
              <p class="mt-3">
                По результатм первичного собеседования, кандидату на военную службу по контракту доводятся (не доводятся) даты прохождения
                ВВК и ПФО. После всех проверок и положительных результатов этих проверок обговаривается удобное время прибытия к месту
                службы кандидата для подписания контракта.
              </p>
            </v-card>
          </v-stepper-window-item>
        </v-stepper-window>
      </v-stepper>
    </v-card>
    <v-snackbar v-model="snackbar" :timeout="timeout" :color="colorSnack" class="text-center">
      {{ textSnackBar }}
    </v-snackbar>
  </div>
</template>

<style lang="scss" scoped>
.feature-header {
  .v-icon {
    flex-shrink: 0;
  }
}

.v-list-item {
  align-items: center;
  min-height: 48px;
  padding: 8px 0;

  &__prepend {
    margin-right: 12px;
  }
}

.hero-content {
  .v-icon {
    margin-top: -2px; // Точная подгонка выравнивания
  }
}

.section-header {
  margin-top: 40px;
  margin-bottom: 40px;
  text-align: center;
  @media (max-width: 600px) {
    margin-bottom: 20px;
  }
}

.section-title {
  font-size: 3rem;
  font-weight: 800;
  margin: 0 0 15px 0;
  position: relative;
  display: inline-block;
  font-family: "Montserrat", sans-serif;

  .title-text {
    background: linear-gradient(90deg, #2c3e50, #1a1a1a);
    -webkit-background-clip: text;
    background-clip: text;
    color: transparent;
    position: relative;
    z-index: 2;
    letter-spacing: -0.03em;
    text-transform: uppercase;
    font-weight: 700;
  }

  .title-decoration {
    position: absolute;
    bottom: -12px;
    left: 50%;
    transform: translateX(-50%);
    width: 80px;
    height: 5px;
    // background: linear-gradient(90deg, black, darken(black, 15%));
    background: linear-gradient(90deg, black, gray);
    border-radius: 3px;
    transition: width 0.3s ease;
  }

  &:hover .title-decoration {
    width: 120px;
  }

  @media (max-width: 768px) {
    font-size: 2rem;
  }

  @media (max-width: 600px) {
    font-size: 2rem;
    margin-bottom: 10px;

    .title-decoration {
      width: 60px;
      height: 3px;
      bottom: -8px;
    }

    &:hover .title-decoration {
      width: 80px;
    }
  }
}
.survey-dialog {
  border-radius: 16px !important;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  max-height: 90vh;

  .dialog-header {
    background: #f8f9fa;
    border-bottom: 1px solid #e0e0e0;
    flex-shrink: 0;
  }

  .content-wrapper {
    flex: 1;
    min-height: 300px;
    max-height: calc(90vh - 200px);
    display: flex;
    flex-direction: column;
  }

  .scroll-container {
    flex: 1;
    overflow-y: auto;
    padding-bottom: 16px;
  }

  .question-block {
    background: rgba(25, 118, 210, 0.05);
    border-radius: 12px;
    margin: 0 16px;
    position: relative;
    min-height: 120px;
    display: flex;
    align-items: center;

    &::after {
      content: "";
      position: absolute;
      bottom: -8px;
      left: 24px;
      width: 24px;
      height: 24px;
      background: inherit;
      transform: rotate(45deg);
      z-index: 0;
    }

    .question-text {
      position: relative;
      z-index: 1;
      color: #2d3436;
      line-height: 1.4;
      width: 100%;
    }
  }

  .dialog-actions {
    flex-shrink: 0;
    border-top: 1px solid #e0e0e0;
    background: #fff;
  }

  .answer-item {
    transition: all 0.3s ease;
    min-height: 56px;

    &:hover {
      transform: translateX(8px);
    }
  }

  @media (max-width: 600px) {
    .content-wrapper {
      min-height: 200px;
    }

    .question-block {
      min-height: 100px;
      margin: 0 8px;
      padding: 16px !important;
    }

    .question-text {
      font-size: 1.1rem !important;
    }
  }
}
.page-wrapper {
  max-width: 1200px;
  margin: 0 auto;
}

// Hero Section
.hero-card {
  position: relative;
  overflow: hidden;
  border-radius: 12px;

  .hero-overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(135deg, rgba(13, 71, 161, 0.8) 0%, rgba(21, 101, 192, 0.9) 100%);
  }

  .hero-content {
    position: relative;
    background: transparent !important;
    padding: 24px 16px;

    .logo {
      border-radius: 50%;
      border: 3px solid white;
      box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
      transition: transform 0.3s ease;

      &:hover {
        transform: scale(1.05);
      }
    }

    .apply-btn {
      font-weight: 600;
      letter-spacing: 0.5px;
      margin-top: 12px;
      transition: all 0.3s ease;

      &:hover {
        transform: translateY(-2px);
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
      }
    }
  }
}

// Pulse animation for logo
.pulse {
  animation: pulse 2s infinite;
}

@keyframes pulse {
  0% {
    box-shadow: 0 0 0 0 rgba(255, 255, 255, 0.7);
  }
  70% {
    box-shadow: 0 0 0 10px rgba(255, 255, 255, 0);
  }
  100% {
    box-shadow: 0 0 0 0 rgba(255, 255, 255, 0);
  }
}

// Video Section
.video-card {
  border-radius: 12px;
  overflow: hidden;

  .video-container {
    padding: 0 16px 16px;

    video {
      border-radius: 8px;
      width: 100%;
      box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
    }
  }
}

// Features Grid
.features-grid {
  .feature-card {
    border-radius: 12px;
    overflow: hidden;
    transition:
      transform 0.3s ease,
      box-shadow 0.3s ease;

    &:hover {
      transform: translateY(-5px);
      box-shadow: 0 10px 20px rgba(0, 0, 0, 0.15) !important;
    }

    .feature-header {
      display: flex;
      align-items: center;
      padding: 16px;
      color: white;
    }

    .feature-content {
      padding: 16px;
      height: calc(100% - 72px);

      .v-list {
        background: transparent;
      }
    }
  }
}

// Process Section
.process-card {
  border-radius: 12px;
  overflow: hidden;

  .process-header {
    padding: 12px 16px;
  }

  .stepper-item {
    min-width: 120px;
  }

  .warning-note {
    background-color: #fff8e1;
    padding: 8px 12px;
    border-radius: 4px;
    margin: 8px 0;
  }

  .start-survey-btn {
    font-weight: 600;
    letter-spacing: 0.5px;
    margin-top: 16px;
  }

  .question-text {
    min-height: 80px;
    font-size: 1.1rem;
    line-height: 1.5;
  }

  .answer-btn {
    font-weight: 600;
  }

  .contact-list {
    .v-list-item {
      padding-left: 0;
      transition: all 0.3s ease;

      &:hover {
        background-color: #e3f2fd;
        // transform: translateX(5px);
      }
    }
  }

  .contact-form {
    .send-btn {
      height: 56px;
    }
  }

  .documents-list,
  .personal-docs-list,
  .relative-docs-list {
    .v-list-item {
      padding-left: 0;

      &::before {
        border-radius: 4px;
      }
    }
  }
}

// Responsive adjustments
@media (max-width: 960px) {
  .features-grid {
    .feature-card {
      margin-bottom: 16px;
    }
  }

  .stepper-item {
    min-width: 80px !important;
    padding: 8px !important;

    :deep(.v-stepper-item__title) {
      font-size: 0.8rem;
    }
  }
}
</style>

<script>
import { sendTextMessage } from "@/services/botService";
export default {
  data() {
    return {
      srcVideo: "https://bg-sbp.ru/source/prod.m4v",
      stepperItem: 0,
      snackbar: false,
      textSnackBar: "",
      timeout: 4000,
      colorSnack: "success",
      dialog: "",
      dialog2: false,
      numberQuestion: 0,
      radioValue: "",
      countRightAnswer: 0,
      lastQuestion: false,
      accessStep: true,
      disableButton: false,
      falseAnswers: [],
      contactInfo: "",
      loading: false,
      jobs: [
        "Контролер подразделения пограничного контроля",
        "Специалист плавсостава береговой охраны",
        "Специалист радиотехнического поста",
        "Инструктор разведывательно-поисковой группы",
        "Вожатый служебной собаки (кинолог)",
        "Водитель",
        "Повар",
        "Фельдшер",
      ],

      conditions: [
        "Возраст от 18 до 40 лет",
        "Гражданство РФ",
        "Удовлетворительный уровень физического развития",
        "Образование: среднее (11 классов) или средне-специальное",
        "Отсутствие близких родственников за границей",
        "Отсутствие судимости",
      ],

      benefits: [
        "Денежное довольствие до <strong>85 000 р</strong>",
        "Ежегодная материальная помощь",
        "Бесплатное медицинское сопровождение",
        "Страхование жизни и здоровья",
        "Вещевое обеспечение",
        "Оплачиваемый отпуск до <strong>60 суток</strong>",
        "Предоставление служебного жилья",
        "Военная ипотека (НИС)",
        "Выход на пенсию через <strong>13 лет</strong>",
      ],

      steps: [
        { title: "Опрос", subtitle: "3 мин" },
        { title: "Контакты" },
        { title: "Документы" },
        { title: "Собеседование" },
        { title: "ВВК и ПФО" },
      ],

      processItems: ["Опрос", "Беседа с куратором", "Предоставление документов", "Собеседование", "Прохождение ВВК и ПФО"],

      contacts: [
        { name: "Telegram", icon: "mdi-email", link: "https://t.me/iShizo" },
        { name: "VK", icon: "mdi-email", link: "https://vk.com/id48935027" },
      ],

      requiredDocs: ["Заявление", "Анкета", "Автобиография"],

      documentTemplates: [
        { name: "Заявление", link: "https://psfsbspb.ru/src/Заявление.docx" },
        { name: "Анкета", link: "https://psfsbspb.ru/src/Анкета.pdf" },
        { name: "Автобиография", link: "https://psfsbspb.ru/src/Автобиография.docx" },
      ],

      personalDocs: [
        "Свидетельство о рождении",
        "Паспорт, загранпаспорт (при наличии)",
        "Военный билет (при наличии)",
        "Аттестат с табелем оценок",
        "Диплом об образовании",
      ],

      relativeDocs: ["Свидетельство о рождении (смерти)", "Свидетельство о заключении брака", "Паспорт"],

      questions: [
        {
          question: "Вы гражданин РФ и не имеете гражданства (подданства) иностранного государства?",
          questionShort: "Имеет иное гражданство",
          answer: "Да",
        },
        {
          question: "Ваш возраст от 17 до 40 лет?",
          questionShort: "Не подходит по возрасту",
          answer: "Да",
        },
        {
          question: "Вы имеете среднее (11 классов) или средне-специальное (колледж, техникум) или высшее образование?",
          questionShort: "Не имеет образования",
          answer: "Да",
        },
        {
          question:
            "Имеете ли Вы или Ваши близкие родственники гражданство других стран или основания для постоянного проживания за границей?",
          questionShort: "Близкие родственники за границей",
          answer: "Нет",
        },
        {
          question:
            "Имеете ли Вы серьезные заболевания (в том числе психические)? Для мужчин: Ваша категория годности к военной службе: В или Г или Д?",
          questionShort: "Имеет заболевания",
          answer: "Нет",
        },
        {
          question:
            "Привлекались ли Вы или Ваши близкие родственники (мать, отец, брат, сестра) к уголовной ответственности за тяжкие или особо тяжкие преступления?",
          questionShort: "Уголовка",
          answer: "Нет",
        },
        {
          question: "Числитесь ли Вы или Ваши близкие родственники (мать, отец, брат, сестра) на учете в психдиспансере, наркодиспансере?",
          questionShort: "Диспансеры",
          answer: "Нет",
        },
        {
          question: "Вы служили по контракту и были уволены по НУК?",
          questionShort: "Уволен по НУК",
          answer: "Нет",
        },
      ],
      isLoading: false,
      error: "",
    };
  },
  methods: {
    dialogOpen() {
      this.dialog2 = true;
    },
    nextQuestion() {
      if (this.questions.length - 1 != this.numberQuestion && this.radioValue != "") {
        if (this.radioValue == this.questions[this.numberQuestion].answer) {
          this.countRightAnswer++;
        } else {
          let answers = {
            question: this.questions[this.numberQuestion].question,
            questionShort: this.questions[this.numberQuestion].questionShort,
            answer: this.radioValue,
          };
          this.falseAnswers.push(answers);
        }
        this.numberQuestion++;
        this.radioValue = "";
      }
      if (this.questions.length - 1 == this.numberQuestion && this.radioValue != "") {
        if (this.radioValue == this.questions[this.numberQuestion].answer) {
          this.countRightAnswer++;
        }
        this.dialog2 = false;

        if (this.countRightAnswer == this.questions.length) {
          this.accessStep = false;
          this.textSnackBar = "Доступ открыт! Свяжитесь с нами или оставьте контактные данные.";
          this.snackbar = true;
          this.stepperItem = 1;
          this.disableButton = true;
          var message = { text: `🚨 Доступ открыт.` };
          sendTextMessage(message);
        } else {
          this.colorSnack = "error";
          this.textSnackBar = "К сожалению, вы не прошли предварительный опрос";
          this.snackbar = true;
          this.disableButton = true;
          var fAnswer = "";
          this.falseAnswers.forEach((ans) => {
            fAnswer = fAnswer + ans.question + "%0A";
          });

          var message = {
            text: `🚨 Отказано в доступе.\n
Вопросы по которым отказано:\n
${this.falseAnswers.map((task) => `- ${task.questionShort}`).join("\n")}`,
          };

          sendTextMessage(message);
        }
      }
    },

    onClick() {
      if (this.contactInfo) {
        this.loading = true;
        setTimeout(() => {
          this.loading = false;
          this.colorSnack = "success";
          this.textSnackBar = "Ваши контактные данные отправлены! Мы свяжемся с вами в ближайшее время.";
          this.snackbar = true;
          this.contactInfo = "";
        }, 1500);
      }
    },
    async getRegionByIP() {
      try {
        const services = [
          "https://geolocation-db.com/json/", // Возвращает 'state'
          "http://ip-api.com/json/?fields=region", // Возвращает 'region'
        ];

        for (const url of services) {
          try {
            const response = await fetch(url);
            if (!response.ok) continue;

            const data = await response.json();
            // Проверяем разные варианты названия поля
            if (data.region) return data.region;
            if (data.state) return data.state;
            if (data.region_name) return data.region_name;
          } catch (e) {
            continue;
          }
        }

        return "Регион не определен";
      } catch (err) {
        console.error("Ошибка определения региона:", err);
        return "Регион не определен";
      }
    },
    async startTest() {
      this.isLoading = true;
      this.error = "";

      try {
        const region = await this.getRegionByIP();
        const message = {
          text: `🟢 Новый тест начат!\n📍 Город: ${region}\n🕒 Время: ${new Date().toLocaleString()}`,
        };

        await sendTextMessage(message);
        this.$emit("test-started", region);

        this.numberQuestion = 0;
        this.countRightAnswer = 0;
        this.lastQuestion = false;
        this.radioValue = "";
      } catch (err) {
        this.error = "Не удалось определить местоположение";
        console.error("Ошибка:", err);
      } finally {
        this.isLoading = false;
      }
    },
    async getCityByIP() {
      try {
        const response = await fetch("https://ipapi.co/json/");
        const data = await response.json();
        return data.city || "Город не определен";
      } catch (err) {
        console.error("Ошибка определения по IP:", err);
        return "Город не определен";
      }
    },
  },
};
</script>
