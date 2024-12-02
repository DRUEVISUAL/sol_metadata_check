import { HELIUS } from '../lib/constants';
import { GetMetadataResult } from '../lib/types';

////////////////////////////////////////////////////////////////////////////////

export default async function getHeliusMetadata(
	tokenAddress: string,
	resultObject: GetMetadataResult,
): Promise<GetMetadataResult> {
	try {
		const response = await HELIUS.rpc.getAsset({ id: tokenAddress });

		resultObject.pricePerToken = response.token_info?.price_info?.price_per_token;
		resultObject.tokenSupply = response.token_info?.supply;
		resultObject.decimals = response.token_info?.decimals;
		resultObject.address = tokenAddress;
	} catch (error) {
		console.error("Couldn't fetch metadata: ", error);
	}

	return resultObject;
}
