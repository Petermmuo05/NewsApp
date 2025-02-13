import React from "react";
import Userlayout from "../../userlayout";
import Image from "next/image";
import Img1 from "../../../../public/forward.svg";
import { fetchArticles, getArticleById } from "../../../../lib/data-service";
import RelatedArticles from "@/app/components/relatedArticles";
import Link from "next/link";

export default async function Article({ params }: { params: { id: string } }) {
  const { id: params_id } = params;
  const article = await getArticleById(params_id);
  const articleData = await fetchArticles();

  function formatDate(dateString: string): string {
    const date = new Date(dateString);

    return new Intl.DateTimeFormat("en-US", {
      weekday: "short", // "Sat"
      month: "long", // "April"
      day: "numeric", // "7"
      year: "numeric", // "2023"
    }).format(date);
  }

  return (
    <Userlayout isNav={false}>
      {article && (
        <div className="w-full flex flex-col gap-10 py-6 px-10 max-sm:px-1 items-start">
          <div className="flex w-[70%] max-sm:w-full max-lg:w-[80%] max-w-full bg-slate-400 overflow-hidden relative rounded-xl aspect-[16/9]">
            <Image
              src={article.image_url} // Replace with actual image path
              alt={article.title}
              className="object-cover"
              fill
            />
          </div>
          <div className="w-[65%] max-sm:w-[95%] flex flex-col gap-4 px-3">
            <div className="w-full text-[30px] text-black font-semibold max-sm:text-[23px]">
              {article.title}
            </div>
            <div className="w-full text-[15px] max-sm:text-[12px] text-[#9B9483] font-semibold">
              Peter Mmuo · {formatDate(article.created_at)}
              <span className="text-[14px] max-sm:text-[11px] pl-4 text-red-500">
                {article.category}
              </span>
            </div>
            <div
              className="text-[#9B9483] max-sm:text-[13px] "
              dangerouslySetInnerHTML={{ __html: article.content }}
            />{" "}
          </div>
          <div className="flex w-full flex-col justify-between gap-3 mt-10 h-[30vh]">
            <div className="flex flex-row text-[#9B9483]  font-semibold items-center justify-between">
              <div className="text-[20px]">Related News</div>
              <Link
                href={"/articlelist"}
                className="flex flex-row items-center text-[12px]"
              >
                <span> See all</span>
                <Image src={Img1} alt="button" width="15" height="15" />
              </Link>
            </div>
            <div className="flex flex-row gap-6 h-full w-full justify-between overflow-x-scroll scrollbar-hide">
              <RelatedArticles
                sortedArticles={articleData.filter((data) => {
                  if (data.id === article.id) {
                    return false;
                  } else return data.category === article.category;
                })}
              />
            </div>
          </div>
        </div>
      )}
    </Userlayout>
  );
}
