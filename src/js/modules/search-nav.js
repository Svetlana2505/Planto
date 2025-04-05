function searchNav() {
  const search = document.querySelector(".search");
  const searchImg = document.querySelector(".search-img");

  searchImg.addEventListener("click", () => {
    search.classList.toggle("active");
  });
}

export default searchNav;
