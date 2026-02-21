import baseApi from "@/redux/api/baseApi";


export type Product = {
  id: number;
  title: string;
  price: number;
  description: string;
  images: string[];
};

export const productApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getProducts: builder.query<Product[], void>({
      query: () => "https://api.escuelajs.co/api/v1/products",
      providesTags: ["destination"],
    }),
  }),
});

export const { useGetProductsQuery } = productApi;