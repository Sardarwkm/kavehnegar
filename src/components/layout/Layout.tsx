import React, { ReactNode, useEffect, useState } from "react";
import Modal from "../Modal";
import { postsApi } from "@/api";
import toast, { Toaster } from "react-hot-toast";
import NewPost from "../NewPost";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { cashKey } from "@/api/postsServices";

interface Props {
  children: ReactNode;
}
interface Post {
  title: string;
  body: string;
}
const initNewData = { title: "", body: "" };

const Layout = ({ children }: Props) => {
  const [newPostPopUp, setNewPostPopUp] = useState(false);
  const [newPostData, setNewPostData] = useState<Post>(initNewData);
  const queryClient = useQueryClient();
  //  ***** Creating A New Post  *****
  const {
    status: createPostStatus,
    error: createPostError,
    mutate: createPostMutate,
  } = postsApi.useCreateNewPost(newPostData);

  const handleSubmit = () => {
    toast.loading("Posting!");
    createPostMutate();
  };
  const handleCancel = () => {
    setNewPostData(initNewData);
    toast.dismiss();
    setNewPostPopUp(false);
  };

  useEffect(() => {
    if (createPostStatus === "success") {
      queryClient.invalidateQueries({ queryKey: [cashKey.getPosts] });
      toast.dismiss();
      toast.success("Posted!");
      handleCancel();
    } else if (createPostStatus === "error") {
      toast.dismiss();
      toast.error("Something went wrong!");
    }
  }, [createPostStatus]);

  return (
    <div className=''>
      <div>{children}</div>
      <div className='fixed bottom-4 right-4'>
        <button
          onClick={() => setNewPostPopUp(true)}
          className='bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-full shadow-lg'>
          Add
        </button>
        <Modal
          show={newPostPopUp}
          confirmDisabled={!newPostData.title || !newPostData.body}
          confirmLoading={createPostStatus === "pending"}
          handleCancel={handleCancel}
          handleSubmit={handleSubmit}>
          <NewPost setNewPostData={setNewPostData} newPostData={newPostData} />
        </Modal>
      </div>
      <Toaster />
    </div>
  );
};

export default Layout;
