import Image from "next/image";
import Userlayout from "./userlayout";
import { fetchArticles } from "../../lib/data-service";
import { convert } from "html-to-text";
import Link from "next/link";
import RelatedArticles from "./components/relatedArticles";
import SideArticles from "./components/sideArticles";
import Headline from "./components/headline";

export default async function Home() {
  const articleData = await fetchArticles();
  console.log(articleData);

  function extractPlainText(html: string): string {
    const text = convert(html, { wordwrap: false }).trim();
    return truncateText(text);
  }
  function truncateText(text: string | null, limit: number = 350): string {
    if (!text) return "";
    return text.length > limit ? text.slice(0, limit) + "..." : text;
  }

  // Get the latest article for the hero section
  const sortedArticles = articleData.sort(
    (a, b) => new Date(b.created_at) - new Date(a.created_at)
  );

  return (
    <Userlayout isNav={true}>
      <div className="w-full flex flex-col gap-6  text-[#58554c]">
        {articleData.length > 0 && (
          <>
            {" "}
            <Headline sortedArticles={sortedArticles} />
            <div className="flex flex-col justify-between px-6 gap-3 h-[39vh] max-800:h-[33vh]">
              <div className="flex flex-row  items-center justify-between ">
                <div className="font-bold text-[18px] max-lg:text-[17px]">
                  Latest News
                </div>
                <Link href={"/articlelist"} className="text-[12px]">
                  See all
                </Link>
              </div>
              <RelatedArticles sortedArticles={sortedArticles} />
            </div>
          </>
        )}
      </div>
    </Userlayout>
  );
}
