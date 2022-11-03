import { Resources } from './types';

import enUS from './en-US';
import jaJP from './ja-JP';
import { Paths, select } from '../utils';

const resources: Record<string, Resources> = {
  'en-US': enUS,
  'ja-JP': jaJP,
};

type ResourceKey = Paths<Resources>;

export function getResources(
  locale: string,
  paths: Array<ResourceKey>
): Partial<Resources> {
  const ret = Object.create(null);
  for (const k of paths) {
    ret[k] = select(resources[locale], k);
  }
  return ret;
}

export type { Resources } from './types';
