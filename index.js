// http://api.weatherapi.com/v1/current.json?key=cad8c45718434d4e8c7132619262610&q=Nigeria&aqi=yes
const unitsBtn = document.getElementById("unitsBtn");
const unitsDropdownIcon = document.getElementById("unitDropdownIcon");
const unitsDropdown = document.getElementById("unitsdropdown");

console.log(document);

// Units Dropdown
const dropdownHandler = function () {
    unitsBtn.addEventListener("click", () => {
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
        metricsOPtions.classList.add("hover:bg-[#3d3b5e]");
      } else {
        // close
        unitsDropdown.classList.add(
          "opacity-0",
          "invisible",
          "-translate-y-2",
          "scale-95",
          "pointer-events-none"
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
}

dropdownHandler();

const hourlyBtn = document.getElementById("hourlyBtn");
const hourlyIcon = document.getElementById("hourlyIcon");
const hourDropdown = document.getElementById("hourDropdown");

hourlyBtn.addEventListener("click", () => {
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
});



// const apiKey = "cad8c45718434d4e8c7132619262610";
// const baseUrl = "http://api.weatherapi.com/v1/current.json";

// const getWeather = function () {
//     result = fetch(
//         `${baseUrl}?key=${apiKey}&q=Nigeria&aqi=yes`).then((response) => response.json()).then((data) => {
//           console.log(data);
//       });
// }

// getWeather();