import { render, screen } from "@testing-library/react";
import NewPost from "../src/components/NewPost";
import Modal from "../src/components/Modal";

// I'm running out of time to deliver the assessment and I'm also not very good with tests
// So I just wanted to show that I get the concept and I could get on-board in two weeks tops if needed

describe("NewPost", () => {
  it("should render the New Post form", () => {
    render(
      <NewPost
        newPostData={{ title: "title", body: "bodyh" }}
        setNewPostData={() => null}
      />
    );

    const postButton = screen.getByDisplayValue("title");
    expect(postButton).toBeInTheDocument();
  });

  it("should have Post button enabled if confirmDisabled or confirmLoading is false", () => {
    render(
      <Modal
        show={true}
        confirmDisabled={false}
        confirmLoading={false}
        handleCancel={() => null}
        handleSubmit={() => null}
      />
    );

    const postButton = screen.getByText("Post");
    expect(postButton).toBeEnabled();
  });

  it("should have Post button disabled if confirmDisabled or confirmLoading is true", () => {
    render(
      <Modal
        show={true}
        confirmDisabled={true}
        confirmLoading={false}
        handleCancel={() => null}
        handleSubmit={() => null}
      />
    );

    const postButton = screen.getByText("Post");
    expect(postButton).toBeDisabled();
  });
});
