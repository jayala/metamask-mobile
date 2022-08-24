/* eslint-disable react/prop-types */

// Third library dependencies.
import React from 'react';

// External dependencies.
import { useStyles } from '../../../../../hooks';
import CellBase from '../../foundation/CellBase';
import CellDisplayContainer from '../../foundation/CellDisplayContainer';

// Internal dependencies.
import { CELL_DISPLAY_TEST_ID } from './CellDisplay.constants';
import styleSheet from './CellDisplay.styles';
import { CellDisplayProps } from './CellDisplay.types';

const CellDisplay = ({
  style,
  avatarProps,
  title,
  secondaryText,
  tertiaryText,
  tagLabel,
  children,
}: CellDisplayProps) => {
  const { styles } = useStyles(styleSheet, { style });

  return (
    <CellDisplayContainer style={styles.base} testID={CELL_DISPLAY_TEST_ID}>
      <CellBase
        avatarProps={avatarProps}
        title={title}
        secondaryText={secondaryText}
        tertiaryText={tertiaryText}
        tagLabel={tagLabel}
      >
        {children}
      </CellBase>
    </CellDisplayContainer>
  );
};

export default CellDisplay;