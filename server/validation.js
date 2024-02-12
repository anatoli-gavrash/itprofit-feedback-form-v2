'use strict';
const isObjectEmpty = require('./utils.js');

const validation = ({name, email, phone, message}) => {
  const errors = {};

  if (!name) {
    errors.name = 'Обязательное поле';
  }

  if (!email) {
    errors.email = 'Обязательное поле';
  } else if (!/^[\.\w-]+@([\w-]+\.)+[\w-]{1,4}$/i.test(email)) {
    errors.email = 'Шаблон e-mail: <examlpe@mail.ru>';
  }

  if (!phone) {
    errors.phone = 'Обязательное поле';
  } else if (phone.length !== 12) {
    errors.phone = 'Длина нормера ровно 12 знаков'
  }

  if (!message) {
    errors.message = 'Обязательное поле';
  }

  return errors
};

module.exports = function getValidationErrors(form) {
  const errors = validation(form);
  const isErrors = !isObjectEmpty(errors);

  return [isErrors, errors];
};
