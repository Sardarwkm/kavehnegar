import { postsApi } from "@/api";
import ListItem from "@/src/components/ListItem";
import Loading from "@/src/components/Loading";
import React from "react";

interface PostType {
  userId: number;
  id: number;
  title: string;
  body: string;
}

const Posts = () => {
  const {
    status: getPostsStatus,
    data: postsData,
    error: getPostsError,
    isFetching: isGetPostsFetching,
    isRefetching: isGetPostsRefetching,
  } = postsApi.useGetPosts();

  if (getPostsStatus === "pending") return <Loading />;

  return (
    <div className='mt-10 flex h-screen px-4'>
      <div className='w-full md:w-10/12 lg:w-8/12 m-auto pb-12'>
        {postsData?.map((post: PostType, index: number) => {
          return (
            <ListItem
              key={post.id}
              id={post.id}
              index={++index}
              title={post.title}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Posts;
