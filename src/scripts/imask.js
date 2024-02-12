import imask from 'imask';

export const addPhoneMask = () => {
  const phoneField = document.querySelector('#id-phone');
  imask(phoneField, {mask: '+{375} (00) 000-00-00'});
};
