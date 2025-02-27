import { addDecorator, addParameters } from '@storybook/react';
import ComponentPreview from './decorators/ComponentPreview';
import ReactStrictMode from './decorators/ReactStrictMode';
import {
  H1,
  H2,
  H3,
  Subtitle,
  Body,
  InlineCode,
  Link,
} from '@leafygreen-ui/typography';

const H6 = ({ children, ...rest }) => (
  <Body {...rest}>
    <strong>{children}</strong>
  </Body>
);

export const argTypes = {
  className: {
    description: '`className` prop passed to the component',
    control: 'text',
  },
};

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    expanded: true,
    matchers: {
      color: /.*(c|C)olor$/,
      date: /Date$/,
    },
  },
  options: {
    storySort: {
      method: '',
      order: ['Overview', 'Sample Pages', 'Packages'],
      locales: '',
    },
  },
  docs: {
    components: {
      h1: H1,
      h2: H2,
      h3: H3,
      h4: Subtitle,
      h5: Subtitle,
      h6: H6,
      p: Body,
      a: Link,
      code: InlineCode,
    },
  },
};

addDecorator(ReactStrictMode);
addDecorator(ComponentPreview);
