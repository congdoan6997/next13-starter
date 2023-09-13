"use client";

import { Button } from "react-bootstrap";
import Table from "react-bootstrap/Table";
import AppModal from "./app.modal";
import { useState } from "react";
interface IProps {
  blogs: IBlog[];
}

const AppTable = (props: IProps) => {
  const { blogs } = props;
  const [showModal, setShowModal] = useState(false);
  return (
    <div>
      <div
        style={{ display: "flex", justifyContent: "space-between" }}
        className="mb-3"
      >
        <h3>Table Blogs</h3>
        <Button onClick={() => setShowModal(true)} variant="secondary">
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
          {blogs?.map((blog) => {
            return (
              <tr key={blog.id}>
                <td>{blog.id}</td>
                <td>{blog.title}</td>
                <td>{blog.author}</td>
                <td>
                  <Button>View</Button>
                  <Button variant="warning" className="mx-3">
                    Edit
                  </Button>
                  <Button variant="danger">Delete</Button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </Table>
      <AppModal showModal={showModal} setShowModal={setShowModal}></AppModal>
    </div>
  );
};

export default AppTable;
