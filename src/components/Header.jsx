import Link from "next/link";

export default function Header() {
  return (
    <>
      <nav>
        <Link href="/">
          {" "}
          Home
          <i className="fa-solid fa-house"></i>{" "}
        </Link>
        <Link href="/about">
          {" "}
          About
          <i class="fa-solid fa-globe"></i>{" "}
        </Link>

        <Link href="/posts">
          {" "}
          Posts <i className="fa-solid fa-signs-post"></i>
        </Link>

        <Link href="/new-post">
          {" "}
          Create Post <i className="fa-solid fa-plus"></i>
        </Link>
        {/* <Link href="/comments">Comments</Link> */}
      </nav>
    </>
  );
}
