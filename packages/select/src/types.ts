import { HTMLElementProps, OneOf } from '@leafygreen-ui/lib';
import { PopoverProps } from '@leafygreen-ui/popover';

export const Size = {
  XSmall: 'xsmall',
  Small: 'small',
  Default: 'default',
  Large: 'large',
} as const;
export type Size = typeof Size[keyof typeof Size];

export const State = {
  None: 'none',
  Error: 'error',
} as const;
export type State = typeof State[keyof typeof State];

export const Mode = {
  Dark: 'dark',
  Light: 'light',
} as const;
export type Mode = typeof Mode[keyof typeof Mode];

export type SelectProps = {
  /**
   * Children rendered inside the component. Expected to be either `<Option>` or `<OptionGroup>`.
   */
  children: React.ReactNode;
  className?: string;
  /**
   * HTML `id` property used to allow Javascript, form, or label to reference the input.
   */
  id?: string;
  darkMode?: boolean;
  /**
   * Determines the size in which the component will be rendered.
   */
  size?: Size;
  /**
   * When present, it specifies that the drop-down list should be disabled.
   *
   * A `disabled` drop-down list is unusable and un-clickable.
   */
  disabled?: boolean;
  /**
   * Secondary text rendered under the label to provide additional details about the select and its options.
   */
  description?: string;
  /**
   * Text rendered in the Select component before a value is set.
   */
  placeholder?: string;
  /**
   * The `name` attribute specifies the name for a drop-down list.
   *
   * The `name` attribute is used to reference elements in a JavaScript, or to reference form data after a form is submitted.
   */
  name?: string;
  /**
   * Allows the user to unselect an option.
   */
  allowDeselect?: boolean;
  /**
   * Error message rendered when the `state` prop is set to `error`.
   */
  errorMessage?: string;
  /**
   * Determines whether the component should be rendered in an error state.
   */
  state?: State;
  __INTERNAL__menuButtonSlot__?: React.ForwardRefExoticComponent<
    React.RefAttributes<unknown>
  >;
} & Omit<PopoverProps, 'active' | 'spacing'> &
  (
    | // Uncontrolled
    ({
        /**
         * `value` makes the component a controlled component and using `defaultValue` makes it uncontrolled.
         */
        defaultValue?: string;
        /**
         * `value` makes the component a controlled component and using `defaultValue` makes it uncontrolled.
         */
        value?: undefined;
      } & {
        onChange?: (
          value: string,
          event: React.MouseEvent | KeyboardEvent | React.KeyboardEvent,
        ) => void;
        /**
         * Indicates that the component's value cannot be changed.
         */
        readOnly?: false;
      })
    // Controlled
    | ({ value: string; defaultValue?: undefined } & (
        | {
            onChange: (
              value: string,
              event: React.MouseEvent | KeyboardEvent | React.KeyboardEvent,
            ) => void;
            readOnly?: false;
          }
        | { readOnly: true; onChange?: undefined }
      ))
  ) &
  OneOf<{ label: string }, { 'aria-labelledby': string }> &
  Omit<HTMLElementProps<'button', HTMLButtonElement>, 'onChange'>;
