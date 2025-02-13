import React from "react";
import Userlayout from "../userlayout";
import AdminArticles from "../components/adminArticles";
import { fetchArticles } from "../../../lib/data-service";
import UserArticles from "../components/userArticles";
import Title from "./title";

export default async function ArticleList() {
  const articleData = await fetchArticles();

  return (
    <Userlayout isNav={true}>
      <div className="w-full flex flex-col gap-6 px-6 py-4 max-sm:p-5  text-[#58554c]">
        <div className="w-full">
          <Title/>
        </div>
        {/* <AdminTabs /> */}
        <UserArticles articleData={articleData} />
      </div>
    </Userlayout>
  );
}
