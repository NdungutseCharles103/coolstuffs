import Router from "./node_modules/flamethrower-router/dist/main.js";
const router = Router();

console.log(router);
const atags = document.querySelectorAll(".navlinks");
// console.log(atags);
// const fetchHtml = async (url) => {
// 	const res = await fetch(url);
// 	// const data = await res.json()
// 	const html = await res.text();
// 	const parser = new DOMParser();
// 	const doc = parser.parseFromString(html, "text/html");
// 	console.log(doc);
// 	document.body = doc.body;

// 	// return doc;
// };

// const handleLinkClick = (e) => {
// 	e.preventDefault();
// 	console.log(e.target.textContent);
// 	const url = e.target.textContent;
// 	fetchHtml(`/Router/${url}.html`);
// };

atags.forEach((atag) => {
	atag.addEventListener("click", router.go('Router/about.html'));
});
