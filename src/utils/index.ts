import { ApiResponse } from 'src/types/http';

export async function go<T>(func: Promise<T>) {
  return func
    .then<[null, T]>((data: T) => [null, data])
    .catch<[Error, undefined]>((err: Error) => [err, undefined]);
}

export function toResponse<T>(
  body: T,
  err: Error | null,
  message?: string,
): ApiResponse<T> {
  return {
    body,
    success: err ? false : true,
    message: message ? message : err ? err.message : !err ? 'OK' : null,
  };
}
