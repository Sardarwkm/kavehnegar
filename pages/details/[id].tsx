import React, { useLayoutEffect, useState } from "react";
import { postsApi } from "@/api";
import { useRouter } from "next/router";
import PostDetails from "@/src/components/PostDetails";
import ShowError from "@/src/components/ShowError";
import Loading from "@components/Loading";

// I could have used a file in tha same route as posts page and use it dynamic rout
// but since I was asked to implement a seperate page for the details, here we go
const Details = () => {
  const [id, setId] = useState<number>(0);
  const router = useRouter();
  const {
    status: postStatus,
    data: postData,
    error: postError,
  } = postsApi.useGetPostById(id);

  useLayoutEffect(() => {
    console.log(router.query.id);
    if (router.query.id) setId(+router.query.id);
  }, [router.query.id]);

  if (postStatus === "pending") return <Loading />;
  if (postError) return <ShowError />;
  return (
    <div className='mt-6 flex px-4'>
      <div className='md:w-3/4 mx-auto lg:mt-4 '>
        <PostDetails title={postData.title} body={postData.body} />
      </div>
    </div>
  );
};

export default Details;
