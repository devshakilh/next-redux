
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// Define a service using a base URL and expected endpoints
export const productsApi = createApi({
    reducerPath: "productsApi",
    baseQuery: fetchBaseQuery({ baseUrl: "https://online-shop-eta-mocha.vercel.app/" }),
    endpoints: (builder) => ({
        getAllProducts: builder.query({
            query: () => `products`,
        }),
    }),
});


export const { useGetAllProductsQuery } = productsApi;
