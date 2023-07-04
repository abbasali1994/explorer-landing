export const EXPIRY_DURATION = 7 * 24 * 60 * 60 * 1000;

export const BASE_URL: { [key: string]: string } = {
  "Fetch Station": "https://fetchstation.azoyalabs.com/",
  Mintscan: "https://www.mintscan.io/fetchai",
};

export const ACTION_PARAM: { [key: string]: { [key: string]: string } } = {
  "Fetch Station": {
    transactions: "/mainnet/explorer/transactions/",
    account: "/mainnet/explorer/address/",
    validator: "/mainnet/validators/",
    proposals: "/mainnet/governance/",
    blocks: "/mainnet/explorer/block/",
  },
  Mintscan: {
    transactions: "/txs/",
    account: "/account/",
    validator: "/validators/",
    proposals: "/proposals/",
    blocks: "/blocks/",
  },
};

export const GA_MEASUREMENT_ID = "G-CFTEXMH6CG"; // YOUR_OWN_TRACKING_ID