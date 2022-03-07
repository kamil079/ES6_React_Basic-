let quoteEl = document.querySelector("#quote");

let txt = `"Myślę, że jest wiele piękna
 w posiadaniu problemów.
 To jeden ze sposobów w jaki się uczymy"
 Herbie Hancock`;

let foo = () => {
  console.log(txt);
  quoteEl.innerText = txt;
};

foo();
