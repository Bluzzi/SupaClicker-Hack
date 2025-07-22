import { api } from "./api";
import { payload } from "./payload";
import { createHmac } from "node:crypto";

// Base request data:
const actionType = "save";
const timestamp = Date.now();

// Create signature based on the crypto key:
const { cryptoKey } = await api.getCryptoKey();

const signature = createHmac("sha256", cryptoKey).update(JSON.stringify({
  type: actionType,
  payload: payload,
  timestamp: timestamp,
})).digest("hex");

// Save game stats:
await api.saveGame(JSON.stringify({
  data: {
    type: actionType,
    payload: payload,
  },
  timestamp: timestamp,
  signature: signature,
}));

console.log(`Success! ${api.URL}`);
