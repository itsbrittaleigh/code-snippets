import { getSnippetById } from '@/actions/snippets';
import EditSnippetForm from '@/components/EditSnippetForm';
import { notFound } from 'next/navigation';

interface IEditSnippetProps {
  params: {
    id: string;
  }
}

export default async function EditSnippet(props: IEditSnippetProps) {
  const snippet = await getSnippetById(props.params.id);

  if (!snippet) return notFound();

  return (
    <>
      <div className="flex m-4 justify-between items-center">
        <h1 className="text-xl font-bold">Edit {snippet.title}</h1>
      </div>
      <EditSnippetForm snippet={snippet} />
    </>
  );
}
