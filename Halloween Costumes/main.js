const costumes = [
	{
		name: "Werewolf",
		comment: "You have a strong finger, you should be a werewolf.",
		image:
			"https://assets.codepen.io/671938/lauraflorey_a_cute_baby_in_a_werewolf_halloween_costume_--cha_4da3b285-331c-47b6-a812-20f28e13816c_0.png"
	},
	{
		name: "Witch",
		comment: "You're pretty magical, how about being a witch?",
		image:
			"https://assets.codepen.io/671938/lauraflorey_a_cute_baby_in_a_witch_costume_--chaos_80_--ar_43_cbaa2e2c-56c4-4553-9c97-b5994d029051_3.png"
	},
	{
		name: "Vampire",
		comment: "Your mysterious aura screams vampire!",
		image:
			"https://assets.codepen.io/671938/lauraflorey_an_adorable_baby_vampire_--chaos_80_--ar_43_--per_f867175c-e008-4eb3-96f6-7aa95d1c9225_0.png"
	},
	{
		name: "Ghost",
		comment: "Boo! You're a natural ghost!",
		image:
			"https://assets.codepen.io/671938/lauraflorey_an_adorable_baby_ghost_--chaos_80_--ar_43_--perso_91773b0a-c93d-4895-876e-bbcf0a552be2_1.png"
	},
	{
		name: "Zombie",
		comment: "That blank stare means you're perfect as a zombie.",
		image:
			"https://assets.codepen.io/671938/lauraflorey_an_adorable_baby_zombie_--chaos_80_--ar_43_--pers_bc3446db-875f-4036-b97a-ebbc0aa4be6c_3.png"
	}
];

function generateCostume() {
	const randomIndex = Math.floor(Math.random() * costumes.length);
	const costume = costumes[randomIndex];

	document.getElementById("result").innerText = costume.comment;
	const costumeImage = document.getElementById("costumeImage");
	costumeImage.src = costume.image;
	costumeImage.style.display = "block";
}
