"use client";

import { Button } from "react-bootstrap";
import Table from "react-bootstrap/Table";
import AppModal from "./app.modal";
import { useState } from "react";
import UpdateModal from "./update.modal";
interface IProps {
  blogs: IBlog[];
}

const AppTable = (props: IProps) => {
  const { blogs } = props;
  const [blog, setBlog] = useState<IBlog | null>(null);
  const [showCreateModal, setShowCreateModal] = useState(false);
  const [showUpdateModal, setShowUpdateModal] = useState(false);
  return (
    <div>
      <div
        style={{ display: "flex", justifyContent: "space-between" }}
        className="mb-3"
      >
        <h3>Table Blogs</h3>
        <Button onClick={() => setShowCreateModal(true)} variant="secondary">
          Add New
        </Button>
      </div>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Title</th>
            <th>Author</th>
            <th>Mode</th>
          </tr>
        </thead>
        <tbody>
          {blogs?.map((item) => {
            return (
              <tr key={item.id}>
                <td>{item.id}</td>
                <td>{item.title}</td>
                <td>{item.author}</td>
                <td>
                  <Button>View</Button>
                  <Button
                    onClick={() => {
                      setBlog(item);
                      setShowUpdateModal(true);
                    }}
                    variant="warning"
                    className="mx-3"
                  >
                    Edit
                  </Button>
                  <Button variant="danger">Delete</Button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </Table>
      <AppModal
        showModal={showCreateModal}
        setShowModal={setShowCreateModal}
      ></AppModal>
      <UpdateModal
        showModal={showUpdateModal}
        setShowModal={setShowUpdateModal}
        blog={blog}
        setBlog={setBlog}
      ></UpdateModal>
    </div>
  );
};

export default AppTable;
