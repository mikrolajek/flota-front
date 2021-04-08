const getTrueKeys = (obj: any): string[] => {
  return Object.keys(obj).filter((k) => {
    return obj[k] === true;
  });
};

export default getTrueKeys;
