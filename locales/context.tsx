import { createContext, useContext, useEffect, useState } from 'react';
import { Resources } from './types';

interface LocalesContext {
  t: (path: string) => string;
}

interface LocaleProviderProps {
  children: any;
  locale: string;
}

const defaultValue: LocalesContext = {
  t: (path: string) => 'UNKNOWN',
};

const cache = new Map<string, Resources>();
const context = createContext<LocalesContext>(defaultValue);
export const useLocale = () => useContext(context);

export const LocaleProvider = ({ children, locale }: LocaleProviderProps) => {
  const [data, setData] = useState<Resources | null>(null);
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    const data = cache.get(locale);
    if (data) {
      setData(data);
      return;
    }

    setLoading(true);
    fetch(`/api/locale/${locale}`)
      .then((res) => res.json())
      .then((data) => {
        cache.set(locale, data);
        setData(data);
        setLoading(false);
      });
  }, [locale]);

  if (isLoading) return <p>Loading...</p>;
  if (!data) return <p>No Locale data</p>;

  const value: LocalesContext = {
    t: (path: string) => {
      let iter: any = data;
      var arr = path.split('.');

      // @ts-ignore
      while (arr.length && (iter = iter[arr.shift()]));
      return iter;
    },
  };

  return <context.Provider value={value}>{children}</context.Provider>;
};
