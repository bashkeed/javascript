function checkColor(code) {
  if (code === 1) {
    console.log("red");
  } else if (code === 2) {
    console.log("blue");
  } else {
    console.log("incorrect code");
  }
}
checkColor(2);

function decodeColor(code) {
  switch (code) {
    case 1:
      console.log("Red");
      break;
    case 2:
      console.log("Yellow");
      break;
    case "x":
      console.log("Green");
      break;
    default:
      console.log("Unknown code");
  }
}decodeColor(10)
