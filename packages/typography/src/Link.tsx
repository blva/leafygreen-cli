import React, { useEffect, useMemo, useState } from 'react';
import ArrowRightIcon from '@leafygreen-ui/icon/dist/ArrowRight';
import OpenNewTabIcon from '@leafygreen-ui/icon/dist/OpenNewTab';
import Box, { ExtendableBox } from '@leafygreen-ui/box';
import { css, cx } from '@leafygreen-ui/emotion';
import { palette } from '@leafygreen-ui/palette';
import { fontFamilies } from '@leafygreen-ui/tokens';
import {
  HTMLElementProps,
  createUniqueClassName,
  Theme,
} from '@leafygreen-ui/lib';
import { bodyTypeScaleStyles } from './styles';
import { CommonTypographyProps } from './types';
import { useUpdatedBaseFontSize } from '.';
import { useDarkMode } from '@leafygreen-ui/leafygreen-provider';

const anchorClassName = createUniqueClassName();

const linkStyles = css`
  font-family: ${fontFamilies.default};
  display: inline-flex;
  align-items: center;
  text-decoration: none;
  cursor: pointer;
  line-height: 13px;

  &:focus {
    outline: none;
  }
`;

const linkModeStyles: Record<Theme, string> = {
  [Theme.Light]: css`
    color: ${palette.blue.base};
    font-weight: 400;
  `,
  [Theme.Dark]: css`
    color: ${palette.blue.light1};
    font-weight: 700;
  `,
};

const underlineStyles = css`
  position: relative;
  &::after {
    content: '';
    position: absolute;
    width: 100%;
    height: 2px;
    bottom: -4px;
    left: 0;
    border-radius: 2px;
  }

  .${anchorClassName}:focus & {
    &::after {
      background-color: ${palette.blue.light1};
    }
  }
`;

const underlineModeStyles: Record<Theme, string> = {
  [Theme.Light]: css`
    .${anchorClassName}:hover & {
      &::after {
        background-color: ${palette.gray.light2};
      }
    }
  `,
  [Theme.Dark]: css`
    .${anchorClassName}:hover & {
      &::after {
        background-color: ${palette.gray.dark2};
      }
    }
  `,
};

const arrowRightIconPersist = css`
  transform: translate3d(3px, 0, 0);
`;

const arrowRightIconHover = css`
  opacity: 0;
  transform: translate3d(-3px, 0, 0);
  transition: all 100ms ease-in;

  .${anchorClassName}:hover & {
    opacity: 1;
    transform: translate3d(3px, 0, 0);
  }
`;

const openInNewTabStyles = css`
  position: relative;
  bottom: 4px;
  left: -1px;
  height: 12px;
`;

const ArrowAppearance = {
  Hover: 'hover',
  Persist: 'persist',
  None: 'none',
} as const;

type ArrowAppearance = typeof ArrowAppearance[keyof typeof ArrowAppearance];

export { ArrowAppearance };

export interface LinkProps
  extends CommonTypographyProps,
    HTMLElementProps<'a'> {
  arrowAppearance?: ArrowAppearance;
  hideExternalIcon?: boolean;
}

const Link: ExtendableBox<LinkProps, 'a'> = ({
  href,
  children,
  className,
  target: targetProp,
  arrowAppearance = ArrowAppearance.None,
  hideExternalIcon = false,
  darkMode: darkModeProp,
  ...rest
}: LinkProps) => {
  const [currentHostname, setCurrentHostname] = useState('');
  useEffect(() => {
    setCurrentHostname(window.location.hostname);
  }, []);

  const { theme } = useDarkMode(darkModeProp);

  const hrefHostname = useMemo(() => {
    if (!href) return;
    const httpRegex = /^http(s)?:\/\//;
    return httpRegex.test(href) ? new URL(href).hostname : currentHostname;
  }, [href, currentHostname]);

  const baseFontSize = useUpdatedBaseFontSize();

  let target, icon, rel;

  if (targetProp) {
    target = targetProp;
  } else {
    if (hrefHostname === currentHostname) {
      target = '_self';
    } else {
      target = '_blank';
      rel = 'noopener noreferrer';
    }
  }

  if (target === '_blank' && !hideExternalIcon) {
    icon = (
      <OpenNewTabIcon role="presentation" className={openInNewTabStyles} />
    );
  } else if (arrowAppearance !== ArrowAppearance.None) {
    icon = (
      <ArrowRightIcon
        role="presentation"
        size={12}
        className={cx({
          [arrowRightIconHover]: arrowAppearance === ArrowAppearance.Hover,
          [arrowRightIconPersist]: arrowAppearance === ArrowAppearance.Persist,
        })}
      />
    );
  }

  const elementProps = href
    ? ({ as: 'a', href, target, rel } as const)
    : ({ as: 'span' } as const);

  return (
    <Box
      className={cx(
        anchorClassName,
        bodyTypeScaleStyles[baseFontSize],
        linkStyles,
        linkModeStyles[theme],
        className,
      )}
      {...elementProps}
      {...rest}
    >
      <span className={cx(underlineStyles, underlineModeStyles[theme])}>
        {children}
      </span>
      {icon}
    </Box>
  );
};

export default Link;
