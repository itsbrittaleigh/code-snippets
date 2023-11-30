'use server';

import { db } from '@/db';
import { redirect } from 'next/navigation';

export async function getAllSnippets() {
  return await db.snippet.findMany();
}

export async function getSnippetById(id: number | string) {
  let idAsNumber = id;

  if (typeof idAsNumber === 'string') {
    idAsNumber = parseInt(idAsNumber, 10);
  }

  return await db.snippet.findFirst({
    where: { id: idAsNumber }
  });
}

export async function createSnippet(formData: FormData) {
  const title = formData.get('title') as string;
  const code = formData.get('code') as string;

  await db.snippet.create({
    data: {
      title,
      code,
    },
  });

  redirect('/');
}

export async function editSnippetById(id: number, code: string) {
  console.log(id, code);
  await db.snippet.update({
    where: { id },
    data: { code },
  });

  redirect(`/snippets/${id}`);
}

export async function deleteSnippetById(id: number) {
  await db.snippet.delete({
    where: { id }
  });

  redirect('/');
}