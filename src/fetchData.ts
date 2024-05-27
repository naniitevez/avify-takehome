import { Apiresponse, Generationmix } from "./types";

async function fetchData(): Promise<Generationmix[]> {
  const response = await fetch("https://api.carbonintensity.org.uk/generation");
  const data: Apiresponse = await response.json();
  return data.data.generationmix;
}

export default fetchData;
