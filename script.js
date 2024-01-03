const id = document.getElementById("id")
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
  const response = await usingApi(id.value)
  if(response.name != null) {
    name.innerHTML = response.name
    image.setAttribute("src", response.image)
  }
  else {
    name.innerHTML = "Out of index"
    image.setAttribute("src", null)
  }
})

