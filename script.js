display = document.getElementsByClassName("display")[0];
let i = 1;
while (i <= 1000) {
  result = BigInt(2 ** i);
  display.innerHTML +=
    '<span style="display: block; margin: 0.5vw 0;">2 to the power of ' +
    i +
    " is " +
    result +
    "</span><br />";
  i++;
}
