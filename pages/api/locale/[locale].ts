import type { NextApiRequest, NextApiResponse } from 'next';

import { Resources, resources } from '../../../locales';

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Resources>
) {
  const { locale } = req.query;
  res.status(200).json(resources[locale as string]);
}
