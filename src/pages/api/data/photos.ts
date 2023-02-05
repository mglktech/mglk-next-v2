// Thanks to Valentin Hervieu for his amazing Website Picture Gallery Tutorial. This is exactly what I was looking for!
// https://medium.com/@ValentinHervieu/how-i-used-google-photos-to-host-my-website-pictures-gallery-d49f037c8e3c

import axios from 'axios';

const regex = /\["(https:\/\/lh3\.googleusercontent\.com\/[a-zA-Z0-9\-_]*)"/g; // the only difference is the [ at the beginning
function extractPhotos(content: string) {
	const links = new Set();
	let match;
	while ((match = regex.exec(content))) {
		links.add(match[1]);
	}
	return Array.from(links);
}

const Test = async (req: any, res: { json: (arg0: unknown[]) => void }) => {
	const id = 'e4ieegmgkLaMC7Wc6'; // My public google album ID
	const { data } = await axios.get(`https://photos.app.goo.gl/${id}`);
	const links = extractPhotos(data);
	const theImages = links.map((url) => ({
		original: `${url}=w1024`,
		thumbnail: `${url}=w100`,
	}));
	res.json(theImages);
	return;
};
export default Test;
