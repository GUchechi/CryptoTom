import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const cryptoNewsHeaders = {
  headers: {
    "X-BingApis-SDK": "true",
    "X-RapidAPI-Key": "deec503e69msh9ce2aea4cb2b42ap152439jsnb4f0a92dd468",
    "X-RapidAPI-Host": "bing-news-search1.p.rapidapi.com",
  },
};
