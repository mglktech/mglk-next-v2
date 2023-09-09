import photos from '../../../lib/photos';

const Test = async (req: any, res: { json: (arg0: unknown[]) => void }) => {
	const data = await photos();
	if (!data) return res.json([]);
	return res.json(data);
};
export default Test;
