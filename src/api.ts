import { env } from "#/env";
import z from "zod";

const URL = "https://supaclicker.vercel.app";
const BASE_HEADERS = {
  "content-type": "application/json",
  "origin": "https://supaclicker.vercel.app",
  "cookie": env.COOKIES,
};

const getCryptoKey = async () => {
  const schema = z.object({ cryptoKey: z.string() });
  const response = await fetch(`${URL}/api/security/key`, {
    method: "POST",
    headers: BASE_HEADERS,
  });

  if (!response.ok) {
    throw Error(await response.text());
  }

  return schema.parse(await response.json());
};

const saveGame = async (payload: string) => {
  const response = await fetch("https://supaclicker.vercel.app/api/game/save", {
    method: "POST",
    headers: BASE_HEADERS,
    body: payload,
  });

  if (!response.ok) {
    throw Error(await response.text());
  }
};

export const api = {
  URL: URL,
  getCryptoKey,
  saveGame,
};
