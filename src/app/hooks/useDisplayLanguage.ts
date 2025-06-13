import { useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { Language } from '../state/i18n';

export type DisplayLanguageItem = {
  language?: Language;
  localName: string;
};

export const useDisplayLanguageItems = (): DisplayLanguageItem[] => {
  const { t } = useTranslation();

  return useMemo(
    () => [
      {
        localName: t('settings.general.appearance.display_language.system')
      },
      {
        language: Language.EN,
        localName: 'English'
      },
      {
        language: Language.ZH_HANS,
        localName: '简体中文'
      }
    ],
    [t]
  );
}

