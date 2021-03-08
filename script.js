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
      this.activeTab;
    }
    init = () => {
      const result = document.querySelector(".result");
      result.innerHTML = this.cities.map((city) => `<li>${city.label}</li>`).join("");
      result.addEventListener("click", this.onClickCity);
    };
    onClickCity = ({ target }) => {
     
    };
   
  }
  const cities = new Cities(data.cities);
  cities.init();