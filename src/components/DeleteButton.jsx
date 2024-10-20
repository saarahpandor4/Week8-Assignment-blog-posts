"use client";
import { redirect } from "next/navigation";

export default function DeleteButton({ comment_id, handleDelete }) {
  return (
    <>
      <div id="delete">
        <button
          className="deleteButton border-radius 5px, cursor-pointer font-bold"
          onClick={() => {
            handleDelete(comment_id);
          }}
        >
          {" "}
          Delete{" "}
        </button>
      </div>
    </>
  );
}
