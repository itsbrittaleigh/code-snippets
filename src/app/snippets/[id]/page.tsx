import { db } from '@/db';
import { notFound } from 'next/navigation';

interface IViewSnippetProps {
  params: {
    id: string;
  }
}

export default async function ViewSnippet(props: IViewSnippetProps) {
  const { id } = props.params;
  const snippet = await db.snippet.findFirst({
    where: { 
      id: parseInt(id, 10),
    }
  });

  if (!snippet) return notFound();

  return (
    <p>{snippet.title}</p>
  );
}
