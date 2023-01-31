function toggleMode() {
  const html = document.documentElement

  html.classList.toggle("light")

  const img = document.querySelector("#profile img")

  if (html.classList.contains("light")) {
    img.setAttribute("src", "../assets/img/pedroBgLight.png")
    img.setAttribute(
      "alt",
      "Pedro sorrindo com fundo degradê de roxo para azul claro"
    )
  } else {
    img.setAttribute("src", "../assets/img/pedroBgDark.png")
    img.setAttribute("alt", "Pedro sorrindo com fundo laranja")
  }
}
