let menu = async () => {
  let menu = "";
  try {
    let data = await fetch("http://localhost:3001/menu");
    let res = await data.json();
    menu = res.map((item) => {
      if (item.dropdown.length > 0) {
        return `
        <div class="menu__item">
            <a href="${item.link}" class="menu__item__link">${item.name}
           </a> <span><svg xmlns:xlink="http://www.w3.org/1999/xlink" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="13" height="13"><defs><g id="ui-icon-arrow_down_ios" viewBox="0 0 24 24"><path d="M12 17a1 1 0 0 1-.73-.32l-7.5-8A1 1 0 1 1 5.23 7.32L12 14.54l6.77-7.22a1 1 0 1 1 1.46 1.36l-7.5 8A1 1 0 0 1 12 17Z"></path></g></defs><g fill="#FFFFFF"><path d="M12 17a1 1 0 0 1-.73-.32l-7.5-8A1 1 0 1 1 5.23 7.32L12 14.54l6.77-7.22a1 1 0 1 1 1.46 1.36l-7.5 8A1 1 0 0 1 12 17Z"></path></g></svg></span>
            <div class="submenu">
           ${item.dropdown
             .map((child) => {
               return `<div class="sub__item"><a href="${child.link}">${child.name}</a></div>`;
             })
             .join("")}
          </div></div>`;
      } else {
        return `
         <div class="menu__item">
            <a href="${item.link}" class="menu__item__link">${item.name}</a>
          </div>
          `;
      }
    });
    document
      .querySelector(".menu .main__menu")
      .insertAdjacentHTML("afterbegin", menu.join(""));
  } catch (error) {
    console.log(error.message);
  }
};
export default menu;
