// http://api.weatherapi.com/v1/current.json?key=cad8c45718434d4e8c7132619262610&q=Nigeria&aqi=yes
const unitsBtn = document.getElementById("unitsBtn");
const unitsDropdownIcon = document.getElementById("unitDropdownIcon");
const unitsDropdown = document.getElementById("unitsdropdown");
const weatherMetric = document.querySelectorAll(".weather-metric");
const weatherMetricIcon = Array.from(document.querySelectorAll(".metric-icon"));

let alldata = {}
console.log(weatherMetricIcon);

// UNITS DROPDOWN HANDLER
const dropdownHandler = function () {
  const isClosed = unitsDropdown.classList.contains("invisible");

  if (isClosed) {
    // open
    unitsDropdown.classList.remove(
      "opacity-0",
      "invisible",
      "-translate-y-2",
      "scale-95",
      "pointer-events-none",
    );
    unitsDropdown.classList.add(
      "opacity-100",
      "visible",
      "translate-y-0",
      "scale-100",
    );
    unitsDropdownIcon.classList.add("rotate-180");

    document.querySelectorAll(".weather-metric").forEach((metric) => {
      metric.addEventListener("click", () => {
        const groupContainer = metric.parentElement;

        let text = metric.textContent.includes("Celsius")
          ? "C"
          : `${metric.textContent.includes("Fahrenheit") && "F"}`;
        // console.log(text);

        if (text === "C") {
          tempValue.innerText = `${alldata.current.temp_c}°C`;
          feelsLikeValue.innerText = `${alldata.current.feelslike_c} °C`;
        } else if (text === "F") {
          tempValue.innerText = `${alldata.current.temp_f}°F`;
          feelsLikeValue.innerText = `${alldata.current.feelslike_c} °F`;
        } else {
          tempValue;
        }

        let windText = metric.textContent.includes("km/h")
          ? "km/h"
          : `${metric.textContent.includes("mph") && "mph"}`;

        if (windText == "km/h") {
          windValue.innerText = `${alldata.current.wind_kph} kph`;
        } else if (windText === "mph") {
          windValue.innerText = `${alldata.current.wind_mph} mph`;
        } else {
          windValue;
        }

        let pptText = metric.textContent.includes("Millimeters")
          ? "mm"
          : `${metric.textContent.includes("Inches") && "in"}`;

        if (pptText == "mm") {
          pptValue.innerText = `${alldata.current.precip_mm} mm`;
        } else if (pptText === "in") {
          pptValue.innerText = `${alldata.current.precip_in} in`;
        } else {
          pptValue;
        }

        groupContainer.querySelectorAll(".weather-metric").forEach((m) => {
          m.querySelector(".metric-icon")?.classList.add("hidden");
        });
        metric.querySelector(".metric-icon")?.classList.remove("hidden");
      });
    });

    // Closing the units dropdown on outside click
    document.addEventListener("click", (e) => {
      if (!unitsBtn.contains(e.target) && !unitsDropdown.contains(e.target)) {
        unitsDropdown.classList.add(
          "opacity-0",
          "invisible",
          "-translate-y-2",
          "scale-95",
          "pointer-events-none",
        );
        unitsDropdown.classList.remove(
          "opacity-100",
          "visible",
          "translate-y-0",
          "scale-100",
        );
        unitsDropdownIcon.classList.remove("rotate-180");
      }
    });
  } else {
    // close
    unitsDropdown.classList.add(
      "opacity-0",
      "invisible",
      "-translate-y-2",
      "scale-95",
      "pointer-events-none",
    );
    unitsDropdown.classList.remove(
      "opacity-100",
      "visible",
      "translate-y-0",
      "scale-100",
    );
    unitsDropdownIcon.classList.remove("rotate-180");
  }
};

unitsBtn.addEventListener("click", dropdownHandler);

// HOURLY FORECAST HANDLER
const hourlyBtn = document.getElementById("hourlyBtn");
const hourlyIcon = document.getElementById("hourlyIcon");
const hourDropdown = document.getElementById("hourDropdown");
const days = document.querySelectorAll(".day");

