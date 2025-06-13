import { Box, Button, Dialog, Spinner, Text, color, config } from 'folds';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { SplashScreen } from '../components/splash-screen';
import { useSetting } from '../state/hooks/settings';
import { settingsAtom } from '../state/settings';

export function ConfigConfigLoading() {
  const { t, i18n } = useTranslation();
  const [displayLanguage] = useSetting(settingsAtom, 'displayLanguage');

  if (displayLanguage && i18n.language !== displayLanguage) {
    i18n.changeLanguage(displayLanguage as string)
  }

  return (
    <SplashScreen>
      <Box grow="Yes" direction="Column" gap="400" alignItems="Center" justifyContent="Center">
        <Spinner variant="Secondary" size="600" />
        <Text>{ t('config.splash_screen.heating_up') }</Text>
      </Box>
    </SplashScreen>
  );
}

type ConfigConfigErrorProps = {
  error: unknown;
  retry: () => void;
  ignore: () => void;
};
export function ConfigConfigError({ error, retry, ignore }: ConfigConfigErrorProps) {
  const { t } = useTranslation();

  return (
    <SplashScreen>
      <Box grow="Yes" direction="Column" gap="400" alignItems="Center" justifyContent="Center">
        <Dialog>
          <Box style={{ padding: config.space.S400 }} direction="Column" gap="400">
            <Box direction="Column" gap="100">
              <Text>{ t('config.splash_screen.failed_to_load_client_configuration_file') }</Text>
              {typeof error === 'object' &&
                error &&
                'message' in error &&
                typeof error.message === 'string' && (
                  <Text size="T300" style={{ color: color.Critical.Main }}>
                    {error.message}
                  </Text>
                )}
            </Box>
            <Button variant="Critical" onClick={retry}>
              <Text as="span" size="B400">
                { t('config.splash_screen.retry_button') }
              </Text>
            </Button>
            <Button variant="Critical" onClick={ignore} fill="Soft">
              <Text as="span" size="B400">
                { t('config.splash_screen.continue_button') }
              </Text>
            </Button>
          </Box>
        </Dialog>
      </Box>
    </SplashScreen>
  );
}
