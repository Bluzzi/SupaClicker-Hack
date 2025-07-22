import { z } from "zod";
import "dotenv/config";

const schema = z.object({
  COOKIES: z.string(),
});

export const env = schema.parse(process.env);
