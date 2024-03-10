export const capitalize = (name) => {
  if (name) {
    const nameList = name.split(" ");
    const capNameList = nameList.map(
      (each) => each.charAt(0).toUpperCase() + each.slice(1)
    );

    return capNameList.join(" ");
  }
  return "";
};
