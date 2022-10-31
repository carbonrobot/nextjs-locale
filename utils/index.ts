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
