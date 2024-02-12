// Отключение полей и кнопок пока обрабатывается запрос
export const disableFormElements = (isDisable) => {
  const fields = document.querySelectorAll('input, textarea, .feedback__form-buttons-button');
  
  for (const field of fields) {
    isDisable
      ? field.setAttribute('disabled', '')
      : field.removeAttribute('disabled');
  }
};
// Добавление или удаление отображения ошибок
export const setErrors = (errors = {}) => {
  const errorLabels = document.querySelectorAll('.feedback__form-wrapper-error');

  for(const label of errorLabels) {
    const key = label.getAttribute('for').split('-').pop();
    
    if (errors[key]) {
      label.innerText = errors[key];
      label.parentElement.classList.add('error');
    } else {
      label.innerText = '';
      label.parentElement.classList.remove('error');
    }
  }
};
// Обработка финального сообщения об успешности регистрации
export const showEndMessage = (status, message = '') => {
  const endMessageBlock = document.querySelector('.feedback__form-success');
  const endMessage = endMessageBlock.querySelector('.feedback__form-success-message');

  switch (status) {
    case 'error':
      endMessageBlock.classList.add('show', 'error');
      endMessage.innerText = message;
      break;
    case 'success':
      endMessageBlock.classList.add('show', 'success');
      endMessage.innerText = message;
      break;
    case 'close':
      endMessageBlock.classList.remove('show', 'error', 'success');
      endMessage.innerText = message;
      break;
    default:
      endMessageBlock.classList.add('show');
      endMessageBlock.classList.remove('error', 'success');
      endMessage.innerText = message;
  }
};

export const addLoader = (parent) => {
  const loader = document.createElement('span');
  loader.className = 'loader';
  parent.append(loader);

  return loader;
};

export const showModal = (isShow) => {
  const modal = document.querySelector('.modal');
  const body = document.body;
  
  if (isShow) {
    modal.classList.add('show');
    body.classList.add('hide-scroll');
  } else {
    modal.classList.remove('show');
    body.classList.remove('hide-scroll');
  }
};
