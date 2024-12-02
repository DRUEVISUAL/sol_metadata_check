import readInput from './utils/readInput.js';
import createMetadataResponse from './utils/createMetadataResponse.js';

////////////////////////////////////////////////////////////////////////////////

(async () => {
	const input = await readInput('Enter token address: ');
	const result = await createMetadataResponse(input);
	console.log(result);
})();
