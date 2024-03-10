export const dateFormat = (date) => {
  const localdate = new Date(date).toLocaleString();

  let date1 = localdate?.split(",");

  let year = date1?.[0]?.split("/");
  let time = date1?.[1]?.split(":");

  return (
    year?.[2] +
    "/" +
    year?.[1] +
    "/" +
    year?.[0] +
    " " +
    time?.[0] +
    ":" +
    time?.[1]
  );
};
