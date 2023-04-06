let centerData = null;

// Get DOM elements
const searchButton = document.getElementById("search-button");
const stateSelect = document.getElementById("state-select");
const centersList = document.getElementById("centers-list");

// iffie to fetch data from API
(async () => {
	const response = await fetch("https://isro.vercel.app/api/centres");
	centerData = await response.json();

	// Get unique states from the data
	const states = [...new Set(centerData.centres.map((center) => center.State))];

	// Create options for each state
	states.forEach((state) => {
		const option = document.createElement("option");
		option.value = state;
		option.textContent = state;
		stateSelect.appendChild(option);
	});

	displayCenters(centerData.centres);
})();

// Function to filter centers from all centers based on selected state
async function getCenters(state) {
	const centers = centerData.centres.filter((center) => {
		return center.State.toLowerCase() === state.toLowerCase();
	});

	return centers;
}

// Function to display centers on the page
function displayCenters(centers) {
	let output = "";
	centers.forEach((center) => {
		output += `
      <li class="center">
        <h3>${center.name}</h3>
        <p><strong>Place:</strong> ${center.Place}</p>
        <p><strong>State:</strong> ${center.State}</p>
      </li>
    `;
	});
	centersList.innerHTML = output;
}

// Event listener for search button
searchButton.addEventListener("click", async (e) => {
	e.preventDefault();
	const state = stateSelect.value;
	const centers = await getCenters(state);
	displayCenters(centers);
});
