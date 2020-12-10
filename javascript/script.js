const tabChanging = () => {
  const tabs = document.getElementById('myTab').getElementsByClassName('nav-link');
  [...tabs].forEach((tab) => {
    tab.addEventListener('click', (event) => {
      event.preventDefault();
      const activeClass = document.querySelector('.active');
      const selectedTab = event.currentTarget;
      console.log(activeClass);


      activeClass.classList.remove("active");
      selectedTab.classList.add('active');
    });
  });
};
