import React from 'react';
import { uiColors, palette } from '@leafygreen-ui/palette';
import { css, cx } from '@leafygreen-ui/emotion';
import { ButtonProps, Variant, Size } from './types';
import { ButtonDataProp } from './styles';
import { getTheme, Theme } from '@leafygreen-ui/lib';

const baseIconStyle: Record<Theme, Record<Variant, string>> = {
  [Theme.Light]: {
    [Variant.Default]: css`
      color: ${palette.gray.base};
    `,
    [Variant.Primary]: css`
      color: ${palette.green.light2};
    `,
    [Variant.PrimaryOutline]: css`
      color: ${palette.green.dark2};
    `,
    [Variant.Danger]: css`
      color: ${palette.red.light3};
    `,
    [Variant.DangerOutline]: css`
      color: ${palette.red.light1};
    `,
    [Variant.BaseGreen]: css`
      color: ${palette.green.dark2};
    `,
  },

  [Theme.Dark]: {
    [Variant.Default]: css`
      color: ${palette.gray.light2};
    `,
    [Variant.Primary]: css`
      color: ${palette.green.light2};
    `,
    [Variant.PrimaryOutline]: css`
      color: ${palette.green.base};
    `,
    [Variant.Danger]: css`
      color: ${palette.red.light2};
    `,
    [Variant.DangerOutline]: css`
      color: ${palette.red.light1};
    `,
    [Variant.BaseGreen]: css`
      color: ${uiColors.green.dark3};
    `,
  },
};

const onlyIconStyle: Record<Theme, Record<Variant, string>> = {
  [Theme.Light]: {
    [Variant.Default]: css`
      color: ${palette.gray.dark1};
    `,
    [Variant.Primary]: css`
      color: ${palette.green.light3};
    `,
    [Variant.PrimaryOutline]: css`
      color: ${palette.green.dark2};
    `,
    [Variant.Danger]: css`
      color: ${palette.red.light3};
    `,
    [Variant.DangerOutline]: css`
      color: ${palette.red.light1};
    `,
    [Variant.BaseGreen]: css`
      color: ${palette.green.dark2};
    `,
  },
  [Theme.Dark]: {
    [Variant.Default]: css`
      color: ${palette.gray.light3};
    `,
    [Variant.Primary]: css`
      color: ${palette.green.light3};
    `,
    [Variant.PrimaryOutline]: css`
      color: ${palette.green.base};
    `,
    [Variant.Danger]: css`
      color: ${palette.red.light3};
    `,
    [Variant.DangerOutline]: css`
      color: ${palette.red.light1};
    `,
    [Variant.BaseGreen]: css`
      color: ${uiColors.green.dark3};
    `,
  },
};

const onlyIconStyleHover = css`
  ${ButtonDataProp.selector}:hover &,
  ${ButtonDataProp.selector}:active & {
    color: currentColor;
  } ;
`;

const iconSize: Record<Size, string> = {
  [Size.XSmall]: css`
    height: 14px;
    width: 14px;
  `,
  [Size.Small]: css`
    height: 16px;
    width: 16px;
  `,
  [Size.Default]: css`
    height: 16px;
    width: 16px;
  `,
  [Size.Large]: css`
    height: 20px;
    width: 20px;
  `,
};

const disabledIconStyle: Record<Theme, string> = {
  [Theme.Light]: css`
    color: ${palette.gray.light1};
  `,
  [Theme.Dark]: css`
    color: ${palette.gray.dark1};
  `,
};

const disabledIconOnlyStyle = css`
  color: ${palette.gray.light1};
`;

function ButtonIcon({
  glyph,
  variant,
  size,
  darkMode,
  disabled,
  isIconOnlyButton,
  className,
}: Required<
  Pick<ButtonProps, 'variant' | 'size' | 'darkMode' | 'disabled' | 'className'>
> & {
  isIconOnlyButton: boolean;
  glyph: React.ReactElement;
}) {
  const accessibleIconProps = !isIconOnlyButton && {
    'aria-hidden': true,
    role: 'presentation',
  };

  const theme = getTheme(darkMode);
  const iconStyle = isIconOnlyButton ? onlyIconStyle : baseIconStyle;

  return React.cloneElement(glyph, {
    className: cx(
      iconStyle[theme][variant],
      iconSize[size],
      {
        [disabledIconStyle[theme]]: disabled,
        [onlyIconStyleHover]: isIconOnlyButton,
        [disabledIconOnlyStyle]: !darkMode && disabled && isIconOnlyButton,
      },
      className,
    ),
    ...accessibleIconProps,
  });
}

ButtonIcon.displayName = 'ButtonIcon';

export default ButtonIcon;
