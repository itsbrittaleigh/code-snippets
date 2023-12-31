'use server';

import { db } from '@/db';
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';

interface IFormState {
  message: string;
}

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

export async function createSnippet(formState: IFormState, formData: FormData) {
  try {
    const title = formData.get('title') as string;
    const code = formData.get('code') as string;
  
    if (typeof title !== 'string' || title.length < 3) {
      return {
        message: 'Title must be longer.'
      };
    }
  
    if (typeof code !== 'string' || code.length < 10) {
      return {
        message: 'Code must be longer.'
      };
    }
  
    await db.snippet.create({
      data: {
        title,
        code,
      },
    });
  } catch (err: unknown) {
    if (err instanceof Error) {
      return {
        message: err.message
      }
    } else {
      return {
        message: 'Something went wrong!'
      }
    }
  }

  revalidatePath('/');
  redirect('/');
}

export async function editSnippetById(id: number, code: string) {
  console.log(id, code);
  await db.snippet.update({
    where: { id },
    data: { code },
  });

  revalidatePath(`/snippets/${id}`);
  redirect(`/snippets/${id}`);
}

export async function deleteSnippetById(id: number) {
  await db.snippet.delete({
    where: { id }
  });

  revalidatePath('/');
  redirect('/');
}
