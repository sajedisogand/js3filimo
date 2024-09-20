let special = async () => {
  let special = "";
  try {
    let data = await fetch("http://localhost:3001/special");
    let res = await data.json();
    
    special = res.map((item) => {
      if (item.id < 30) {
        return `
              <div class="img__special">
              <img src="${item.image}" alt="" />
              <span>${item.title}</span>
              <div class="cover"></div>
            </div>`;
      } else {
        return `
         <div class="end__special">
            <a href="#">مشاهده همه </a>
          </div>
          `;
      }
    });
    document
      .querySelector(".special .special__main .special__products")
      .insertAdjacentHTML("afterbegin", special.join(""));
  } catch (error) {
    console.log(error.message);
  }
};
export default special;
