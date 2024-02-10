import { isObjectEmpty } from "./utils";

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
  } else if (!/^\+375 ?\(\d{2}\) ?\d{3}-\d{2}-\d{2}$/.test(phone)) {
    errors.phone = 'Введите телефон в указанном формате'
  }

  if (!message) {
    errors.message = 'Обязательное поле';
  }

  return errors
};

export const getValidationErrors = (field) => {
  const errors = validation(field);
  const isErrors = !isObjectEmpty(errors);

  return [isErrors, errors];
};

