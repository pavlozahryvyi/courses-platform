import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import type { CourseEntity } from "./courses.model";
import { coursesMockData } from "./courses.data";
import { coursesSlice } from "../store/courses.slice";
import { notificationSlice } from "../store/notification.slice";

export const coursesApi = createApi({
  reducerPath: "coursesApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://jsonplaceholder.typicode.com/",
  }),
  endpoints: (build) => ({
    handlePurchase: build.mutation<CourseEntity, number>({
      query: (id) => ({
        url: id === 3 ? "err" : `posts/${id}`,
        method: "PATCH",
        body: id,
      }),
      transformResponse: (response: { data: CourseEntity }, meta, arg) => {
        const selectedCourse = coursesMockData.find(
          (course) => course.id === arg
        );

        return selectedCourse as CourseEntity;
      },
      async onQueryStarted(arg, { dispatch, queryFulfilled }) {
        queryFulfilled
          .then(() => {
            const selectedCourse = coursesMockData.find(
              (course) => course.id === arg
            );

            dispatch(
              coursesSlice.actions.addCourse(selectedCourse as CourseEntity)
            );
          })
          .catch(() => {
            dispatch(
              notificationSlice.actions.setNotification({
                message: "Some error",
                severity: "error",
              })
            );
          });
      },
    }),
  }),
});

export const { useHandlePurchaseMutation } = coursesApi;
