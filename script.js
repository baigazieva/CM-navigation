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
      // Rendering all cities
      this.result.innerHTML = this.cities
        .map((city) => `<li>${city.label}</li>`)
        .join("");
      // Adding an event listener to ul
      this.result.addEventListener("click", this.onClickCity);
      // Click first element manually
      this.result.childNodes[0].click();
      // Adding resize event listener
      window.addEventListener("resize", this.moveSlider);
    };
    onClickCity = ({ target }) => {
      // if clicked element is li and it's not already active li.
      if (target.nodeName === "LI" && target !== this.activeTab) {
        // remove previous active class
        if (this.activeTab) {
          this.activeTab.classList.remove("active");
        }
        // set new active element
        this.activeTab = target;
        target.classList.add("active");
        // move slide
        this.moveSlider();
      }
    };
    moveSlider = () => {
      // get offset values from an active element
      const { offsetWidth, offsetLeft } = this.activeTab;
      // set width and marginLeft of a slider with activeTab offset values
      this.slider.style.width = `${offsetWidth}px`;
      this.slider.style.marginLeft = `${offsetLeft}px`;
    };
  }
  const cities = new Cities(data.cities);
  cities.init();