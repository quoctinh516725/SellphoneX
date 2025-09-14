import { api } from "../../services/api";

const categoriesApi = api.injectEndpoints({
  endpoints: (builder) => ({
    // Lấy tất cả categories
    getCategories: builder.query({
      query: (params) => ({
        url: "categories",
        params,
      }),
      providesTags: (result) =>
        result
          ? [
              ...result.map((category) => ({
                type: "Categories",
                id: category.id,
              })),
              { type: "Categories", id: "LIST" },
            ]
          : [{ type: "Categories", id: "LIST" }],
    }),

    // Lấy category theo ID
    getCategoryById: builder.query({
      query: (id) => ({
        url: `categories/${id}`,
      }),
      providesTags: (result, error, id) => [{ type: "Categories", id }],
    }),

    // Thêm mới category
    addCategory: builder.mutation({
      query: (data) => ({
        url: "categories",
        method: "POST",
        body: data,
      }),
      invalidatesTags: [{ type: "Categories", id: "LIST" }],
    }),

    // Cập nhật category
    updateCategory: builder.mutation({
      query: ({ id, ...data }) => ({
        url: `categories/${id}`,
        method: "PATCH",
        body: data,
      }),
      invalidatesTags: (result, error, { id }) => [
        { type: "Categories", id },
      ],
    }),

    // Xoá category
    deleteCategory: builder.mutation({
      query: (id) => ({
        url: `categories/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: (result, error, id) => [
        { type: "Categories", id },
        { type: "Categories", id: "LIST" },
      ],
    }),
  }),
});

export const {
  useGetCategoriesQuery,
  useGetCategoryByIdQuery,
  useAddCategoryMutation,
  useUpdateCategoryMutation,
  useDeleteCategoryMutation,
} = categoriesApi;
