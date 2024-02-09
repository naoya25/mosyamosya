import { PostType } from "@/types/post";
import React from "react";
import { format } from "date-fns";

const Card: React.FC<{ post: PostType }> = ({ post }) => {
  return (
    <div className="h-[400px] w-[313px] m-5" style={{boxShadow:"0 0 5px 5px rgba(192,192,192,0.5)"}}>
      <p>
        <img src={post.image} alt="no image" />
      </p>
      <p className="m-5 text-[0.8em]">{post.category}</p>
      <p className="m-5">{post.body}</p>
      <p className="m-5 text-right text-[0.8em]">{format(post.created_at, "yyyy.MM.dd")}</p>
    </div>
  );
};

export default Card;
