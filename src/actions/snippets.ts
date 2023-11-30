'use server';

import { db } from '@/db';
import { redirect } from 'next/navigation';

export async function getAllSnippets() {}

export async function getSnippetById() {}

export async function createSnippet() {}

export async function editSnippetById(id: number, code: string) {
  console.log(id, code);
  await db.snippet.update({
    where: { id },
    data: { code },
  });

  redirect(`/snippets/${id}`);
}
