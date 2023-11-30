import { db } from '@/db';
import Link from 'next/link';

export default async function Home() {
  const snippets = await db.snippet.findMany();

  return (
    <>
      <header className="flex justify-between m-2 items-center">
        <h1 className="text-xl font-bold">Snippets</h1>
        <Link
          href="/snippets/new"
          className="border p-2 rounded"
        >
          New
        </Link>
      </header>
      <div className="flex flex-col gap-2">
        {snippets.map((snippet) => (
          <div
            className="flex justify-between items-center p-2 border rounded"
            key={snippet.id}
          >
            <p key={snippet.id}>
              {snippet.title}
            </p>
            <Link href={`/snippets/${snippet.id}`}>View</Link>
          </div>
        ))}
      </div>
    </>
  );
}
