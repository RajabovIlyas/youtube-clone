export const fetcher = async <T>(input: RequestInfo, init?: RequestInit) => {
  const response = await fetch(input, { ...init, cache: "no-cache" });

  if (!response.ok) {
    throw response;
  }

  return response.json() as Promise<T>;
};
