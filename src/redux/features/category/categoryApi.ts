import baseApi from "@/redux/api/baseApi";


export type Category = {
  id: number;
  name: string;
  image: string;          
  creationAt?: string;   
  updatedAt?: string;
};

export const categoryApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
     getCategories: builder.query<Category[], void>({
      query: () => "https://api.escuelajs.co/api/v1/categories",
      providesTags: ["Categories"],
    }),
  }),
});

export const {useGetCategoriesQuery } = categoryApi ;