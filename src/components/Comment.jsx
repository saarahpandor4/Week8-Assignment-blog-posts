import IdPage from "@/app/posts/[id]/page";
import { db } from "@/utils/dbConnection";

export default function CommentsPage(props) {
  async function handleSubmit(formValues) {
    "use server";

    const formData = {
      post_id: formValues.get("post_id"),
      comment_text: formValues.get("comment"),
      commenter_name: formValues.get("commenter_name"),
    };

    console.log(formData);

    await db.query(
      `INSERT INTO comments (post_id, comment_text, commenter_name)
        VALUES ($1, $2, $3)`,
      [props.id, formData.comment_text, formData.commenter_name]
    );
  }

  return (
    <>
      <h1> Create a comment </h1>

      <form
        action={handleSubmit}
        className="flex flex-col items-center font-bold "
      >
        <label htmlFor="commenter_name"> Username </label>
        <input
          type="text"
          name="commenter_name"
          id="commenter_name"
          placeholder="Enter Username"
          required
          className="text-black font-bold"
        />

        <label htmlFor="comment_text"> Comment </label>
        <input
          type="text"
          name="comment"
          id="comment"
          placeholder="Post your comment"
          required
          className="text-black font-bold"
        />

        <button
          type="submit"
          className="border-radius 2px, cursor-pointer font-extrabold bg-slate-300 text-slate-500"
        >
          Post comment
        </button>
      </form>
    </>
  );
}
