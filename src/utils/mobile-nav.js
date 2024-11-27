//this is the beginning of this JavaScript file
  const mobileNav = () => {
  const headerBtn = document.querySelector(".header__bars");
  const mobileNav = document.querySelector("mobile-nav");
  const mobileLinks = document.querySelectorAll(".mobile-nav__link");

  //state
  let isMobileNavOpen = false;
  console.log(isMobileNavOpen);

  headerBtn.addEventListener("click", () => {
    isMobileNavOpen = !isMobileNavOpen;
    if (isMobileNavOpen) {
      mobileNav.style.display = "flex";
      document.body.style.overflowY = "hidden";
    } else {
      mobileNav.style.display = "none";
      document.body.style.overflowY = "auto";
    }
  });

  mobileLinks.forEach((Link) => {
    Link.addEventListener("click", () => {
      isMobileNavOpen = false;
      mobileNav.style.display = "none";
      document.body.style.overflowY = "auto";
    });
  });
};

export default mobileNav;
//this is the end of this JavaScript file
