export const isObjectEmpty = (object) => {
  for (const key in object) {
    if (Object.hasOwn(object, key)) {
      return false;
    }
  }

  return true;
};
