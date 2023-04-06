let launcherData = null;

(async () => {
	const response = await fetch("https://isro.vercel.app/api/launchers");
	launcherData = await response.json();
	displayLaunchers(launcherData.launchers);
})();

function displayLaunchers(list) {
	const launchersList = document.getElementById("launchers-list");
	launchersList.innerHTML = "";

	let output = "";
	list.forEach((launcher) => {
		output += `<li>${launcher.id}</li>`;
	});
	launchersList.innerHTML = output;
}
