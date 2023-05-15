import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query";

const cryptoApiHeader = {
  "X-RapidAPI-Key": "deec503e69msh9ce2aea4cb2b42ap152439jsnb4f0a92dd468",
  "X-RapidAPI-Host": "coinranking1.p.rapidapi.com",
};

const baseUrl = "https://coinranking1.p.rapidapi.com/coins";

const createRequest = (url) => ({ url, headers: cryptoApiHeader });

export const cryptoApi = createApi({
  reducerPath: "cryptoApi",
  baseQuery: fetchBaseQuery({ baseUrl }),
  endpoints: (builder) => ({
    getCryptos: builder.query({
      query: () => createRequest("/exchanges"),
    }),
  }),
});

// const options = {
//     method: 'GET',
//     url: 'https://coinranking1.p.rapidapi.com/coins',
//     params: {
//       referenceCurrencyUuid: 'yhjMzLPhuIDl',
//       timePeriod: '24h',
//       'tiers[0]': '1',
//       orderBy: 'marketCap',
//       orderDirection: 'desc',
//       limit: '50',
//       offset: '0'
//     },
//     headers: {
//       'X-RapidAPI-Key': 'deec503e69msh9ce2aea4cb2b42ap152439jsnb4f0a92dd468',
//       'X-RapidAPI-Host': 'coinranking1.p.rapidapi.com'
//     }
//   };
