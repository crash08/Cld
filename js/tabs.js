//Ожидает загрузки всего дерева контента
window.addEventListener('DOMContentLoaded', function () {

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
})

