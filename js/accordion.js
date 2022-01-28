window.addEventListener('DOMContentLoaded', function () {

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
})
