import { GetServerSideProps } from 'next';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { Widget } from '../../../components/widget';
import { Resources, resources } from '../../../locales';
import { LocaleProvider, useLocale } from '../../../locales/context';
// import { configs, SiteConfig } from '../../../sites';
// import { pick } from '../../../utils';

// interface PageProps {
//   resources: Pick<Resources, 'localePage' | 'forms'>;
//   staticSiteConfig: Pick<SiteConfig, 'flag' | 'region'>;
// }

// export const getServerSideProps: GetServerSideProps<PageProps> = async ({
//   params,
// }) => {
//   const { country, language } = params as any;
//   const locale = `${language}-${country.toUpperCase()}`;

//   const localeResources = pick(resources[locale], ['localePage', 'forms']);
//   const staticSiteConfig = pick(configs[country], ['flag', 'region']);

//   return {
//     props: {
//       resources: localeResources,
//       staticSiteConfig,
//     },
//   };
// };

function IndexPage() {
  const { t } = useLocale();

  return (
    <div>
      <main>
        <Link href="/">Return Home</Link>
        <h1>{t('localePage.title')}</h1>

        {/* <p>Site Config Flag: {staticSiteConfig.flag}</p>
        <p>Site Config Region: {staticSiteConfig.region}</p> */}
        <Widget message={t('forms.label')} />
      </main>

      <footer></footer>
    </div>
  );
}

export default function LocaleIndexPage() {
  const router = useRouter();

  const { language, country } = router.query;

  if (!(country && language)) {
    return null;
  }

  // coerce these values. they are params but useRouter is dumb
  const locale = `${language}-${(country as string).toUpperCase()}`;

  return (
    <LocaleProvider locale={locale}>
      <IndexPage />
    </LocaleProvider>
  );
}
