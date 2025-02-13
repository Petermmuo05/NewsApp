// components/DeleteButton.js
"use client";

import Image from "next/image";
import DeleteIcon from "../../../public/delete.svg";
import { deleteArticle } from "../../../lib/actions";

export default function DeleteButton({ articleId }) {
  async function handleCallDelete() {
    try {
      const data = await deleteArticle(articleId);
      console.log("Deleted record:", data);
    } catch (error) {
      console.error("Delete failed:", error.message);
    }
  }

  return (
    <button onClick={handleCallDelete} className="delete-button">
      <Image src={DeleteIcon} alt="Delete" width={30} height={30} />
    </button>
  );
}
