const button = document.getElementById("button")
const name = document.getElementById("name")
const image = document.getElementById("image")

function usingApi(id) {
  const response = fetch(`https://rickandmortyapi.com/api/character/${id}`)
  .then((resp) => resp.json())
  .then((data) => (data))

  return response
}

button.addEventListener("click", async () => {
  const response = await usingApi(Math.floor(Math.random() * 827))
  if(response.name != null) {
    name.innerHTML = response.name
    image.setAttribute("src", response.image)
  }
  else {
    name.innerHTML = "Não há personagem com esse ID!"
    image.setAttribute("src", "")
  }
})
