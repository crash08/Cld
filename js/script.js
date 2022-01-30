//Ожидает загрузки всего дерева контента
window.addEventListener('DOMContentLoaded', function () {

  //HOW TABS ==================================================================
  //Выбирет все элементы с классом "tabs__button" и ждет клика по любому элементу из коллекции
  document.querySelectorAll('.tabs__button').forEach(function (tabsButton) {
    tabsButton.addEventListener('click', function (event) {

      //Присваевает константе "path" значение переменной "data-path" эелемента, по которому кликнули
      const path = event.currentTarget.dataset.path;

      //Выбирет все элементы с классом "tabs__button" и удаляет у них класс "active"
      document.querySelectorAll('.tabs__button').forEach(function (tabsButton) {
        tabsButton.classList.remove('active');
      })

      //Выбирет все элементы с классом "how__tab" и удаляет у них класс "active"
      document.querySelectorAll('.how__tab').forEach(function (howTab) {
        howTab.classList.remove('active');
      })

      //Добавляет элементу tabsButton класс "active"
      tabsButton.classList.add('active');

      //Выбирет элемент по значению переменной "path" и добавляет к нему класс "active"
      document.querySelector(`[data-target="${path}"]`).classList.add('active');
    })
  })

  //FAQ ACCORDION =============================================================
  document.querySelectorAll('.faq__button').forEach(function (faqButton) {
    faqButton.addEventListener('click', function (event) {
      const faq = event.currentTarget.dataset.faq;

      if (faqButton.classList.contains('active')) {
        faqButton.classList.remove('active');
        document.querySelector(`[data-elem="${faq}"]`).classList.remove('active');
        faqButton.blur();
      }
      else {
        document.querySelectorAll('.faq__button').forEach(function (faqButton) {
          faqButton.classList.remove('active');
        })
        document.querySelectorAll('.faq__desc').forEach(function (faqDesc) {
          faqDesc.classList.remove('active');
        })
        faqButton.classList.add('active');
        document.querySelector(`[data-elem="${faq}"]`).classList.add('active');
        faqButton.blur();
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
