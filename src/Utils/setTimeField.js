const setTimeField = (dateStr) => {
  let date = new Date(dateStr);

  return `${
    date?.getHours() < 10 ? "0" + date?.getHours() : date?.getHours()
  }:${
    date?.getMinutes() < 10 ? "0" + date?.getMinutes() : date?.getMinutes()
  }:${date?.getSeconds() < 10 ? "0" + date?.getSeconds() : date?.getSeconds()}`;
};

export default setTimeField;
