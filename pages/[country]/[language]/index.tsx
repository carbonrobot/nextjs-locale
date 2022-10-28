import { GetServerSideProps } from 'next';
import Link from 'next/link';
import { Widget } from '../../../components/widget';
import { Resources, resources } from '../../../locales';
import { configs, SiteConfig } from '../../../sites';
import { pick } from '../../../utils';

interface PageProps {
  resources: Pick<Resources, 'localePage' | 'forms'>;
  staticSiteConfig: Pick<SiteConfig, 'flag' | 'region'>;
}

export const getServerSideProps: GetServerSideProps<PageProps> = async ({
  params,
}) => {
  const { country, language } = params as any;
  const locale = `${language}-${country.toUpperCase()}`;

  const localeResources = pick(resources[locale], ['localePage', 'forms']);
  const staticSiteConfig = pick(configs[country], ['flag', 'region']);

  return {
    props: {
      resources: localeResources,
      staticSiteConfig,
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
