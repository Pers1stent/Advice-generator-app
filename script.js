const dice = document.querySelector(".dice");
const apiUrl = "https://api.adviceslip.com/advice";

const container = document.querySelector(".generates");

const generateMarkup = function (data) {
  const markup = `
      <div class="generates">
          <div class="id">ADVICE #${data.slip.id}</div>
          <div class="advice">
              <p>
              "${data.slip.advice}"
              </p>
          </div>
      </div>
      `;

  container.innerHTML = "";
  container.insertAdjacentHTML("afterbegin", markup);
};

const fetchData = async function () {
  const response = await fetch(apiUrl);
  const data = await response.json();
  generateMarkup(data);
};

fetchData();

dice.addEventListener("click", fetchData);
