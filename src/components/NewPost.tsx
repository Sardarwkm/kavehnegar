import { Modal } from "antd";
import React from "react";

const NewPost = ({ show, setShow }) => {
  const handleConfirm = () => {
    console.log("object");
  };
  return (
    <Modal
      open={true}
      //   maskClosable={false}
      onOk={handleConfirm}
      confirmLoading={false}
      onCancel={setShow(false)}
      okButtonProps={{
        disabled: false,
      }}
      className='text-center  w'
      okText='Post'
      cancelText='Cancel'
      title={"New Post"}>
      <div className='mb-3 rtl'>sdsd</div>
    </Modal>
  );
};

export default NewPost;
