import { useMutation, useQuery, UseQueryOptions } from "@tanstack/react-query";
import { services, cashKey } from ".";
import { AxiosError, AxiosResponse } from "axios";

interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

export const useGetPosts = () =>
  useQuery({
    queryKey: [cashKey.getPosts],
    queryFn: () => services.GetPosts().then((res) => res.data),
    refetchOnWindowFocus: false,
  });

export const useGetPostById = (id: number) =>
  useQuery({
    queryKey: [cashKey.getPostByID],
    queryFn: () => services.GetPostsById(id).then((res) => res.data),
    refetchOnWindowFocus: false,
    enabled: id !== 0,
  });

export const useCreateNewPost = (newPostData: {
  title: string;
  body: string;
}) =>
  useMutation({
    mutationKey: [cashKey.createNewPost],
    mutationFn: () =>
      services.CreateNewPost(newPostData).then((res) => res.data),
  });
