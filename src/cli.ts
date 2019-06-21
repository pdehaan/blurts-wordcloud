#!/usr/bin/env node

import { scan, dataClassFrequency } from "./lib";

async function main(email: string): Promise<void> {
  const breaches = await scan(email);
  const wordmap = await dataClassFrequency(breaches);
  console.log(JSON.stringify(wordmap));
}

const [, , email = "test@test.com"] = process.argv;

main(email);
