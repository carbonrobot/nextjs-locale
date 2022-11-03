export function pick<T extends object, U extends keyof T>(
  obj: T,
  paths: Array<U>
): Pick<T, U> {
  const ret = Object.create(null);
  for (const k of paths) {
    ret[k] = obj[k];
  }
  return ret;
}

export function select<T extends object, U extends keyof T>(
  obj: T,
  path: string
): Pick<T, U> {
  let iter: any = obj;
  var arr = path.split('.');

  // @ts-ignore
  while (arr.length && (iter = iter[arr.shift()]));
  return iter;
}

/**
 * Return a union of deep dot-separated property paths from an object.
 */
 type PathsImpl<T, K extends keyof T> = K extends string
 ? T[K] extends Record<string, unknown>
   ? T[K] extends ArrayLike<unknown>
     ? K | `${K}.${PathsImpl<T[K], Exclude<keyof T[K], keyof unknown[]>>}`
     : K | `${K}.${PathsImpl<T[K], keyof T[K]>}`
   : K
 : never;

export type Paths<T> = PathsImpl<T, keyof T> | keyof T;
