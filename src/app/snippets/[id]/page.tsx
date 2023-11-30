import { db } from '@/db';
import Link from 'next/link';
import { notFound } from 'next/navigation';

interface IViewSnippetProps {
  params: {
    id: string;
  }
}

export default async function ViewSnippet(props: IViewSnippetProps) {
  // Uncomment the following line to test loading component
  // await new Promise((r) => setTimeout(r, 2000));
  const id = parseInt(props.params.id, 10);
  const snippet = await db.snippet.findFirst({
    where: { id }
  });

  if (!snippet) return notFound();

  return (
    <>
      <div className="flex m-4 justify-between items-center">
        <h1 className="text-xl font-bold">{snippet.title}</h1>
        <div className="flex gap-4">
          <Link
            className="p-2 border rounded"
            href={`/snippets/${snippet.id}/edit`}
          >
            Edit
          </Link>
          <button className="p-2 border rounded">Delete</button>
        </div>
      </div>
      <pre className="p-3 border rounded bg-gray-200 border-gray-200">
        <code>{snippet.code}</code>
      </pre>
    </>
  );
}
