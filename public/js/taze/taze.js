let taze = async () => {
  let taze = "";
  try {
    let data = await fetch("http://localhost:3001/taze");
    let res = await data.json();

    taze = res.map((item) => {
      if (item.id < 9) {
        return `
              <div class="taze__image">
            <img src="${item.image}" alt="">
             <p>${item.text}</p>
            <span>${item.title}</span>
            <div class="cover__taze"></div>
          </div>`;
      } else {
        return `
        </br>
          `;
      }
    });
    document
      .querySelector(".taze .main__taze")
      .insertAdjacentHTML("afterbegin", taze.join(""));
  } catch (error) {
    console.log(error.message);
  }
};
export default taze;
