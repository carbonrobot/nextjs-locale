import { SiteConfig } from './types';

import { config as usConfig } from './us';
import { config as jpConfig } from './jp';

export const configs: Record<string, SiteConfig> = {
  us: usConfig,
  jp: jpConfig,
};

export type { SiteConfig } from './types';
