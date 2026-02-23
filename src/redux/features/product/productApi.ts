import baseApi from "@/redux/api/baseApi";

export type Product = {
  id: number;
  title: string;
  price: number;
  description: string;
  images: string[];
};

export type Category = {
  id: number;
  name: string;
};

export const productApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getProducts: builder.query<Product[], void>({
      query: () => "https://api.escuelajs.co/api/v1/products",
      providesTags: ["destination"],
    }),
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    getProductById: builder.query<any, number>({
      query: (id) => `https://api.escuelajs.co/api/v1/products/${id}`,
    }),
  }),
});

export const { useGetProductsQuery, useGetProductByIdQuery } = productApi;
