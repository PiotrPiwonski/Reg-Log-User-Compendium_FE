import { FC, PropsWithChildren } from 'react';
import { IntlProvider } from 'react-intl';

import { ITranslationProviderProps } from './types';
import pl from './locale/pl.json';

export const TranslationProvider: FC<PropsWithChildren<ITranslationProviderProps>> = ({
  locale = 'pl',
  defaultLocale = 'pl',
  translations = pl,
  children,
}) => {
  return (
    <IntlProvider messages={translations} locale={locale} defaultLocale={defaultLocale}>
      {children}
    </IntlProvider>
  );
};
