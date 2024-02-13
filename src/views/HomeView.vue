<script setup>
import WelcomeItem from '../components/WelcomeItem.vue'
import HelloWorld from '../components/HelloWorld.vue'
import DocumentationIcon from '../components/icons/IconDocumentation.vue'
import ToolingIcon from '../components/icons/IconTooling.vue'
import EcosystemIcon from '../components/icons/IconEcosystem.vue'
import ErrorIcon from '../components/icons/IconError.vue'

</script>

<template>
  <div class="wrapper">
    <HelloWorld msg="Служба в городе Сосновом Бору" />
  </div>
  <WelcomeItem>
    <template #icon>
      <ToolingIcon />
    </template>
    <template #heading>Основные требования</template>
    <li>Возраст от 18 лет. Пол значения не имеет.</li>

    <li>Гражданство РФ.</li>

    <li>Удовлетворительный уровнь физического развития.</li>
    <li>
      Среднее (полное, специальное, профессиональное), высшее образование или наличие военной службы
      по призыву.
    </li>
    <li>
      Отсутствие близких родственников постоянно проживающих за границей, а также состоящих на учете
      в психиатрических учреждениях (имеющих психические заболевания).
    </li>
    <!-- <li>
      Отсутствие близких родственников состоящих на учете в психиатрических учреждениях (имеющих
      психические заболевания).
    </li> -->
  </WelcomeItem>

  <WelcomeItem>
    <template #icon>
      <DocumentationIcon />
    </template>
    <template #heading>Требуемые документы</template>
    <li>Заявление.</li>
    <li>Анкета.</li>
    <li>Автобиография.</li>
    <li>Результаты медицинских обследований.</li>
    <li>Копии личных документов.</li>
  </WelcomeItem>

  <WelcomeItem>
    <template #icon>
      <EcosystemIcon />
    </template>
    <template #heading>Гарантии</template>
    <li>Денежное довольствие до <i>85000</i> руб.</li>
    <li>Ежегодная материальная помощь.</li>
    <li>Бесплантное медицинское сопровождение.</li>
    <li>Страхование жизни.</li>
    <li>Стабильный график работы.</li>
    <li>Вещевое обеспечение.</li>
    <li>Оплачиваемый отпуск до <i>60</i> суток.</li>
    <li>Предоставление служебного жилья, возможность аренды и поднаема за счет структуры.</li>
    <!-- <li>Для кандидатов мужского пола возможность получения высшего образования с дальнейшим присвоением первого офицерского звания - лейтенант.</li> -->
    <li>
      Возможность приобретения жилья через
      <i>6</i> лет службы (по программе военной ипотеки).
    </li>
  </WelcomeItem>

  <WelcomeItem>
    <template #icon>
      <ErrorIcon />
    </template>
    <template #heading>Ограничение по службе</template>
    <li>
      Ограничения могут быть не только по медицинским показателям, но и по возрастным. Так, впервые
      поступающие на военную службу по контракту должны быть не старше 40 лет.
    </li>
    <li>
      Контракт не может быть заключен с гражданами, в отношении которых осуществляется уголовное
      преследование, отбывшими наказание в виде лишения свободы в исправительных учреждениях и
      имеющими судимость.
    </li>
  </WelcomeItem>

  <!-- <WelcomeItem>
    <template #icon>
      <EcosystemIcon />
    </template>
    <template #heading>Ecosystem</template>

    Get official tools and libraries for your project:
    <a href="https://pinia.vuejs.org/" target="_blank" rel="noopener">Pinia</a>,
    <a href="https://router.vuejs.org/" target="_blank" rel="noopener">Vue Router</a>,
    <a href="https://test-utils.vuejs.org/" target="_blank" rel="noopener">Vue Test Utils</a>, and
    <a href="https://github.com/vuejs/devtools" target="_blank" rel="noopener">Vue Dev Tools</a>. If
    you need more resources, we suggest paying
    <a href="https://github.com/vuejs/awesome-vue" target="_blank" rel="noopener">Awesome Vue</a>
    a visit.
  </WelcomeItem>

  <WelcomeItem>
    <template #icon>
      <CommunityIcon />
    </template>
    <template #heading>Community</template>

    Got stuck? Ask your question on
    <a href="https://chat.vuejs.org" target="_blank" rel="noopener">Vue Land</a>, our official
    Discord server, or
    <a href="https://stackoverflow.com/questions/tagged/vue.js" target="_blank" rel="noopener"
      >StackOverflow</a
    >. You should also subscribe to
    <a href="https://news.vuejs.org" target="_blank" rel="noopener">our mailing list</a> and follow
    the official
    <a href="https://twitter.com/vuejs" target="_blank" rel="noopener">@vuejs</a>
    twitter account for latest news in the Vue world.
  </WelcomeItem>

  <WelcomeItem>
    <template #icon>
      <SupportIcon />
    </template>
    <template #heading>Support Vue</template>

    As an independent project, Vue relies on community backing for its sustainability. You can help
    us by
    <a href="https://vuejs.org/sponsor/" target="_blank" rel="noopener">becoming a sponsor</a>.
  </WelcomeItem> -->
</template>
