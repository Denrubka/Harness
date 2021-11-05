const btns = document.querySelectorAll('button');

const modal = () => {
  const cardBtns = document.querySelectorAll('.card__btn');
  const modal = document.querySelector('.modal-wrapper');


  const modalOpen = () => {
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
  }
  const modalClose = () => {
    modal.classList.remove('active');
    document.body.style.overflow = '';
  }

  cardBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      btn.classList.contains('active') ?
        modalClose() :
          modalOpen();
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
catalogTabs();
modal();




btns.forEach(item => {
  item.addEventListener('click', e => {
    e.preventDefault();
  })
})