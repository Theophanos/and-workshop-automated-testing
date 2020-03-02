module.exports = function greeting(name = "my friend") {
  if (typeof name === "string") name = [name];

  const out = "Hello, ";

  let nStr = "";

  for (const j in name) {
    nStr = `${nStr + name[j]}${
      parseInt(j, 10) + 2 === name.length
        ? ", and "
        : parseInt(j, 10) + 1 === name.length
        ? ""
        : ", "
    }`;
  }

  if (nStr.toUpperCase() === nStr) return `HELLO ${nStr}!`;

  return `${out}${nStr}.`;
};
