'use strict';
import { registration } from "../api/registration.js";
import {
  addLoader,
  disableFormElements,
  setErrors,
  showEndMessage,
  showModal
} from './dom-actions.js';

export const addListeners = () => {
  const feedbackForm = document.querySelector('.feedback__form');
  const formResetButton = feedbackForm.querySelector('.feedback__form-buttons-button.alt-button');
  const endMessageIcon = feedbackForm.querySelector('.feedback__form-success-icon');
  const endMessageButton = feedbackForm.querySelector('.feedback__form-success-button');
  const modal = document.querySelector('.modal');
  const modalOpenButton = document.querySelector('.modal-open-button');
  const modalCloseButton = document.querySelector('.modal__button');

  feedbackForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    // Достаются данные из формы и превращается в обычный объект
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData);
    const loaderNode = addLoader(endMessageIcon);
    // Обработка номера телефона после маски. Можно взять из модуля маски
    // но решил, что одной строчкой обработать проще
    if (data.phone) data.phone = data.phone.match(/\d+/g).join('');
    // Отображение окна со статусом обрабоки запроса
    showEndMessage();
    disableFormElements(true);
    const response = await registration(data);
    // Отображение ошибок, если они есть
    if (response.fields) {
      setErrors(response.fields);
      showEndMessage('close');
      disableFormElements(false);
    } else {
      // Если ошибок нет, отображает результат запроса
      showEndMessage(response.status, response.message);
    }
    // Сброс формы, если форма отправилась без ошибок
    if (response.status === 'success') {
      feedbackForm.reset();
      setErrors();
    }

    loaderNode.remove();
  });

  endMessageButton.addEventListener('click', () => {
    showEndMessage('close');
    disableFormElements(false);
  });

  modal.addEventListener('click', (e) => {
    if (e.target.classList.contains('modal')) {
      showModal(false);
    }
  });
  
  formResetButton.addEventListener('click', () => setErrors());
  modalOpenButton.addEventListener('click', () => showModal(true));
  modalCloseButton.addEventListener('click', () => showModal(false));
};
