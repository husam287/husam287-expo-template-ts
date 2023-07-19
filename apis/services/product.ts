import infintyPaginationMergeHandler from "@/utils/infintyPaginationMergeHandler";
import api from "@/apis";
import getSerializedQueryArgs from "@/utils/getSerializedQueryArgs";
import { GetAllProductParams, Product } from "../@types/product";
import { PaginatedResponse } from "../@types/general";

export const ProductApi = api.injectEndpoints({
  endpoints: (build) => ({
    getProducts: build.query<PaginatedResponse<Product>, GetAllProductParams>({
      query: ({ page = 1, page_size = 18, ...otherParams }) => ({
        url: "/products/",
        params: { page, page_size, ...otherParams },
      }),
      serializeQueryArgs: getSerializedQueryArgs,
      forceRefetch({ currentArg, previousArg }) {
        return currentArg?.page !== previousArg?.page;
      },
      merge: infintyPaginationMergeHandler,
      providesTags: ["Product"],
    }),
    getSpecificProduct: build.query({
      query: (productSlug) => ({
        url: `/products/${productSlug}/`,
      }),
    }),
    getProductSuggestionList: build.query({
      query: (search) => ({
        url: "/products/",
        params: {
          autocomplete: true,
          search,
        },
      }),
    }),
  }),
});

export const {
  useGetProductsQuery,
  useGetSpecificProductQuery,
  useGetProductSuggestionListQuery,
} = ProductApi;
