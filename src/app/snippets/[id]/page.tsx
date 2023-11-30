import { deleteSnippetById, getSnippetById } from '@/actions/snippets';
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
  const snippet = await getSnippetById(id);

  if (!snippet) return notFound();

  const deleteSnippet = deleteSnippetById.bind(null, snippet.id);

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
          <form action={deleteSnippet}>
            <button className="p-2 border rounded" type="submit">
              Delete
            </button>
          </form>
        </div>
      </div>
      <pre className="p-3 border rounded bg-gray-200 border-gray-200">
        <code>{snippet.code}</code>
      </pre>
    </>
  );
}
