import { PublicKey } from '@solana/web3.js';
import { CONNECTION, METAPLEX } from '../lib/constants.js';
import { GetMetadataResult } from '../lib/types.js';
import getHeliusMetadata from './getHeliusMetadata.js';

////////////////////////////////////////////////////////////////////////////////

export default async function createMetadataResponse(
	tokenAddress: string,
): Promise<GetMetadataResult> {
	const mintAddress = new PublicKey(tokenAddress);
	const tokenMetadata = await METAPLEX.nfts().findByMint({ mintAddress: mintAddress });

	let getMetadataResult: GetMetadataResult = {
		address: null,
		symbol: tokenMetadata.symbol,
		name: tokenMetadata.name,
		tokenSupply: null,
		decimals: null,
		pricePerToken: null,
		isMutable: tokenMetadata.isMutable,
		isMintable: tokenMetadata.mint.mintAuthorityAddress !== null,
		isFreezable: tokenMetadata.mint.freezeAuthorityAddress !== null,
		isPumpFun: tokenMetadata.json?.createdOn === 'https://pump.fun',
		telegram: String(tokenMetadata.json?.telegram),
		website: String(tokenMetadata.json?.website),
		twitter: String(tokenMetadata.json?.twitter),
	};

	if (tokenMetadata) {
		const heliusMetadata = await getHeliusMetadata(tokenAddress, getMetadataResult);

		if (
			tokenMetadata.json?.createdOn !== 'https://pump.fun' &&
			CONNECTION &&
			(tokenMetadata.json?.twitter !== 'undefined' ||
				tokenMetadata.json?.website !== 'undefined' ||
				tokenMetadata.json?.telegram !== 'undefined')
		) {
			getMetadataResult = heliusMetadata;
		}
	}
	return getMetadataResult;
}
