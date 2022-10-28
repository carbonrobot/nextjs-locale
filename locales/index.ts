import { Resources } from './types';

import enUS from './en-US';
import jaJP from './ja-JP';

export const resources: Record<string, Resources> = {
  'en-US': enUS,
  'ja-JP': jaJP,
}

export type { Resources } from './types';
