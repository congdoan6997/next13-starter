"use client";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import { toast } from "react-toastify";
import { mutate } from "swr";
interface IProps {
  showModal: boolean;
  setShowModal: (value: boolean) => void;
}

const AppModal = (props: IProps) => {
  const { showModal, setShowModal } = props;
  const [title, setTitle] = useState<string>("");
  const [author, setAuthor] = useState<string>("");
  const [content, setContent] = useState<string>("");
  const handleSubmit = async () => {
    if (!title || !author || !content) {
      toast.error("Input....");
      return false;
    }
    try {
      const response = await fetch("http://localhost:8000/blogs", {
        method: "POST", // or 'PUT'
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ title, author, content }),
      });

      const result = await response.json();
      console.log("Success:", result);
      toast.success("Created!");
      handleClear();
      mutate("http://localhost:8000/blogs");
    } catch (error) {
      toast.error(`${error}`);
    }
  };
  const handleClear = () => {
    setTitle("");
    setAuthor("");
    setContent("");
    setShowModal(false);
  };
  return (
    <>
      <Modal
        show={showModal}
        onHide={() => setShowModal(false)}
        backdrop="static"
        keyboard={false}
        size="lg"
      >
        <Modal.Header closeButton>
          <Modal.Title>Add New Blog</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3">
              <Form.Label>Title</Form.Label>
              <Form.Control
                type="text"
                placeholder="..."
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Author</Form.Label>
              <Form.Control
                type="text"
                placeholder="..."
                value={author}
                onChange={(e) => setAuthor(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Content</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                value={content}
                onChange={(e) => setContent(e.target.value)}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => handleClear()}>
            Close
          </Button>
          <Button onClick={() => handleSubmit()} variant="primary">
            Save
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default AppModal;
