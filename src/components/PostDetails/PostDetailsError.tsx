import React from "react";

interface Props {
  id: number;
}
const PostDetailsError = ({ id }: Props) => {
  return (
    <div className=''>
      an error occured while fetching the data with id {id}!
    </div>
  );
};

export default PostDetailsError;
