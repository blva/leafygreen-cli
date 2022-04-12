const Variant = {
  Default: 'default',
  Primary: 'primary',
  PrimaryOutline: 'primaryOutline',
  Danger: 'danger',
  DangerOutline: 'dangerOutline',
  BaseGreen: 'baseGreen',
} as const;

type Variant = typeof Variant[keyof typeof Variant];

const Size = {
  XSmall: 'xsmall',
  Small: 'small',
  Default: 'default',
  Large: 'large',
};

type Size = typeof Size[keyof typeof Size];

const Mode = {
  Light: 'light',
  Dark: 'dark',
} as const;

type Mode = typeof Mode[keyof typeof Mode];

type FontSize = 14 | 16;

interface ButtonProps {
  /**
   * Sets the style variant of the button.
   * @default `'default'`
   */
  variant?: Variant;
  /**
   * Determines if the component renders in dark mode
   * @default `false`
   */
  darkMode?: boolean;
  /**
   * Sets the size variant of the button.
   * @default `'default'`
   */
  size?: Size;

  /**
   * The content that will appear inside of the `<Button />` component.
   * @default `null`
   */
  children?: React.ReactNode;

  /**
   * Adds a className to the class attribute.
   * @default `''`
   */
  className?: string;

  /**
   * Disables the button
   * @default `false`
   */
  disabled?: boolean;

  /**
   * Determines the root element. An `a` tags can be supplied to replace `button` from being the DOM element that wraps the component.
   * @default `button`
   */
  as?: keyof JSX.IntrinsicElements;

  /**
   * If a href is supplied it will change the `as` value, such that the component renders inside of an `a` tag instead of inside of a `button` tag.
   * @default
   */
  href?: string;

  /**
   * Glyph that will appear to the left of text, if there is text provided via the children prop. If no children are supplied to the component, passing an Icon here will render the button as an icon-only button.
   * @default
   */
  leftGlyph?: React.ReactElement;
  /**
   * Glyph that will appear to the right of text, if there is text provided via the children prop. If no children are supplied to the component, passing an Icon here will render the button as an icon-only button.
   * @default
   */
  rightGlyph?: React.ReactElement;
  /**
   * Determines the base font-size of the component
   * @default `14`
   */
  baseFontSize?: FontSize;

  /**
   * The native HTML `type` attribute on a Button
   */
  type?: JSX.IntrinsicElements['button']['type'];
}

export { Variant, Size, Mode, FontSize, ButtonProps };
