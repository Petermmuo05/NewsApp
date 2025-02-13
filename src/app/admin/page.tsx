import React from "react";
import Adminlayout from "./adminlayout";
import Link from "next/link";
import { auth } from "../../../lib/auth";
import { fetchAuthorArticles } from "../../../lib/data-service";
import Delete from "../../../public/delete.svg";
import Image from "next/image";
import { deleteArticle } from "../../../lib/actions";
import DeleteButton from "../components/deleteButton";
import AdminArticles from "../components/adminArticles";
import AdminTabs from "../components/adminTabs";
import { redirect } from "next/navigation";

export default async function Home() {
  const session = await auth(); // Check for session

  if (!session) {
    redirect("/login"); // Redirect if no session
  }
  const articleData = await fetchAuthorArticles();
  console.log(articleData, "articleData");

  return (
    <Adminlayout>
      <div className="w-full flex flex-col gap-6 px-6 py-4 max-sm:p-5  text-[#58554c]">
        <div className="w-full">
          <p className="text-[35px] font-bold">Your Articles</p>
          <p className="text-[13px] text-[]">
            What you've contributed to the community.
          </p>
        </div>
        <AdminTabs />
        <AdminArticles articleData={articleData} />
        <Link
          href="admin/compose"
          className="flex fixed bottom-10 right-10 max-sm:bottom-5 max-sm:right-5 items-center justify-center px-4 py-3 rounded-[30px] max-lg:text-[16px] text-[20px] bg-[#a9aff7] text-white"
        >
          + Compose
        </Link>
      </div>
    </Adminlayout>
  );
}
