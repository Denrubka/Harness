const btns = document.querySelectorAll('button');

const modal = () => {
  const cardBtns = document.querySelectorAll('.card__btn');
  const modal = document.querySelector('.modal-wrapper');
  const modalTitle = modal.querySelector('.modal__title');
  const modalSize = modal.querySelector('.select__btn');
  const modalOldPrice = modal.querySelector('.modal-price__old');
  const modalNewPrice = modal.querySelector('.modal-price__new');
  const modalImg = modal.querySelector('.modal__img');



  const modalOpen = (title, size, oldPrice, newPrice, img) => {
    modal.classList.add('active');
    modalTitle.textContent = title.textContent;
    modalSize.innerHTML = `${size.textContent} <img class="select__icon" width="14" heigh="8" src="./images/arrow.png" alt="Arrow">`;
    modalOldPrice.textContent = oldPrice.textContent;
    modalNewPrice.textContent = newPrice.textContent;
    modalImg.src = img.src;
    // document.body.style.overflow = 'hidden';
  }
  const modalClose = () => {
    modal.classList.remove('active');
    // document.body.style.overflow = '';
  }

  cardBtns.forEach(btn => {
    btn.addEventListener('click', (event) => {
      const target = event.target;
      const parent = target.closest('.card');
      const title = parent.querySelector('.card__title');
      const size = parent.querySelector('.card-sizes__btn.active');
      const oldPrice = parent.querySelector('.card-price__old');
      const newPrice = parent.querySelector('.card-price__new');
      const img = parent.querySelector('.card-head__img');
      btn.classList.contains('active') ?
        modalClose() :
          modalOpen(title, size, oldPrice, newPrice, img);
    })
  })
  modal.addEventListener('click', event => {
    const target = event.target;
    if(target.classList.contains('modal__close') || target.matches('.modal-wrapper') && !target.matches('.modal')) {
      modalClose();
    }
  })
}
const catalogTabs = () => {
  const tabs = document.querySelectorAll('.catalog__tab');
  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      if(!tab.classList.contains('active')) {
        tabs.forEach(tab => {
          tab.classList.remove('active');
        })
        tab.classList.add('active');
      }

    });
  });
}
const cardTabs = () => {
  const cards = document.querySelectorAll('.card');

  cards.forEach(card => {
    const btns = card.querySelectorAll('.card-sizes__btn');
    btns.forEach(btn => {
      btn.addEventListener('click', event => {
        const target = event.target;
        if(!target.matches('active')) {
          btns.forEach(btn => {
            btn.classList.remove('active');
          })
          btn.classList.add('active');
        }
      });
    });
  });
}
cardTabs();
catalogTabs();
modal();




btns.forEach(item => {
  item.addEventListener('click', e => {
    e.preventDefault();
  })
})