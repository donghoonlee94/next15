"use server";

export async function createReviewAction(bookId: string, formData: FormData) {
  const content = formData.get("content")?.toString();
  const author = formData.get("author")?.toString();

  if (!bookId || !content || !author) {
    return;
  }

  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_SERVER_URL}/review`,
      {
        method: "POST",
        body: JSON.stringify({ content, author, bookId }),
      }
    );

    console.log(response.status);
  } catch (err) {
    console.error(err);
    return;
  }
}
