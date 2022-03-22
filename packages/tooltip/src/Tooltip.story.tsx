import React, { useState, useRef } from 'react';
import { storiesOf } from '@storybook/react';
import { select, boolean } from '@storybook/addon-knobs';
import Tooltip, { TriggerEvent, Align, Justify } from '.';
import Button from '@leafygreen-ui/button';
import Icon from '@leafygreen-ui/icon';
import { css, cx } from '@leafygreen-ui/emotion';
import { palette } from '@leafygreen-ui/palette';
import LeafyGreenProvider from '@leafygreen-ui/leafygreen-provider';

function ControlledTooltip() {
  const [open, setOpen] = useState(true);

  return (
    <LeafyGreenProvider>
      <Tooltip
        open={open}
        setOpen={setOpen}
        align={select('Align', Object.values(Align), 'top')}
        justify={select('Justify', Object.values(Justify), 'start')}
        trigger={<Button>trigger</Button>}
        usePortal={boolean('Use Portal', true)}
        enabled={boolean('Enabled', true)}
        triggerEvent={select(
          'triggerEvent',
          Object.values(TriggerEvent),
          TriggerEvent.Click,
        )}
        darkMode={boolean('darkMode', false)}
      >
        I am a controlled Tooltip!
      </Tooltip>
    </LeafyGreenProvider>
  );
}

function ScrolledTooltip() {
  // const [open, setOpen] = useState(true);
  const [scrollContainerRef, setScrollContainerRef] = useState<HTMLDivElement | null>(
    null,
  );

  // const scrollContainerRef = useRef(null);
  const items = Array.from(Array(9).keys());
  // const exampleIsScrollable = boolean('Example page scrolling', true);

  const genItems = tooltipText =>
    items.map(id => {
      return (
        <div
          key={`Grid-item-${id}`}
          className={css`
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: flex-start;
            background-color: white;
            min-height: 200px;
            width: 200px;
            box-shadow: 0 1px 2px 1px rgba(0, 0, 0, 0.2);
          `}
        >
          <div
            className={css`
              display: flex;
              flex-direction: row;
              align-items: center;
              justify-content: flex-end;
              align-self: stretch;
              padding: 8px;
            `}
          >
             <Tooltip
                align="top"
                justify="middle"
                // Bug #3: Uncomment line below to observe
                scrollContainer={scrollContainerRef}
                portalContainer={scrollContainerRef}
                // Bug #1
                trigger={
                  <Button
                    className="Button"
                    leftGlyph={<Icon glyph="Ellipsis" />}
                    size="xsmall"
                  />
                }
                triggerEvent="click"
                darkMode={false}
              >
                {/* Bug #2 */}
                {tooltipText}
              </Tooltip>
          </div>

          <div
            className={css`
              display: flex;
              flex-direction: row;
              align-items: center;
              justify-content: center;
              flex: 1 1 100%;
              align-self: stretch;
              padding: 8px;
            `}
          >
            {id}
          </div>
        </div>
      );
    });

  return (
    <div
      className={cx(
        // {
        //   [css`
        //     color: black;
        //   `]: exampleIsScrollable,
        // },
        css`
          display: flex;
          flex-direction: column;
          font-family: sans-serif;
          text-align: center;
          width: 100vw;
          height: 100vh;
          padding: 24px;
        `,
      )}
    >
      {/* <h1>LeafyGreen Tooltip Bugs</h1>
      <p>
        A small sandbox to repro some <code>@leafygreen-ui/tooltip</code> bugs
        we have seen in Charts. This example uses a minimal amount of consumer
        app code to scaffold an example app in which to repro the bugs. LG
        dependencies are set to the versions currently in use within Charts at
        the time of reporting these bugs.
      </p>

      <ul>
        <li>
          Bug 1: When using a <code>Button</code> with only a{' '}
          <code>leftGlyph</code> prop, the tooltip adds a{' '}
          <code>margin-right</code> style to the rendered glyph.
        </li>
        <li>
          Bug 2: Tooltip text renders as expected for targets closer to the
          left-hand side of the viewport, however targets rendered to the right
          hand-side are not rendered as expected. The text is wrapped.
        </li>
        <li>
          Bug 3: When defining a <code>scrollContainer</code> prop, the tooltip
          position gets really screwed up. (Uncomment relevant line in this
          example)
        </li>
      </ul> */}
      <div
        // ref={scrollContainerRef}
        ref={el => setScrollContainerRef(el)}
        className={css`
          flex: 1 1 100%;
          display: grid;
          grid-template-columns: 1fr 1fr 1fr;
          grid-template-rows: 1fr 1fr 1fr;
          gap: 12px 12px;
          grid-auto-flow: row;
          grid-template-areas:
            '. . .'
            '. . .'
            '. . .';
          overflow: auto;
          position: relative;
        `}
      >
        {genItems('Interactive Filters')}
      </div>
    </div>
  );
}

storiesOf('Tooltip', module)
  .add('Uncontrolled', () => (
    <LeafyGreenProvider>
      <Tooltip
        align={select('Align', Object.values(Align), 'top')}
        justify={select('justify', Object.values(Justify), 'start')}
        trigger={<Button>trigger</Button>}
        triggerEvent={select(
          'triggerEvent',
          Object.values(TriggerEvent),
          TriggerEvent.Hover,
        )}
        enabled={boolean('Enabled', true)}
        darkMode={boolean('darkMode', false)}
        usePortal={boolean('Use Portal', false)}
      >
        I am an uncontrolled Tooltip!
      </Tooltip>
    </LeafyGreenProvider>
  ))
  .add('Controlled', () => <ControlledTooltip />)
  .add('Test', () => {
    const darkMode = boolean('darkMode', false);
    const usePortal = boolean('Use Portal', true);
    const open = boolean('Force all open', false);

    return (
      <LeafyGreenProvider>
        <div
          className={css`
            display: grid;
            grid-template-columns: repeat(4, 64px);
            grid-template-rows: repeat(4, 64px);
            width: 100%;
            gap: 64px;
            align-items: center;
            justify-items: center;
            justify-content: center;
            padding: 96px;
            background-color: ${darkMode ? palette.black : palette.white};
          `}
        >
          {Object.values(Align).map(a =>
            Object.values(Justify).map(j => (
              <Tooltip
                key={a + j}
                open={open || undefined}
                darkMode={darkMode}
                align={a}
                justify={j}
                triggerEvent="click"
                usePortal={usePortal}
                trigger={
                  <Button leftGlyph={<Icon glyph="InfoWithCircle" />}>
                    Trigger
                  </Button>
                }
              >
                Align {a}, Justify {j}.
              </Tooltip>
            )),
          )}
        </div>
      </LeafyGreenProvider>
    );
  })
  .add('scrolled test', () => <ScrolledTooltip />);
