function toggleMode() {
  const html = document.documentElement
  html.classList.toggle("light")
  //pegar tag img
  const img = document.querySelector("#profile img")
  
  //substituir a img
  if (html.classList.contains("light")) {
    //se estiver light mode, add imagem light
    img.setAttribute("src", "./assets/avatar-light.png")
    img.setAttribute("alt", "Imagem Mayk Brito de óculos")
  } else {
    //se estiver sem light mode, manter a imagem normal
    img.setAttribute("src", "./assets/avatar.png")

  }

  
}