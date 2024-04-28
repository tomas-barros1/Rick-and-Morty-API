const button = document.getElementById("button")
const name = document.getElementById("name")
const image = document.getElementById("image")

async function fetchData(id) {
  const response = await fetch(`https://rickandmortyapi.com/api/character/${id}`);
  const data = await response.json(); 
  return data;
}

button.addEventListener("click", async () => {
  const response = await fetchData(Math.floor(Math.random() * 827))
  if (response.name != null) {
    name.innerHTML = response.name;
    image.setAttribute("src", response.image);
  }
  else {
    name.innerHTML = "Não há personagem com esse ID!";
    image.setAttribute("src", "");
  }
})
