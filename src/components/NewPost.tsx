import React from "react";

interface NewPost {
  title: string;
  body: string;
}
interface Props {
  newPostData: NewPost;
  setNewPostData: React.Dispatch<React.SetStateAction<NewPost>>;
}
const NewPost = ({ newPostData, setNewPostData }: Props) => {
  return (
    <form className='w-full text-center'>
      <div className='mb-4'>New Post</div>
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
  );
};

export default NewPost;
