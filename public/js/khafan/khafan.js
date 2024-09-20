let khafan = async () => {
  let khafan = "";
  try {
    let data = await fetch("http://localhost:3001/khafan");
    let res = await data.json();

    khafan = res.map((item) => {
      if (item.id < 9) {
        return `
              <div class="khafan__img">
            <img src="${item.image}" alt="">
             <p>${item.text}</p>
            <span>${item.title}</span>
            <div class="cover__khafan"></div>
          </div>`;
      } else {
        return `
        </br>
          `;
      }
    });
    document
      .querySelector(".khafan .main__khafan")
      .insertAdjacentHTML("afterbegin", khafan.join(""));
  } catch (error) {
    console.log(error.message);
  }
};
export default khafan;
