'use client';

import { editSnippetById } from '@/actions/snippets';
import { Editor } from '@monaco-editor/react';
import { Snippet } from '@prisma/client';
import { useState } from 'react';

interface IEditSnippetFormProps {
  snippet: Snippet;
}

export default function EditSnippetForm({ snippet }: IEditSnippetFormProps) {
  const { id, code } = snippet;
  const [codeValue, setCodeValue] = useState(code);

  const editSnippet = editSnippetById.bind(null, id, codeValue);

  return (
    <form action={editSnippet}>
      <Editor
        defaultValue={code}
        height="200px"
        language="javascript"
        onChange={handleEditorChange}
        theme="vs-dark"
        value={codeValue}
        options={{
          minimap: {
            enabled: false
          }
        }}
      />
      <button className="p-2 border rounded" type="submit">Save</button>
    </form>
  );

  function handleEditorChange(value: string = '') {
    setCodeValue(value);
  }
}
