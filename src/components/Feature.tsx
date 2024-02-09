import React from "react";
import Card from "./Card";
import { PostType } from "@/types/post";

const Feature = () => {
  const posts: PostType[] = [
    {
      id: 1,
      body: "テキストテキスト",
      category: "category",
      image: "post-images/feature1.jpg",
      created_at: new Date(),
    },
    {
      id: 2,
      body: "テキストテキスト",
      category: "category",
      image: "post-images/feature2.jpg",
      created_at: new Date(),
    },
    {
      id: 3,
      body: "テキストテキスト",
      category: "category",
      image: "post-images/feature3.jpg",
      created_at: new Date(),
    },
    {
      id: 4,
      body: "テキストテキスト",
      category: "category",
      image: "post-images/feature4.jpg",
      created_at: new Date(),
    },
    {
      id: 5,
      body: "テキストテキスト",
      category: "category",
      image: "post-images/feature5.jpg",
      created_at: new Date(),
    },
    {
      id: 6,
      body: "テキストテキスト",
      category: "category",
      image: "post-images/feature6.jpg",
      created_at: new Date(),
    },
    {
      id: 7,
      body: "テキストテキスト",
      category: "category",
      image: "post-images/feature7.jpg",
      created_at: new Date(),
    },
    {
      id: 8,
      body: "テキストテキスト",
      category: "category",
      image: "post-images/feature8.jpg",
      created_at: new Date(),
    },
    {
      id: 9,
      body: "テキストテキスト",
      category: "category",
      image: "post-images/feature9.jpg",
      created_at: new Date(),
    },
  ];

  return (
    <div className="flex flex-col items-center mt-10">
      <p className="text-[2em]">Feature</p>

      <div className="cards grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3">
        {posts.map((post) => (
          <Card post={post} />
        ))}
      </div>
    </div>
  );
};

export default Feature;
