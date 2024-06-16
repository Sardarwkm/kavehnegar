import React, { useEffect, useState } from "react";
import NewPost from "../NewPost";
import Modal from "../Modal";
import { postsApi } from "@/api";
import { message } from "antd";

interface Post {
  title: string;
  body: string;
}
const initNewData = { title: "", body: "" };
const Layout = (props) => {
  const [newPostPopUp, setNewPostPopUp] = useState(false);
  const [newPostData, setNewPostData] = useState<Post>(initNewData);

  //  ***** Creating A New Document  *****
  const {
    status: createPostStatus,
    error: createPostError,
    mutate: createPostMutate,
  } = postsApi.useCreateNewPost(newPostData);

  const handleSubmit = () => {
    console.log("subbing");
    createPostMutate();
  };
  const handleCancel = () => {
    setNewPostData(initNewData);
    setNewPostPopUp(false);
  };

  useEffect(() => {
    if (createPostStatus === "success") {
      message.success("Posted");
      handleCancel();
    }
  }, [createPostStatus]);

  return (
    <div className=''>
      <div>{props.children}</div>
      <div className='fixed bottom-4 right-4'>
        <button
          onClick={() => setNewPostPopUp(true)}
          className='bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-full shadow-lg'>
          Add
        </button>
        <Modal
          show={newPostPopUp}
          confirmDisabled={
            !newPostData.title ||
            !newPostData.body ||
            createPostStatus === "pending"
          }
          handleCancel={handleCancel}
          handleSubmit={handleSubmit}>
          <form className='w-full text-center'>
            <div className='flex justify-between items-center'>
              <label htmlFor='title' className='w-1/12 text-left'>
                Title
              </label>
              <input
                id='title'
                type='text'
                className='w-11/12 h-10 border p-3 focus-within:outline-none focus-within:border-2'
                onChange={(e) =>
                  setNewPostData({ ...newPostData, title: e.target.value })
                }
                value={newPostData.title}
              />
            </div>
            <div className='flex justify-between items-center mt-2'>
              <label htmlFor='body' className='w-1/12 text-left'>
                Body
              </label>
              <textarea
                id='body'
                className='w-11/12 h-64 p-3 border focus-within:outline-none focus-within:border-2'
                onChange={(e) =>
                  setNewPostData({ ...newPostData, body: e.target.value })
                }
                value={newPostData.body}
              />
            </div>
          </form>
        </Modal>

        {/* <NewPost show={newPostPopUp} setShow={setNewPostPopUp} /> */}
      </div>
    </div>
  );
};

export default Layout;
