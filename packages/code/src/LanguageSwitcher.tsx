import React from 'react';
import { usePrevious } from '@leafygreen-ui/hooks';
import { isComponentType } from '@leafygreen-ui/lib';
import { isComponentGlyph } from '@leafygreen-ui/icon';
import { css, cx } from '@leafygreen-ui/emotion';
import { fontFamilies, spacing } from '@leafygreen-ui/tokens';
import { useUsingKeyboardContext } from '@leafygreen-ui/leafygreen-provider';
import Button, { ButtonProps } from '@leafygreen-ui/button';
import FileIcon from '@leafygreen-ui/icon/dist/File';
import { Select, Option } from '@leafygreen-ui/select';
import { LanguageOption, PopoverProps } from './types';
import { palette, uiColors } from '@leafygreen-ui/palette';

const containerStyle = css`
  display: flex;
  align-items: center;
  width: 100%;
  height: 100%;
`;

const menuButtonStyle = css`
  // Override default menuButton styles
  margin-top: 0;
  width: 100%;
  height: 100%;
  border-radius: 0px;
  border: 0;
  font-size: 12px;

  &:hover,
  &:focus,
  &:active {
    box-shadow: 0 0 0 0;
    border: 0;
  }

  // Override button defaults
  > *:last-child {
    grid-template-columns: 16px 1fr 16px;
    padding: 0 12px;
    > svg {
      width: 16px;
      height: 16px;
    }
  }
`;

const buttonModeStyle = {
  light: css`
    background-color: ${palette.white};
    border-right: 1px solid ${palette.gray.light2};
    box-shadow: 0 0 0 0;
    font-family: ${fontFamilies.default};

    &:hover,
    &:active,
    &:focus {
      border-right: 1px solid ${palette.gray.light2};
    }

    &:hover {
      background-color: ${palette.gray.light2};
    }
  `,
  dark: css`
    background-color: ${uiColors.gray.dark2};
    border-right: 1px solid ${uiColors.gray.dark3};
    font-family: ${fontFamilies.legacy};

    &:hover,
    &:focus,
    &:active {
      border-right: 1px solid ${uiColors.gray.dark2};
    }

    &:hover,
    &:active {
      background-color: ${uiColors.gray.dark1};
    }
  `,
};

const buttonFocusStyle = {
  light: css`
    &:focus {
      background-color: ${palette.blue.light2};
    }
  `,
  dark: css`
    &:focus {
      background-color: ${uiColors.focus};
    }
  `,
};

const selectStyle = css`
  min-width: 144px;
  height: 100%;s
`;

const iconMargin = css`
  margin-right: ${spacing[3]}px;
`;

function isLeafyGreenIcon(element: React.ReactNode) {
  if (isComponentGlyph(element) || isComponentType(element, 'Icon')) {
    return true;
  }

  return false;
}

interface Props extends PopoverProps {
  language: LanguageOption;
  languageOptions: Array<LanguageOption>;
  onChange: (arg0: LanguageOption) => void;
  darkMode?: boolean;
}

function LanguageSwitcher({
  language,
  languageOptions,
  onChange,
  darkMode,
  usePortal,
  portalClassName,
  portalContainer,
  scrollContainer,
  popoverZIndex,
}: Props) {
  const { usingKeyboard: showFocus } = useUsingKeyboardContext();
  const mode = darkMode ? 'dark' : 'light';

  const previousLanguage = usePrevious(language);

  const handleChange = (val: string) => {
    if (val === '' && previousLanguage !== undefined) {
      return onChange(previousLanguage);
    }

    const selectedOption = languageOptions.find(
      option => option.displayName === val,
    );

    if (selectedOption !== undefined) {
      onChange(selectedOption);
    }
  };

  const iconStyle = cx(
    iconMargin,
    css`
      color: ${darkMode ? uiColors.white : uiColors.gray.dark1};
    `,
  );

  // Placeholder for file icon
  let renderedLogo = <FileIcon className={iconStyle} />;

  if (language.image != null) {
    if (isLeafyGreenIcon(language.image)) {
      renderedLogo = React.cloneElement(language.image, {
        className: iconStyle,
      });
    } else {
      renderedLogo = React.cloneElement(language.image, {
        className: iconMargin,
      });
    }
  }

  // eslint-disable-next-line react/display-name
  const LanguageSwitcherButton = React.forwardRef(
    ({ className, children, ...props }: ButtonProps, ref) => (
      <Button
        {...props}
        className={cx(className, menuButtonStyle, buttonModeStyle[mode], {
          [buttonFocusStyle[mode]]: showFocus,
          // TODO: Refresh - remove darkMode logic
          [css`
            font-family: ${fontFamilies.legacy};
            font-size: 14px;
          `]: darkMode,
        })}
        darkMode={darkMode}
        ref={ref}
        leftGlyph={renderedLogo}
      >
        {children}
      </Button>
    ),
  );

  const popoverProps = {
    popoverZIndex,
    usePortal,
    portalClassName,
    portalContainer,
    scrollContainer,
  } as const;

  return (
    <div className={containerStyle}>
      <Select
        darkMode={darkMode}
        onChange={handleChange}
        aria-labelledby="Language Picker"
        value={language?.displayName}
        className={selectStyle}
        allowDeselect={false}
        {...popoverProps}
        // Component missing displayName
        // eslint-disable-next-line
        __INTERNAL__menuButtonSlot__={LanguageSwitcherButton}
      >
        {languageOptions?.map(option => (
          <Option key={option?.displayName} value={option?.displayName}>
            {option?.displayName}
          </Option>
        ))}
      </Select>
    </div>
  );
}

LanguageSwitcher.displayName = 'LanguageSwitcher';

export default LanguageSwitcher;
