import React from "react";
import "./Newsitem.css";
const Newsitem = (props) => {
  let { title, description, imageUrl, newsUrl } = props;
  return (
    <div className="news-card">
      <img
        src={
          !imageUrl
            ? "https://fdn.gsmarena.com/imgroot/news/21/08/xiaomi-smart-home-india-annoucnements/-476x249w4/gsmarena_00.jpg"
            : imageUrl
        }
        alt={title}
      />
      <h2>{title}</h2>
      <p>{description}</p>
      <a href={newsUrl} target="_blank" rel="noopener noreferrer">
        Read More
      </a>
    </div>
  );
};

export default Newsitem;
