'use client';

import { Editor } from '@monaco-editor/react';
import { Snippet } from '@prisma/client';
import { useState } from 'react';

interface IEditSnippetFormProps {
  snippet: Snippet;
}

export default function EditSnippetForm({ snippet }: IEditSnippetFormProps) {
  const { title } = snippet;
  const [codeValue, setCodeValue] = useState(snippet.code);

  return (
    <>
      <Editor
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
    </>
  );

  function handleEditorChange(value: string = '') {
    setCodeValue(value);
  }
}
