export default function setAppFontFamily({ language }) {
  if (language.direction === "ltr") {
    document.getElementsByTagName('html')[0].style.fontFamily = "'Lato', sans-serif";
  } else {
    document.getElementsByTagName('html')[0].style.fontFamily = "iranyekan, sans-serif";
  }
}
