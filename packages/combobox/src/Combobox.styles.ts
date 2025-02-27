import { css, cx } from '@leafygreen-ui/emotion';
import { createUniqueClassName } from '@leafygreen-ui/lib';
import { palette } from '@leafygreen-ui/palette';
import isNull from 'lodash/isNull';
import {
  focusRing,
  fontFamilies,
  hoverRing,
  spacing,
  typeScales,
} from '@leafygreen-ui/tokens';
import { ComboboxSize as Size, Overflow, Theme } from './Combobox.types';

/**
 * Width of the widest character (in px)
 */
export const maxCharWidth: Record<Size, number> = {
  [Size.Default]: typeScales.body1.fontSize,
  [Size.Large]: typeScales.body2.fontSize,
};

/**
 * Vertical padding on a chip (in px)
 */
export const chipWrapperPaddingY = {
  [Size.Default]: 2,
  [Size.Large]: 4,
} as const;

/**
 * Height of the input element (in px)
 */
const inputHeight: Record<Size, number> = {
  [Size.Default]:
    typeScales.body1.lineHeight + 2 * chipWrapperPaddingY[Size.Default], // 20
  [Size.Large]:
    typeScales.body2.lineHeight + 2 * chipWrapperPaddingY[Size.Large], // 28
};

/**
 * Size of combobox x & y padding (in px)
 */
export const comboboxPadding: Record<Size, { x: number; y: number }> = {
  [Size.Default]: {
    y: (36 - inputHeight[Size.Default] - 2) / 2,
    x: spacing[2] - 1,
  },
  [Size.Large]: {
    y: (48 - inputHeight[Size.Large] - 2) / 2,
    x: spacing[2] - 1,
  },
};

/** Width of the dropdown caret icon (in px) */
export const caretIconSize = spacing[3];

const minWidth: Record<Size, number> = {
  [Size.Default]:
    maxCharWidth[Size.Default] +
    2 * comboboxPadding[Size.Default].x +
    caretIconSize +
    2, // + 2 for border: ;
  [Size.Large]:
    maxCharWidth[Size.Large] +
    2 * comboboxPadding[Size.Large].x +
    caretIconSize +
    2, // + 2 for border: ;
};

export const chipClassName = createUniqueClassName('combobox-chip');

export const comboboxParentStyle = (
  size: Size,
  overflow?: Overflow,
): string => {
  return cx(
    css`
      font-family: ${fontFamilies.default};
      width: 100%;
      min-width: ${minWidth[size]}px;
    `,
    {
      [css`
        width: unset;
      `]: overflow === Overflow.expandX,
    },
  );
};

export const baseComboboxStyles = css`
  display: flex;
  flex-wrap: nowrap;
  align-items: center;
  cursor: text;
  transition: 150ms ease-in-out;
  transition-property: background-color, box-shadow, border-color;
  border: 1px solid;
  width: inherit;
  border-radius: 6px;
`;

export const comboboxThemeStyles: Record<Theme, string> = {
  [Theme.Light]: css`
    color: ${palette.gray.dark3};
    background-color: ${palette.white};
    border-color: ${palette.gray.base};

    &:hover {
      box-shadow: ${hoverRing[Theme.Light].gray};
    }
  `,
  [Theme.Dark]: css`
    color: ${palette.gray.light2};
    background-color: ${palette.gray.dark4};
    border-color: ${palette.gray.base};

    &:hover {
      box-shadow: ${hoverRing[Theme.Dark].gray};
    }
  `,
};

export const comboboxSizeStyles = (size: Size) => css`
  padding: ${comboboxPadding[size].y}px ${comboboxPadding[size].x}px;
`;

export const comboboxDisabledStyles: Record<Theme, string> = {
  [Theme.Light]: css`
    cursor: not-allowed;
    color: ${palette.gray.dark1};
    background-color: ${palette.gray.light2};
    border-color: ${palette.gray.light1};
  `,
  [Theme.Dark]: css`
    cursor: not-allowed;
    color: ${palette.gray.dark1};
    background-color: ${palette.gray.dark3};
    border-color: ${palette.gray.dark2};
  `,
};

export const comboboxErrorStyles: Record<Theme, string> = {
  [Theme.Light]: css`
    border-color: ${palette.red.base};
  `,
  [Theme.Dark]: css`
    border-color: ${palette.red.light1};
  `,
};

export const comboboxFocusStyle: Record<Theme, string> = {
  [Theme.Light]: css`
    &:focus-within {
      border-color: transparent;
      background-color: ${palette.white};
      box-shadow: ${focusRing[Theme.Light].input};
    }
  `,
  [Theme.Dark]: css`
    &:focus-within {
      border-color: transparent;
      background-color: ${palette.gray.dark4};
      box-shadow: ${focusRing[Theme.Dark].input};
    }
  `,
};

