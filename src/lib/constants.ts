import { Connection } from '@solana/web3.js';
import { Helius } from 'helius-sdk';
import { Metaplex } from '@metaplex-foundation/js';

////////////////////////////////////////////////////////////////////////////////

export const HELIUS_API_KEY = '7eb2382c-7ceb-4bfd-83b8-617391d6a123';

export const HELIUS_HTTPS = `https://mainnet.helius-rpc.com/?api-key=${HELIUS_API_KEY}`;

export const CONNECTION = new Connection(HELIUS_HTTPS);

export const HELIUS = new Helius(HELIUS_API_KEY, 'mainnet-beta');

export const METAPLEX = Metaplex.make(CONNECTION);
