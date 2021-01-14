
const textarea = window.document.querySelector('textarea[data-key="cookies.txt"]');
const console  = chrome.extension.getBackgroundPage().console || window.console;



const toBuffer = (cookies) => {

	let str = '';

	str += '# Netscape HTTP Cookie File\n';
	str += '# http://curl.haxx.se/rfc/cookie_spec.html\n';
	str += '# This is a generated file! Do not edit.\n';
	str += '\n';

	cookies.forEach((cookie) => {

		str += cookie.domain;
		str += '\t';
		str += (cookie.hostOnly === true ? 'FALSE' : 'TRUE');
		str += '\t';
		str += cookie.path;
		str += '\t';
		str += (cookie.secure === true ? 'TRUE' : 'FALSE');
		str += '\t';
		str += cookie.expirationDate === undefined ? 0 : Math.round(cookie.expirationDate);
		str += '\t';
		str += cookie.name;
		str += '\t';
		str += cookie.value;

		str += '\n';

	});

	return str;

};


window.addEventListener('load', () => {

	chrome.tabs.query({
		active:        true,
		currentWindow: true
	}, (chrome_tabs) => {

		if (chrome_tabs.length > 0) {

			let tab_id = chrome_tabs[0].id;

			chrome.cookies.getAllCookieStores((chrome_stores) => {

				let store = chrome_stores.find((store) => store.tabIds.includes(tab_id)) || null;
				if (store !== null) {

					chrome.cookies.getAll({
						storeId: store.id
					}, (cookies) => {

						let buffer = toBuffer(cookies);
						let lines  = buffer.split('\n');

						let width  = 0;
						let height = 0;

						lines.forEach((line) => {
							width = Math.max(width, line.length);
							height++;
						});


						textarea.value = buffer;
						textarea.setAttribute('rows', height);
						textarea.setAttribute('cols', width);

					});

				}

			});

		}

	});

});

