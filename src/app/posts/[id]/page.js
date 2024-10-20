//We need some navigation
import pg from "pg";
import { connectionString } from "pg/lib/defaults";
import { db } from "@/utils/dbConnection";
import CommentsPage from "@/components/Comment";
import DeleteButton from "@/components/DeleteButton";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

//need params to render the data dymically
// remember Metadata

export const metadata = {
  title: "id Page",
  description: "You are looking at...",
};

export default async function IdPage({ params }) {
  //here i need to get my posts from the db by filtering by id (WHERE id = ${params.id})

  const post = await db.query(`SELECT * FROM posts WHERE id =${params.id};`);

  const comment = await db.query(
    `SELECT * FROM comments WHERE id =${params.id};`
  );

  const wrangledPost = post.rows;
  const wrangledComment = comment.rows;

  async function handleDelete(comment_id) {
    "use server";

    await db.query(`DELETE FROM comments WHERE id =${comment_id};`);
    revalidatePath(`/posts/${params.id}`);
    redirect(`/posts/${params.id}`);
  }

  //here i need to handle the submit for the comments form

  return (
    <>
      {/* <h1> dynamic route for individual posts </h1> */}
      <p>You are looking at post {params.id}</p>

      <div>
        {wrangledPost.map((post) => (
          <div key={post.id}>
            <h2>{post.guest_name}</h2>
            <p>{post.title}</p>
            <p>{post.content}</p>
            <p>{post.location}</p>
            <p>{post.description}</p>
          </div>
        ))}
      </div>
      <CommentsPage id={params.id} />
      <div>
        {wrangledComment.map((comment) => (
          <div key={comment.id}>
            <p>{comment.comment_text}</p>
            <p>{comment.commenter_name}</p>
            <DeleteButton comment_id={comment.id} handleDelete={handleDelete} />
          </div>
        ))}
      </div>
    </>

    // here i need to display an individual post and relevant data
    //here I will also display a form with inputs that are connected to the comments table columns in my db
  );
}
