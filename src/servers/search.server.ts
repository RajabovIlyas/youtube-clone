import { fetcher } from "@/services/fetcher.service";
import { urlForSearchVariation } from "@/constants/endpoints-api.constant";

export const getSearchVariation = async (
  searchQuery: string,
): Promise<string[]> => {
  const data = await fetcher<[][]>(urlForSearchVariation(searchQuery));

  return data[1];
};