export const inputWrapperStyle = ({
  overflow,
  size,
}: {
  overflow: Overflow;
  size: Size;
}) => {
  const baseWrapperStyle = css`
    flex-grow: 1;
    width: inherit;
  `;

  switch (overflow) {
    case Overflow.scrollX: {
      return css`
        ${baseWrapperStyle}
        display: block;
        height: ${inputHeight[size]}px;
        padding-left: ${comboboxPadding[size].x}px;
        white-space: nowrap;
        overflow-x: scroll;
        scroll-behavior: smooth;
        scrollbar-width: none;

        &::-webkit-scrollbar {
          display: none;
        }

        & > .${chipClassName} {
          margin-inline: 2px;

          &:first-child {
            margin-inline-start: 0;
          }

          &:last-child {
            margin-inline-end: 0;
          }
        }
      `;
    }

    case Overflow.expandX: {
      return css`
        ${baseWrapperStyle}
        display: flex;
        gap: 4px;
        flex-wrap: nowrap;
        white-space: nowrap;
        height: ${inputHeight[size]}px;
      `;
    }

    // TODO - look into animating input element height on wrap
    case Overflow.expandY: {
      return css`
        ${baseWrapperStyle}
        display: flex;
        flex-wrap: wrap;
        gap: 4px;
        overflow-x: visible;
        min-height: ${inputHeight[size]}px;
      `;
    }
  }
};

export const baseInputElementStyle = css`
  font-family: ${fontFamilies.default};
  width: 100%;
  border: none;
  cursor: inherit;
  background-color: inherit;
  color: inherit;
  box-sizing: content-box;
  padding: 0;
  margin: 0;
  text-overflow: ellipsis;

  &:placeholder-shown {
    min-width: 100%;
  }
  &:focus {
    outline: none;
  }
`;

export const inputElementThemeStyle: Record<Theme, string> = {
  [Theme.Light]: css`
    &::placeholder {
      color: ${palette.gray.dark1};
    }
  `,
  [Theme.Dark]: css`
    &::placeholder {
      color: ${palette.gray.light1};
    }
  `,
};

export const inputElementSizeStyle: Record<Size, string> = {
  [Size.Default]: css`
    height: ${inputHeight[Size.Default]}px;
    font-size: ${typeScales.body1.fontSize}px;
    line-height: ${typeScales.body1.lineHeight}px;
    min-width: ${maxCharWidth[Size.Default]}px;
    padding-left: 4px;
  `,
  [Size.Large]: css`
    height: ${inputHeight[Size.Large]}px;
    font-size: ${typeScales.body2.fontSize}px;
    line-height: ${typeScales.body2.lineHeight}px;
    min-width: ${maxCharWidth[Size.Large]}px;
    padding-left: 6px;
  `,
};

// We don't transition the input width then overflow == expand-x
export const inputElementTransitionStyles = (
  isOpen: boolean,
  overflow: Overflow,
) =>
  cx({
    [css`
      /*
    * Immediate transition in, slow transition out. 
    * '-in' transition is handled by \`scroll-behavior\` 
    */
      transition: width ease-in-out ${isOpen ? '0s' : '100ms'};
    `]: overflow !== Overflow.expandX,
  });

// Previously defined in inputWrapperStyle
/** Should only be applied to a multiselect */
export const multiselectInputElementStyle = (
  size: Size,
  inputValue?: string,
) => {
  const inputLength = inputValue?.length ?? 0;
  return css`
    max-width: 100%;
    width: ${inputLength * maxCharWidth[size]}px;
    // TODO: This doesn't quite work. Fix this
    max-width: calc(100% - ${2 * caretIconSize}px);
  `;
};

// If there are chips, we remove the left padding from the input element
export const multiselectInputElementPadding = (
  selection: string | Array<string> | null,
) => {
  if (
    typeof selection === 'object' &&
    !isNull(selection) &&
    selection.length > 0
  )
    return css`
      padding-left: 0px;
    `;
  return '';
};

export const clearButtonStyle = css`
  // Add a negative margin so the button takes up the same space as the regular icons
  margin-block: calc(${caretIconSize / 2}px - 100%);
`;

export const endIconStyle = (size: Size) => css`
  height: ${caretIconSize}px;
  width: ${caretIconSize}px;
  margin-inline-end: calc(${comboboxPadding[size].x}px / 2);
`;

export const errorMessageThemeStyle: Record<Theme, string> = {
  [Theme.Light]: css`
    color: ${palette.red.base};
  `,
  [Theme.Dark]: css`
    color: ${palette.red.light1};
  `,
};

export const errorMessageSizeStyle: Record<Size, string> = {
  [Size.Default]: css`
    font-size: ${typeScales.body1.fontSize}px;
    line-height: ${typeScales.body1.lineHeight}px;
    padding-top: ${comboboxPadding[Size.Default].y}px;
  `,
  [Size.Large]: css`
    font-size: ${typeScales.body2.fontSize}px;
    line-height: ${typeScales.body2.lineHeight}px;
    padding-top: ${comboboxPadding[Size.Large].y}px;
  `,
};
export const labelDescriptionContainerStyle = css`
  margin-bottom: 2px;
`;
