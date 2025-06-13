import React from 'react';
import { useTranslation } from 'react-i18next';
import { Box, Text } from 'folds';
import * as css from './styles.css';

export function AuthFooter() {
  const { t } = useTranslation();

  return (
    <Box className={css.AuthFooter} justifyContent="Center" gap="400" wrap="Wrap">
      <Text as="a" size="T300" href="https://cinny.in" target="_blank" rel="noreferrer">
        {t('auth.footer.about')}
      </Text>
      <Text
        as="a"
        size="T300"
        href="https://github.com/ajbura/cinny/releases"
        target="_blank"
        rel="noreferrer"
      >
        v4.8.1
      </Text>
      <Text as="a" size="T300" href="https://twitter.com/cinnyapp" target="_blank" rel="noreferrer">
        Twitter
      </Text>
      <Text as="a" size="T300" href="https://matrix.org" target="_blank" rel="noreferrer">
        {t('auth.footer.powered_by')}
      </Text>
    </Box>
  );
}
