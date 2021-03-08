const data = {
    cities: [
      {
        section: "cupertino",
        label: "Cupertino",
        timeZone: "America/Los_Angeles",
      },
      {
        section: "new-york-city",
        label: "New York City",
        timeZone: "America/New_York",
      },
      {
        section: "london",
        label: "London",
        timeZone: "Europe/London",
      },
      {
        section: "amsterdam",
        label: "Amsterdam",
        timeZone: "Europe/Amsterdam",
      },
      {
        section: "tokyo",
        label: "Tokyo",
        timeZone: "Asia/Tokyo",
      },
      {
        section: "hong-kong",
        label: "Hong Kong",
        timeZone: "Asia/Hong_Kong",
      },
      {
        section: "sydney",
        label: "Sydney",
        timeZone: "Australia/Sydney",
      },
    ],
  };

  class Cities {
    constructor(cities) {
      this.cities = cities;
      this.slider = document.querySelector(".slider");
      this.result = document.querySelector(".result");
      this.time = document.querySelector(".time");
      this.activeTab;
      this.timeInterval;
    }
    init = () => {
      // Rendering all cities
      this.result.innerHTML = this.cities
        .map((city) => `<li data-zone="${city.timeZone}">${city.label}</li>`)
        .join("");
      // Adding an event listener to ul
      this.result.addEventListener("click", this.onClickCity);
      // Click first element manually
      this.result.childNodes[0].click();
      // Adding resize event listener
      window.addEventListener("resize", this.moveSlider);
      // Update time on every second
      window.setInterval(this.updateTime, 1000);
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
    updateTime = () => {
      // Creating time based on time zone
      const timeInCity = new Date().toLocaleString("en-US", {
        timeZone: this.activeTab.getAttribute("data-zone"),
      });
      this.time.innerHTML = `Current time in ${this.activeTab.innerText} ${timeInCity}`;
    };
  }
  const cities = new Cities(data.cities);
  cities.init();