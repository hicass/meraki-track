'use server';
import { cookies } from 'next/headers';

interface Method {
  GET: 'GET';
  POST: 'POST';
  PUT: 'PUT';
  DELETE: 'DELETE';
}

export default async function sendRequest(
  path: string,
  method: keyof Method,
  body?: any,
  timeout: number = 9000
) {
  const controller = new AbortController();
  const timeoutId = setTimeout(() => controller.abort(), timeout);

  let cookieString = '';

  if (process.env.NODE_ENV !== 'test') {
    const reqCookies = await cookies();
    cookieString = reqCookies
      .getAll()
      .map(({ name, value }) => `${name}=${value}`)
      .join('; ');
  }

  try {
    const url = `${process.env.NEXT_PUBLIC_SERVER_URL}/${path}`;

    const res = await fetch(url, {
      method: method,
      body: JSON.stringify(body),
      signal: controller.signal,
      headers: {
        'Content-Type': 'application/json',
        Cookie: cookieString,
      },
    });

    return res.json();
  } catch (error) {
    console.log(error);
    throw new Error('Bad Request');
  } finally {
    clearTimeout(timeoutId);
  }
}
