// http://api.weatherapi.com/v1/current.json?key=cad8c45718434d4e8c7132619262610&q=Nigeria&aqi=yes
const unitsBtn = document.getElementById("unitsBtn");
const unitsDropdownIcon = document.getElementById("unitDropdownIcon");
const unitsDropdown = document.getElementById("unitsdropdown");
const weatherMetric = document.querySelectorAll(".weather-metric");
const weatherMetricTextArray = Array.from(
  document.querySelectorAll(".weather-metric-text"),
);
const weatherMetricIcon = Array.from(document.querySelectorAll(".metric-icon"));

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

    weatherMetric.forEach((metric) => {
      metric.addEventListener("click", () => {
        const groupContainer = metric.parentElement;

        groupContainer.querySelectorAll(".weather-metric").forEach((metric) => {
          metric.querySelector(".metric-icon")?.classList.add("hidden");
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

const apiKey = "cad8c45718434d4e8c7132619262610";

const baseUrl = "https://api.weatherapi.com/v1/forecast.json";

const getWeather = function () {
  result = fetch(`${baseUrl}?key=${apiKey}&q=city&aqi=yes`)
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      console.log(data.current.feelslike_c);
      // console.log(data.current);
      // console.log(data.forecast);
    });
};

// getWeather();

searchBtn.addEventListener("click", () => {
  getWeather();
});