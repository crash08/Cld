//Ожидает загрузки всего дерева контента
window.addEventListener('DOMContentLoaded', function () {

  //HOW TABS ==================================================================
  //Выбирет все элементы с классом "tabs__button" и ждет клика по любому элементу из коллекции
  document.querySelectorAll('.tabs__button').forEach(function (tabsButton) {
    tabsButton.addEventListener('click', function (event) {

      //Присваевает константе "path" значение переменной "data-path" эелемента, по которому кликнули
      const path = event.currentTarget.dataset.path;

      //Выбирет все элементы с классом "tabs__button" и удаляет у них класс "tabs__button_active"
      document.querySelectorAll('.tabs__button').forEach(function (tabsButton) {
        tabsButton.classList.remove('tabs__button_active');
      })

      //Выбирет все элементы с классом "how__tab" и удаляет у них класс "how__tab_active"
      document.querySelectorAll('.how__tab').forEach(function (howTab) {
        howTab.classList.remove('how__tab_active');
      })

      //Добавляет элементу tabsButton класс "tabs__button_active"
      tabsButton.classList.add('tabs__button_active');

      //Выбирет элемент по значению переменной "path" и добавляет к нему класс "how__tab_active"
      document.querySelector(`[data-target="${path}"]`).classList.add('how__tab_active');
    })
  })

  //FAQ ACCORDION =============================================================
  document.querySelectorAll('.faq__item').forEach(function (faqItem) {
    faqItem.addEventListener('click', function (event) {
      const faq = event.currentTarget.dataset.faq;

      if (faqItem.classList.contains('faq__item_active')) {
        faqItem.classList.remove('faq__item_active');
        document.querySelector(`[data-elem="${faq}"]`).classList.remove('faq__desc_active');
      }
      else {
        document.querySelectorAll('.faq__item').forEach(function (faqItem) {
          faqItem.classList.remove('faq__item_active');
        })
        document.querySelectorAll('.faq__desc').forEach(function (faqDesc) {
          faqDesc.classList.remove('faq__desc_active');
        })
        faqItem.classList.add('faq__item_active');
        document.querySelector(`[data-elem="${faq}"]`).classList.add('faq__desc_active');
      }
    })
  })

  //HERO SWIPER ===============================================================
  const swiper = new Swiper('.swiper', {
    // Optional parameters
    loop: true,

    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
  });

  //NAV BURGER ================================================================
  document.querySelector('#burger').addEventListener('click', function () {
    document.querySelector('#burger').classList.toggle('active');
    document.querySelector('#nav').classList.toggle('active');
    document.querySelector('body').classList.toggle('lock');
  })

  document.querySelectorAll('.nav__link').forEach(function (navLink) {
    navLink.addEventListener('click', function () {
      document.querySelector('#burger').classList.remove('active');
      document.querySelector('#nav').classList.remove('active');
      document.querySelector('body').classList.remove('lock');
    })
  })
})
