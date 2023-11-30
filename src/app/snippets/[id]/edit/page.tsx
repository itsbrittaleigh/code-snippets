interface IEditSnippetProps {
  params: {
    id: string;
  }
}

export default function EditSnippet(props: IEditSnippetProps) {
  const { id } = props.params;
  const idAsNumber = parseInt(id, 10);

  return (
    <div>EditSnippet: {idAsNumber}</div>
  );
}
