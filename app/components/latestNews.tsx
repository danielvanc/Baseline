import type { NewsItem } from "~/utils/news";

export default function LatestNews({ data }: { data: NewsItem[] }) {
  return (
    <section className="[& ">
      <h2 className="section-heading">Latest News</h2>
      <ul className=" text-white">
        {data.map((article) => (
          <li
            key={article.url}
            className="border-faded border-b-[1px] relative "
          >
            <a
              href={article.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block p-2 pl-0 hover:opacity-60"
            >
              {article.title}
            </a>
          </li>
        ))}
      </ul>
      <p className="p-2 pl-0">
        <a
          href="https://www.nba.com/news"
          rel="noopener noreferrer"
          target="_blank"
          className="text-white hover:opacity-60"
        >
          All latest news &raquo;
        </a>
      </p>
    </section>
  );
}
