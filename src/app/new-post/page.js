//some navigation (imports, links)
import { db } from "@/utils/dbConnection";
import { Input } from "postcss";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

//remember metadata

export const metadata = {
  title: "New post page",
  description: "New post!",
};

export default function newPostPage() {
  //here i needd to handle the submit of the posts form

  async function handleSubmit(formValues) {
    "use server";

    const formData = {
      guest_name: formValues.get("guest_name"),
      title: formValues.get("title"),
      description: formValues.get("description"),
      location: formValues.get("location"),
    };

    console.log(formData);

    await db.query(
      `INSERT INTO posts (guest_name, title, description, location)
    VALUES ($1, $2, $3, $4)`,
      [
        formData.guest_name,
        formData.title,
        formData.description,
        formData.location,
      ]
    );
    //refresh the data in the /post page
    revalidatePath("/posts");

    //redirect the user to the /posts page
    redirect("/posts");
  }

  return (
    // <h1> a form to add a new blog post</h1>
    //here i need a form to collect data from the user
    <>
      <h1> Create a post </h1>

      <form action={handleSubmit} className="flex flex-col items-center ">
        <label htmlFor="guest_name"> Username </label>
        <input
          type="text"
          name="guest_name"
          id="guest_name"
          placeholder="Enter Username"
          required
          className="text-black"
        />

        <label htmlFor="title"> Title </label>
        <input
          type="text"
          name="title"
          id="title"
          placeholder="Post title"
          required
          className="text-black"
        />

        <label htmlFor="description"> Description </label>
        <input
          type="text"
          name="description"
          id="description"
          placeholder="Post description"
          required
          className="text-black"
        />

        <label htmlFor="location"> Location </label>
        <input
          type="text"
          name="location"
          id="location"
          placeholder="Where did you go?"
          required
          className="text-black"
        />

        <button
          type="submit"
          className="border-radius 5px, cursor-pointer font-bold"
        >
          Create Post
        </button>
      </form>
    </>
  );
}
