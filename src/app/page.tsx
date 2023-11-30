import { db } from "@/db";

export default async function Home() {
  const snippets = await db.snippet.findMany();

  return snippets.map((snippet) => (
    <p key={snippet.id}>
      {snippet.title}
    </p>
  ));
}
