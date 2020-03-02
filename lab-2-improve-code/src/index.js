module.exports = function greeting(i = "my friend") {
  if (typeof i === "string") {
    i = [i];
  }

  let nStr = "";
  for (const j in i) {
    nStr =
      nStr +
      i[j] +
      (parseInt(j, 10) + 2 === i.length
        ? ", and "
        : parseInt(j, 10) + 1 === i.length
        ? ""
        : ", ");
  }

  if (nStr.toUpperCase() === nStr) return `HELLO ${nStr}!`;

  return `Hello, ${nStr}.`;
};
