'use string';

const requestURLs = [
	'https://ms0130k.github.io/invoices.json',
	'https://ms0130k.github.io/plays.json',
];
// const playsURL = 'https://ms0130k.github.io/plays.json';
// const invoicesURL = 'https://ms0130k.github.io/invoices.json';
// let plays;
// let invoice;
let datas = [];

function getData() {
	for (const i in requestURLs) {
		const request = new XMLHttpRequest();
		request.open('GET', requestURLs[i]);
		request.responseType = 'json';
		request.send();
		request.onload = () => (datas[i] = request.response);
	}
}
getData();
setTimeout(() => console.log(statement(datas[0], datas[1])), 200);

function statement(invoice, plays) {
	let totalAmount = 0;
	let volumeCredits = 0;
	let result = `청구 내역 (고객명: ${invoice.customer})\n`;
	const cormat = new Intl.NumberFormat('en-US', {
		style: 'currency',
		currency: 'USD',
		minimumFractionDigits: 2,
	}).format;

	return result;
}
