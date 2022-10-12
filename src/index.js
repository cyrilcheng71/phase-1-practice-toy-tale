let addToy = false;

document.addEventListener("DOMContentLoaded", () => {
  const addBtn = document.querySelector("#new-toy-btn");
  const toyFormContainer = document.querySelector(".container");
  addBtn.addEventListener("click", () => {
    // hide & seek with the form
    addToy = !addToy;
    if (addToy) {
      toyFormContainer.style.display = "block";
    } else {
      toyFormContainer.style.display = "none";
    }
  });
});

// document.addEventListener("DOMContentLoaded", () => {
//   document.querySelector('form').addEventListener('submit', )
// })






function getAllToy(){
  fetch("http://localhost:3000/toys")
  .then((res) => res.json())
  .then((toy) => addToyCollection(toy))

}




function addToyCollection(toys, i) {
  toys.forEach((toy) => {
    divTag = document.createElement("div");
    h2Tag = document.createElement("h2");
    imgTag = document.createElement("img");
    pTag = document.createElement("p");
    buttonTag = document.createElement("button");
    spanTag = document.createElement("span");
    let likeCount = 0;

    divTag.className = "card";
    h2Tag.textContent = `${toy.name}`;
    imgTag.src = `${toy.image}`;
    imgTag.className = "toy-avatar";
    spanTag.innerHTML = `${likeCount} Likes`;
    spanTag.className = `unique-id-${toy.id}`;
    pTag.append(spanTag);
    buttonTag.className = "like-btn";
    buttonTag.id = `${toy.id}`;
    buttonTag.textContent = "Like ❤️";
    buttonTag.addEventListener("click", likeFunction);


function likeFunction(){
  likeCount++;
  const span =  document.querySelector(`.unique-id-${toy.id}`);
  span.textContent =`${likeCount} Likes`;

  fetch(`http://localhost:3000/toys/${toy.id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json",
        },
        body: JSON.stringify({
          likes: likeCount,
        }),
      });
    }

    toyCollectionDiv.append(divTag);
    divTag.append(h2Tag, imgTag, pTag, buttonTag);
  });
}


//ADD NEW TOY FUNCTION


const addToyForm =document.querySelector(".add-toy-form");
addToyForm.addEventListener("submit" , handleSubmit);


function handleSubmit(e){
e.preventDafault();
let newToyObj ={
  id :"",
  name: e.target.name.value,
  image: e.target.name.value,
  likes: 0,
};
addToyForm.reset();

fetch("http://localhost:3000/toys" ,  {
  method: "POST",
  headers:{
    "Content-Type": "application/json",
    "Accept": "application/json",
  },
  body: JSON.stringify(newToyObj)
})

}
  

