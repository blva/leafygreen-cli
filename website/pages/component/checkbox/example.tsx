import React from 'react';
import Checkbox from '@leafygreen-ui/checkbox';
import LiveExample, { KnobsConfigInterface } from 'components/live-example';
import { css, cx } from '@emotion/css';

const knobsConfig: KnobsConfigInterface<{
  darkMode: boolean;
  disabled: boolean;
  indeterminate: boolean;
  label: string;
  bold: boolean;
  animate: boolean;
}> = {
  darkMode: {
    type: 'boolean',
    default: false,
    label: 'Dark Mode',
  },
  disabled: {
    type: 'boolean',
    default: false,
    label: 'Disabled',
  },
  indeterminate: {
    type: 'boolean',
    default: false,
    label: 'Indeterminate',
  },
  label: {
    type: 'text',
    default: 'I accept the Privacy Policy and the Terms of Service',
    label: 'Label',
  },
  bold: {
    type: 'boolean',
    default: false,
    label: 'Bold',
  },
  animate: {
    type: 'boolean',
    default: true,
    label: 'Animate',
  },
};

export default function CheckboxLiveExample() {
  return (
    <LiveExample knobsConfig={knobsConfig}>
      {({ darkMode, ...rest }) => (
        <Checkbox
          {...rest}
          darkMode={darkMode}
          className={cx(
            // Placeholder CSS, overriding styles from the latest Typography updates which this component should not be using as yet. When this component is updated to use Typography v12.0.0 then these styles can be removed.
            {
              [css`
                input + div {
                  margin-top: 0px;
                }
              `]: darkMode,
              [css`
                input + div {
                  margin-top: 3px;
                }
              `]: !darkMode,
            },
          )}
        />
      )}
    </LiveExample>
  );
}
