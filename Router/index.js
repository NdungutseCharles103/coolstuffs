import Router from "./node_modules/flamethrower-router/dist/main.js";
const router = Router();

console.log(router);
const atags = document.querySelectorAll(".navlinks");
var queryString = window.location.search.slice(1);
console.log(queryString);
var obj = {};
queryString = queryString.split("#")[0];
var arr = queryString.split("&");

for (const q in arr) {
	const element = arr[q];
	var a = element.split("=");
	var paramName = a[0];
	var paramValue = typeof a[1] === "undefined" ? true : a[1];
	paramName = paramName.toLowerCase();
	if (typeof paramValue === "string") paramValue = paramValue.toLowerCase();

    if (paramName.match(/\[(\d+)?\]$/)) {
			var key = paramName.replace(/\[(\d+)?\]/, "");
			if (!obj[key]) obj[key] = [];

			if (paramName.match(/\[\d+\]$/)) {
				var index = /\[(\d+)\]/.exec(paramName)[1];
				obj[key][index] = paramValue;
			} else {
				obj[key].push(paramValue);
			}
		} else {
			if (!obj[paramName]) {
				obj[paramName] = paramValue;
			} else if (obj[paramName] && typeof obj[paramName] === "string") {
				obj[paramName] = [obj[paramName]];
				obj[paramName].push(paramValue);
			} else {
				obj[paramName].push(paramValue);
			}
		}
}

console.log(obj);
// console.log(router.);
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

// atags.forEach((atag) => {
// 	atag.addEventListener("click", router.go());
// });

// window.location.href.
