const BASE_URL = 'https://thatcopy.pw/catapi/rest/';
const catbtn = document.getElementById ('change-cat');
const catimg = document.getElementById ('cat');

const getCats = async () => {
	try {
		const data = await fetch(BASE_URL);
		const json = await data.json();

		return json.webpurl;
	 }
	 	catch (e) {
		console.log(e.message);
	}
};

const loadImg = async () => {
	catimg.src = await getCats ();
};

catbtn.addEventListener ('click', loadImg);

loadImg();

