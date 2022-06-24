// Suggestion Activity
const message = document.querySelector('.messageItem');
const button = document.querySelector('.messageBtn');
const getPicture = document.querySelector('#getPicture');

button.addEventListener('click', () => {
	fetch('https://apis.scrimba.com/bored/api/activity')
		.then((response) => response.json())
		.then((data) => {
			const item = data.activity.toLowerCase();
			message.innerHTML = `<div> Let's <span> ${item} with him/her </span> </div>`;
		});
});

// Submitted Form
let emailCollectorForm = document.getElementById('Email-Collector');
emailCollectorForm.addEventListener('submit', (event) => {
	event.preventDefault();

	let ourFormData = new FormData(event.target);

	let userFirstName = ourFormData.get('fullName');

	let userEmailAddress = ourFormData.get('emailAddress');

	let updatedHtmlContent = `
				<div style="text-align:center;background:lightgrey;padding:20px">
        <h2>Thank you, ${userFirstName}!</h2>
			
        <p>You're on your way to get your best partner</p>
        <p>You will get notified by our community staff via ${userEmailAddress}</p>
				</div>
    `;

	let updatedContentContainer = document.getElementById('Main-Content');
	updatedContentContainer.innerHTML = updatedHtmlContent;
});
