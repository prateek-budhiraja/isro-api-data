const spacecraftContainer = document.getElementById("spacecrafts-list");

async function fetchSpacecraftData() {
	const response = await fetch("https://isro.vercel.app/api/spacecrafts");
	const spacecraftData = await response.json();
	return spacecraftData;
}

function displaySpacecrafts({ spacecrafts }) {
	if (!spacecrafts) return;

	spacecraftContainer.innerHTML = "";

	spacecrafts.forEach((spacecraft) => {
		const spacecraftDetails = document.createElement("li");
		spacecraftDetails.innerHTML = spacecraft.name;

		spacecraftContainer.appendChild(spacecraftDetails);
	});
}

fetchSpacecraftData()
	.then((data) => displaySpacecrafts(data))
	.catch((error) => console.log(error));
