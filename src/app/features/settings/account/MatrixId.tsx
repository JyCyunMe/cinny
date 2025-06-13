import React from 'react';
import { Box, Text, Chip } from 'folds';
import { useMatrixClient } from '../../../hooks/useMatrixClient';
import { SequenceCard } from '../../../components/sequence-card';
import { SequenceCardStyle } from '../styles.css';
import { SettingTile } from '../../../components/setting-tile';
import { copyToClipboard } from '../../../../util/common';
import { useTranslation } from 'react-i18next';

export function MatrixId() {
  const { t } = useTranslation();
  const mx = useMatrixClient();
  const userId = mx.getUserId()!;

  return (
    <Box direction="Column" gap="100">
      <Text size="L400">{t('settings.account.profile.Matrix ID.title')}</Text>
      <SequenceCard
        className={SequenceCardStyle}
        variant="SurfaceVariant"
        direction="Column"
        gap="400"
      >
        <SettingTile
          title={userId}
          after={
            <Chip variant="Secondary" radii="Pill" onClick={() => copyToClipboard(userId)}>
              <Text size="T200">{t('settings.account.profile.Matrix ID.copy_button')}</Text>
            </Chip>
          }
        />
      </SequenceCard>
    </Box>
  );
}
