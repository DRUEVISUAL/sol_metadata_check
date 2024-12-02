export type GetMetadataResult = {
	address: string | null;
	name: string | null;
	symbol: string | null;
	pricePerToken: number | undefined | null;
	tokenSupply: number | undefined | null;
	decimals: number | undefined | null;
	isMutable: boolean | null;
	isMintable: boolean | null;
	isFreezable: boolean | null;
	isPumpFun: boolean | null;
	website: string | null;
	telegram: string | null;
	twitter: string | null;
};
