import { db } from '@/db';
import { notFound } from 'next/navigation';

interface IEditSnippetProps {
  params: {
    id: string;
  }
}

export default async function EditSnippet(props: IEditSnippetProps) {
  const id = parseInt(props.params.id);
  const snippet = await db.snippet.findFirst({
    where: { id }
  });

  if (!snippet) return notFound();

  return (
    <div>EditSnippet: {id}</div>
  );
}
