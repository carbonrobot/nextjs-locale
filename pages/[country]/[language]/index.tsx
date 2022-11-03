import { GetServerSideProps } from 'next';
import Link from 'next/link';
import { Widget } from '../../../components/widget';
import { getResources, Resources } from '../../../locales';

interface PageProps {
  resources: Partial<Resources>;
}

export const getServerSideProps: GetServerSideProps<PageProps> = async ({
  params,
}) => {
  const { country, language } = params as any;
  const locale = `${language}-${country.toUpperCase()}`;

  // each page hydrates using only the keys it needs
  // we can use flat keys or dot selectors, eg. "forms.email.regex"
  const localeResources = getResources(locale, ['pages.home', 'forms']);

  return {
    props: {
      resources: localeResources,
    },
  };
};

export default function LocalIndexPage({
  resources,
}: PageProps) {
  return (
    <div>
      <main>
        <Link href="/">Return Home</Link>
        <h1>{resources.pages?.home.title}</h1>
        <Widget message={resources.forms?.label} />
      </main>

      <footer></footer>
    </div>
  );
}
