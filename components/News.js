import React from "react";
import Newsitem from "./Newsitem";
import "./News.css";
function News() {
  let article = {
    urlToImage:
      "https://www.simplilearn.com/ice9/free_resources_article_thumb/what_is_image_Processing.jpg",
    title: "This is a title",
    description: "This is a description",
    url: "https://www.google.com",
  };
  return (
    <div className="news-container">
      <Newsitem article={article} />
      <Newsitem article={article} />
      <Newsitem article={article} />
      <Newsitem article={article} />
      <Newsitem article={article} />
      <Newsitem article={article} />
    </div>
  );
}

export default News;
