let footer = async () => {
  let footer = "";
  try {
    let data = await fetch("http://localhost:3001/footer");
    let res = await data.json();
    footer = res.map((item) => {
      if (item.dropdown.length > 0) {
        return `
        <div class="footer__right">
          <div><a href="${item.link}">${item.name}</a>
          <div class="footer__sub">
           ${item.dropdown
             .map((child) => {
               return `<a href="${item.link}">${item.name}</a>
          </div>`;
             })
             .join("")}
          </div></div>`;
      } else {
        return `
                   <div><a href="${item.link}">${item.name}</a></div>

          `;
      }
    });
    document
      .querySelector(".footer ")
      .insertAdjacentHTML("afterbegin", footer.join(""));
  } catch (error) {
    console.log(error.message);
  }
};
export default footer;
