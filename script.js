const data = {
    cities: [
      {
        section: "cupertino",
        label: "Cupertino",
      },
      {
        section: "new-york-city",
        label: "New York City",
      },
      {
        section: "london",
        label: "London",
      },
      {
        section: "amsterdam",
        label: "Amsterdam",
      },
      {
        section: "tokyo",
        label: "Tokyo",
      },
      {
        section: "hong-kong",
        label: "Hong Kong",
      },
      {
        section: "sydney",
        label: "Sydney",
      },
    ],
  };
  class Cities {
    constructor(cities) {
      this.cities = cities;
      this.slider = document.querySelector(".slider");
      this.result = document.querySelector(".result");
      this.activeTab;
    }
    init = () => {
      this.result.innerHTML = this.cities
        .map((city) => `<li>${city.label}</li>`)
        .join("");
      this.result.addEventListener("click", this.onClickCity);
      this.result.childNodes[0].click();
      window.addEventListener("resize", this.moveSlider);
    };
    onClickCity = ({ target }) => {
      if (target.nodeName === "LI" && target !== this.activeTab) {
        if (this.activeTab) {
          this.activeTab.classList.remove("active");
        }
        this.activeTab = target;
        target.classList.add("active");
        this.moveSlider();
      }
    };
    moveSlider = () => {
      const { offsetWidth, offsetLeft } = this.activeTab;
      this.slider.style.width = `${offsetWidth}px`;
      this.slider.style.marginLeft = `${offsetLeft}px`;
    };
  }
  const cities = new Cities(data.cities);
  cities.init();