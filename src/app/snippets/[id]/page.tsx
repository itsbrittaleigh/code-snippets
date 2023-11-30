import { db } from '@/db';
import { notFound } from 'next/navigation';

interface IViewSnippetProps {
  params: {
    id: string;
  }
}

export default async function ViewSnippet(props: IViewSnippetProps) {
  // Uncomment the following line to test loading component
  // await new Promise((r) => setTimeout(r, 2000));
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
