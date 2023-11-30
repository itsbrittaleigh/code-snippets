import { createSnippet } from '@/actions/snippets';

export default function CreateSnippet() {
  return (
    <form action={createSnippet}>
      <h1 className="text-xl font-bold m-3">Create a Snippet</h1>
      <div className="flex flex-col gap-4">
        <div className="flex gap-4">
          <label htmlFor="title" className="w-12">Title</label>
          <input
            className="border rounded p-2 w-full"
            id="title"
            name="title"
            type="text"
          />
        </div>
        <div className="flex gap-4">
          <label htmlFor="code" className="w-12">Code</label>
          <textarea
            className="border rounded p-2 w-full"
            id="code"
            name="code"
          />
        </div>
        <button className="rounded p-2 bg-blue-200" type="submit">Create</button>
      </div>
    </form>
  );
}
