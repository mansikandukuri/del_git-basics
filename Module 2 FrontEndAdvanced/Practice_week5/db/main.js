const btnFetch = document.querySelector(".btn-Fetch");
const ulContainer = document.querySelector(".user-lists");

btnFetch.addEventListener("click", function () {
  //console.log(this);
  const xhr = new XMLHttpRequest();
  const url = `http://localhost:3000/users`;

  xhr.open("GET", url);
  xhr.addEventListener("load", () => {
    const users = JSON.parse(xhr.responseText);

    users.foreach((user) => {
      const liEl = document.createElement("li");
      liEl.classList.add("list-group-item");
      liEl.innerHTML = `
                <p>${user.email} - ${user.age}</p>`;
      ulContainer.append(liEl);
    });
  });
  xhr.send();
  xhr.addEventListener("error", () => {
    console.error("Something bad happened");
  });
});
