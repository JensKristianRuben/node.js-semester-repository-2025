const copyRightPTag = document.getElementById("copyright-year");

const thisYear = new Date();
copyRightPTag.innerText += thisYear.getFullYear();
