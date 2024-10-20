//need navigation
//we need query strings to sort the data asc and desc
//REMEMBER metadata
import Image from "next/image";
import { db } from "@/utils/dbConnection";
import Link from "next/link";

export const metadata = {
  title: "Post page",
  description: "posts!",
};

export default async function Postspage({ searchParams }) {
  //here i need to get the posts from the database
  console.log(searchParams);

  const posts = await db.query(`SELECT * FROM posts`);
  console.log("TheData");

  const wrangledPosts = posts.rows;
  console.log(typeof wrangledPosts);

  if (searchParams.sort === "asc-posts") {
    wrangledPosts.sort((a, b) => a.title.localeCompare(b.title));
  } else if (searchParams.sort === "desc-posts") {
    wrangledPosts.sort((a, b) => b.title.localeCompare(a.title));
  } else {
    wrangledPosts;
  }

  return (
    <>
      <h1> Posts Page </h1>
      <h2> List of posts </h2>

      <div>
        <Link href="/posts?sort=asc-posts">
          {" "}
          Sort ascending
          <i class="fa-solid fa-sort-up"></i>
        </Link>{" "}
        <Link href="/posts?sort=desc-posts">
          {" "}
          Sort descending
          <i class="fa-solid fa-sort-down"></i>
        </Link>
      </div>

      {wrangledPosts.map((post) => (
        <div
          key={post.id}
          className="border-white-400 border-2 border-solid flex flex-col items-center font-bold"
        >
          <a href={`/posts/${post.id}`}>Link to post</a>
          <p>{post.guest_name}</p>
          <p>{post.title}</p>
          <p>{post.description}</p>
          <p>{post.location}</p>
        </div>
      ))}

      {/* here i need a list of my posts  */}
    </>
  );
}
