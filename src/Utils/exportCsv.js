const arrayToCsv = (headers, data) => {
  const csvRows = [];
  // getting headers.
  const headerValues = headers.map((header) => header.label);
  csvRows.push(headerValues.join(",")); // Push into array as comma separated values
  // Getting rows.
  for (const row of data) {
    const rowValues = headers.map((header) => {
      // const escaped = (' + row[header.key]).replace(/"/g, '\\"); // To replace the unwanted quotes.
      //return `"${escaped}"`; // To escape the comma in a address like string.
      const keys = header.key.split(".");

      if (keys.length == 1) {
        return row[keys[0]];
      } else if (keys.length == 2 && row[keys[0]]) {
        return row[keys[0]][keys[1]];
      } else if (keys.length == 3) {
        return row[keys[0]][keys[1]][keys[2]];
      } else if (keys.length == 4) {
        return row[keys[0]][keys[1]][keys[2]][keys[3]];
      } else if (keys.length == 5) {
        return row[keys[0]][keys[1]][keys[2]][keys[3]][keys[4]];
      }
    });
    csvRows.push(rowValues.join(",")); // Push into array as comma separated values.
  }
  return csvRows.join("\n"); // To enter the next rows in the new line '\n'
};
// Function to download the generated CSV as a .csv file.
const download = (data, fileName) => {
  const blob = new Blob([data], { type: "text/csv" });
  const url = window.URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.setAttribute("hidden", "");
  a.setAttribute("href", url);
  a.setAttribute("download", fileName + ".csv");
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
};
export const generateCSV = (header, data, filename) => {
  const csvData = arrayToCsv(header, data);
  download(csvData, filename);
};
