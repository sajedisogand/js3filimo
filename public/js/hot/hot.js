let hot = async () => {
  let hot = "";
  try {
    let data = await fetch("http://localhost:3001/hot");
    let res = await data.json();

    hot = res.map((item) => {
      if (item.id < 9) {
        return `
              <div class="hot__image">
            <img src="${item.image}" alt="">
             <p>${item.text}</p>
            <span>${item.title}</span>
            <div class="cover__hot"></div>
          </div>`;
      } else {
        return `
        </br>
          `;
      }
    });
    document
      .querySelector(".hot .main__hot")
      .insertAdjacentHTML("afterbegin", hot.join(""));
  } catch (error) {
    console.log(error.message);
  }
};
export default hot;