const hourlyDropdownHandler = function () {
  const isTrue = hourDropdown.classList.contains("invisible");

  if (isTrue) {
    hourDropdown.classList.remove(
      "opacity-0",
      "invisible",
      "-translate-y-2",
      "scale-95",
      "pointer-events-none",
    );

    hourDropdown.classList.add(
      "opacity-100",
      "visible",
      "translate-y-0",
      "scale-100",
    );

    hourlyIcon.classList.add("rotate-180");

    for (const day of days) {
      day.addEventListener("click", () => {
        document.getElementById("dayselect").innerText = day.innerText;

        hourDropdown.classList.add(
          "opacity-0",
          "invisible",
          "-translate-y-2",
          "scale-95",
          "pointer-events-none",
        );

        hourDropdown.classList.remove(
          "opacity-100",
          "visible",
          "translate-y-0",
          "scale-100",
        );

        hourlyIcon.classList.remove("rotate-180");
      });
    }

    // Closing the hourly dropdown on outside click
    document.addEventListener("click", (e) => {
      if (!hourlyBtn.contains(e.target) && !hourDropdown.contains(e.target)) {
        hourDropdown.classList.add(
          "opacity-0",
          "invisible",
          "-translate-y-2",
          "scale-95",
          "pointer-events-none",
        );

        hourDropdown.classList.remove(
          "opacity-100",
          "visible",
          "translate-y-0",
          "scale-100",
        );

        hourlyIcon.classList.remove("rotate-180");
      }
    });
  } else {
    hourDropdown.classList.add(
      "opacity-0",
      "invisible",
      "-translate-y-2",
      "scale-95",
      "pointer-events-none",
    );

    hourDropdown.classList.remove(
      "opacity-100",
      "visible",
      "translate-y-0",
      "scale-100",
    );

    hourlyIcon.classList.remove("rotate-180");
  }
};

hourlyBtn.addEventListener("click", hourlyDropdownHandler);

// WORKING ON METRICES
const apiKey = "cad8c45718434d4e8c7132619262610";

const baseUrl = "https://api.weatherapi.com/v1/forecast.json";

const getWeather = function (city) {
  const result = fetch(`${baseUrl}?key=${apiKey}&q=${city}&aqi=yes&days=7`)
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      alldata = data;
      // console.log(typeof data);
      locationName.innerText = `${alldata.location.country}, ${alldata.location.name}`;
      date.innerText = `Todays Date, ${alldata.forecast.forecastday[0].date}`;
      tempValue.innerText = `${alldata.current.temp_c}°`;
      feelsLikeValue.innerText = alldata.current.feelslike_c;
      humidityValue.innerText = `${alldata.current.humidity}%`;
      windValue.innerText = alldata.current.wind_kph;
      pptValue.innerText = `${alldata.current.precip_in}`;

      // // DAILY FORECAST
      // const dailyCards = document.querySelectorAll(".daily-card");
      // const days = data.forecast.forecastday;
      // console.log(days);

      // dailyCards.forEach((card, index) => {
      //   const dayData = days[index];
      //   console.log(dayData);
      //   if (!dayData) {
      //     card.style.display = "none";
      //     return;
      //   }

      //   card.style.display = "flex";

      //   const dayName = new Date(dayData.date).toLocaleDateString("en-us", {
      //     weekday: "short",
      //   });

      //   card.querySelector("daily-day").innerText = dayName;
      //   card.querySelector("daily-icon").src =
      //     "https:" + dayData.day.condition.icon;
      //   card.querySelector("daily-high").innerText =
      //     Math.round(dayData.day.maxtemp_c) + "°";
      //   card.querySelector("daily-high").innerText =
      //     Math.round(dayData.day.mintemp_c) + "°";
      // });
    });
};

getWeather();

searchBtn.addEventListener("click", () => {
  getWeather(locationCollector.value);
});