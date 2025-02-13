"use client";

import { useState } from "react";
import ReactQuill from "react-quill-new";
import "react-quill-new/dist/quill.snow.css";
import { addArticle } from "../../../../lib/actions";

export default function Editor() {
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");
  const [content, setContent] = useState("");
  const [image, setImage] = useState<File | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [message, setMessage] = useState("");

  const handleFormSubmit = async (formData: FormData) => {
    setIsSubmitting(true);
    setMessage("");

    try {
      await addArticle(formData, content);
      setMessage("Article saved successfully!");
      setTitle("");
      setContent("");
      setCategory("");
      setImage(null);
    } catch (error) {
      setMessage(
        error instanceof Error ? error.message : "Something went wrong"
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div>
      <form action={handleFormSubmit} className="flex gap-4 flex-col">
        <div>
          <label htmlFor="title" className="font-bold">
            Title:
          </label>
          <input
            type="text"
            id="title"
            name="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="border px-2 ml-3 rounded-md"
            required
          />
        </div>
        <div>
          <label htmlFor="category" className="font-bold">
            Category:
          </label>
          <select
            id="category"
            name="category"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="border px-2 ml-3 rounded-md"
            required
          >
            <option value="" disabled>
              Select a category
            </option>
            <option value="Sports">Sports</option>
            <option value="Social">Social</option>
            <option value="Education">Education</option>
          </select>
        </div>
        <div>
          <label htmlFor="image" className="font-bold">
            Upload Image:
          </label>
          <input
            type="file"
            id="image"
            name="image"
            accept="image/*"
            onChange={(e) => setImage(e.target.files?.[0] || null)}
            className="border px-2 ml-3 rounded-md"
          />
        </div>
        <ReactQuill
          theme="snow"
          value={content}
          onChange={setContent}
          style={{ height: "300px", marginBottom: "50px" }}
        />

        <button
          type="submit"
          disabled={isSubmitting}
          className={`${
            isSubmitting && "bg-gray-500"
          } bg-blue-300 rounded-xl px-5 py-2 w-fit self-end cool-button`}
        >
          {isSubmitting ? "Submitting..." : "Submit"}
        </button>
      </form>

      {message && <p className="mt-4 text-center text-red-500">{message}</p>}
    </div>
  );
}
