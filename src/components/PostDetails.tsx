import { useRouter } from "next/router";
import React from "react";

interface Props {
  title: string;
  body: string;
}
const PostDetails = ({ title, body }: Props) => {
  const router = useRouter();
  // if a new post is posted while in details page, the invalidation of the get-posts query does not lead to refetching, as a refetch happens when we navigate back to the posts page
  // This makes less api calls
  return (
    <div className='max-h-[85vh] overflow-y-auto min-h-[80%] px-6 py-4 bg-white text-black bg-zinc-100 rounded overflow-hidden shadow-md'>
      <div className='font-bold'>{title}</div>
      <div className='mt-2'>{body}</div>

      <div className='fixed bottom-3 left-0 flex w-full'>
        <button
          onClick={() => router.push("/posts")}
          className='mx-auto  bg-slate-500 hover:bg-slate-600 transition-all rounded px-4 py-1 text-white '>
          Back
        </button>
      </div>
    </div>
  );
};

export default PostDetails;
