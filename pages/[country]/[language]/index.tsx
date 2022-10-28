import { GetServerSideProps } from 'next';
import Link from 'next/link';
import { Widget } from '../../../components/widget';
import { Resources } from '../../../locales/localeType';
import { SiteConfig } from '../../../sites/types';

interface PageProps {
  resources: Resources;
  staticSiteConfig: SiteConfig;
}

export const getServerSideProps: GetServerSideProps<PageProps> = async ({
  params,
}) => {
  const { country, language } = params as any;
  const locale = `${language}-${country.toUpperCase()}`;

  const [staticSiteConfig, resources] = await Promise.all([
    import(`../../../sites/${country}`).then((mod) => mod.config),
    import(`../../../locales/${locale}`).then((res) => res.default),
  ]);

  return {
    props: {
      staticSiteConfig,
      resources,
    },
  };
};

export default function LocalIndexPage({
  staticSiteConfig,
  resources,
}: PageProps) {
  return (
    <div>
      <main>
        <Link href="/">Return Home</Link>
        <h1>{resources.localePage.title}</h1>

        <p>Site Config Flag: {staticSiteConfig.flag}</p>
        <p>Site Config Region: {staticSiteConfig.region}</p>
        <Widget message={resources.forms.label} />
      </main>

      <footer></footer>
    </div>
  );
}
