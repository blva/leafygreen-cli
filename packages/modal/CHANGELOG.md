# @leafygreen-ui/modal

## 10.0.0

### Patch Changes

- Updated dependencies [85d46871]
- Updated dependencies [99e20bb9]
  - @leafygreen-ui/lib@9.4.0
  - @leafygreen-ui/leafygreen-provider@2.3.0
  - @leafygreen-ui/icon-button@13.0.0

## 9.0.2

### Patch Changes

- fd2f6de0: Updates to TSDocs, PropTypes, and Storybook files
- Updated dependencies [6a89bc29]
- Updated dependencies [fd2f6de0]
- Updated dependencies [6792bc44]
- Updated dependencies [96d1ff9c]
- Updated dependencies [422dbfcd]
- Updated dependencies [9ff90d4b]
  - @leafygreen-ui/palette@3.4.0
  - @leafygreen-ui/hooks@7.3.0
  - @leafygreen-ui/icon-button@11.0.2
  - @leafygreen-ui/portal@4.0.3
  - @leafygreen-ui/tokens@1.3.1
  - @leafygreen-ui/lib@9.3.0

## 9.0.1

### Patch Changes

- 8744ba4c: Adds dependency for `prop-types@^15.8.1`
- Updated dependencies [bc2558c5]
  - @leafygreen-ui/icon-button@11.0.1

## 9.0.0

### Major Changes

- 5f28fce1: Wraps modal in PopoverProvider to check if a popover is open. If open the modal will not close if `esc` is clicked. Adds peerDependency to leafygreen-provider.
- Updated dependencies [500d6c60]
  - @leafygreen-ui/leafygreen-provider@2.2.0

### Patch Changes

- 91e24dfe: Update focus-trap-react version to 8.10.0
- 08fe9960: Update padding for base modal
- Updated dependencies [e13d2487]
- Updated dependencies [5f28fce1]
- Updated dependencies [c48e943e]
- Updated dependencies [500d6c60]
  - @leafygreen-ui/icon-button@11.0.0
  - @leafygreen-ui/tokens@1.3.0
  - @leafygreen-ui/icon@11.9.0

## 8.0.1

### Patch Changes

- 2f6e595d: Fixes bug where select items are not selectable inside modal. Modal children are now wrapped in `PortalContextProvider` and the modal ref is passed in as the default portalContainer and scrollContainer.
- Updated dependencies [233ac580]
- Updated dependencies [ba4aab15]
- Updated dependencies [2cf1bc4a]
  - @leafygreen-ui/tokens@1.2.0
  - @leafygreen-ui/lib@9.2.1

## 8.0.0

### Major Changes

- ab1fd9e: Updates modal and confirmation modal styles in line with visual brand refresh. Add prop closeIconColor.

### Patch Changes

- Updated dependencies [ab1fd9e]
  - @leafygreen-ui/icon-button@10.0.0

## 7.0.0

### Major Changes

- b3ea62a: Removes `closeOnBackdropClick` prop from the modal. Clicking the backdrop when a modal is open should no longer close the modal.

### Patch Changes

- Updated dependencies [b3ea62a]
  - @leafygreen-ui/icon@11.6.1

## 6.1.2

### Patch Changes

- Updated dependencies [f6e5655a]
- Updated dependencies [03388ff2]
- Updated dependencies [b8f03aa1]
  - @leafygreen-ui/palette@3.2.2
  - @leafygreen-ui/icon@11.3.0
  - @leafygreen-ui/lib@9.0.0
  - @leafygreen-ui/portal@4.0.0
  - @leafygreen-ui/icon-button@9.1.6

## 6.1.1

### Patch Changes

- Updated dependencies [e1af3278]
- Updated dependencies [047c1930]
- Updated dependencies [047c1930]
  - @leafygreen-ui/icon-button@9.1.5
  - @leafygreen-ui/lib@8.0.0
  - @leafygreen-ui/hooks@7.0.0
  - @leafygreen-ui/icon@11.1.1
  - @leafygreen-ui/portal@3.1.3

## 6.1.0

### Minor Changes

- 04869b3b: Adds support for `darkMode` prop

## 6.0.3

### Patch Changes

- Updated dependencies [faeb0ce0]
  - @leafygreen-ui/icon@11.0.0

## 6.0.2

### Patch Changes

- Updated dependencies [90321b36]
- Updated dependencies [ab581f34]
- Updated dependencies [90321b36]
  - @leafygreen-ui/icon-button@9.1.3
  - @leafygreen-ui/palette@3.2.1
  - @leafygreen-ui/lib@7.0.0
  - @leafygreen-ui/icon@10.2.1
  - @leafygreen-ui/portal@3.1.1

## 6.0.1

### Patch Changes

- Updated dependencies [99ea9436]
- Updated dependencies [ec27f36e]
  - @leafygreen-ui/icon-button@9.1.2
  - @leafygreen-ui/icon@10.0.0

## 6.0.0

### Major Changes

- fd9b1102: Traps focus in Modal component

### Patch Changes

- Updated dependencies [c8aee7eb]
  - @leafygreen-ui/palette@3.1.1

## 5.1.2

### Patch Changes

- Updated dependencies [f805b772]
  - @leafygreen-ui/icon@9.0.0

## 5.1.1

### Patch Changes

- Updated dependencies [ba56b1cc]
  - @leafygreen-ui/icon@8.0.0

## 5.1.0

### Minor Changes

- c18f16e6: Improves compatibility with React v17

### Patch Changes

- Updated dependencies [c18f16e6]
- Updated dependencies [c9a0d89f]
- Updated dependencies [9ee1d5fc]
  - @leafygreen-ui/hooks@6.0.0
  - @leafygreen-ui/palette@3.1.0
  - @leafygreen-ui/lib@6.1.1

## 5.0.1

### Patch Changes

- dac3f38b: Fixes a publishing error that prevented UMD modules from being distributed
- Updated dependencies [dac3f38b]
  - @leafygreen-ui/hooks@5.0.1
  - @leafygreen-ui/icon@7.0.1
  - @leafygreen-ui/icon-button@9.0.1
  - @leafygreen-ui/lib@6.0.1
  - @leafygreen-ui/palette@3.0.1
  - @leafygreen-ui/portal@3.0.1

## 5.0.0

### Major Changes

- 0267bfd2: The underlying structure of distributed module definition files have changed and now have official support for ES modules. Module definition files are now generated using Rollup instead of Webpack. This should not affect functionality, but some thorough testing and caution should be exercised when upgrading.

### Patch Changes

- Updated dependencies [0267bfd2]
  - @leafygreen-ui/hooks@5.0.0
  - @leafygreen-ui/icon-button@9.0.0
  - @leafygreen-ui/icon@7.0.0
  - @leafygreen-ui/lib@6.0.0
  - @leafygreen-ui/palette@3.0.0
  - @leafygreen-ui/portal@3.0.0

## 4.1.1

### Patch Changes

- Updated dependencies [a84219f1]
  - @leafygreen-ui/icon-button@8.0.0

## 4.1.0

### Minor Changes

- e49d66b: Updated appearance of modal

### Patch Changes

- Updated dependencies [e49d66b]
- Updated dependencies [e599707]
- Updated dependencies [8c867bb]
  - @leafygreen-ui/icon@6.5.0
  - @leafygreen-ui/hooks@4.2.0
  - @leafygreen-ui/icon-button@7.0.5

## 4.0.0

### Major Changes

- ab4c074: - Modals are now vertically centered by default.
  - A new Footer component has been added.

### Patch Changes

- Updated dependencies [ab4c074]
  - @leafygreen-ui/icon-button@7.0.0

## 3.1.5

### Patch Changes

- 691eb05: Better support for UMD
- Updated dependencies [691eb05]
  - @leafygreen-ui/hooks@4.0.1
  - @leafygreen-ui/icon@6.3.2
  - @leafygreen-ui/lib@5.1.1
  - @leafygreen-ui/palette@2.0.2
  - @leafygreen-ui/portal@2.2.1

## 3.1.4

### Patch Changes

- Updated dependencies [fa55b3d]
- Updated dependencies [95b4949]
  - @leafygreen-ui/hooks@4.0.0
  - @leafygreen-ui/portal@2.2.0

## 3.1.3

### Patch Changes

- Updated dependencies [2eba736]
- Updated dependencies [1aa26ee]
- Updated dependencies [d2136a0]
- Updated dependencies [a571361]
- Updated dependencies [d739511]
  - @leafygreen-ui/lib@5.0.0
  - @leafygreen-ui/icon@6.3.0
  - @leafygreen-ui/hooks@3.0.0
  - @leafygreen-ui/portal@2.1.3

## 3.1.2

### Patch Changes

- 6b3308d: Hides focus state on dialogue container

## 3.1.1

### Patch Changes

- 1d86d56: Imports Glyphs directly, rather than importing the entire Icon package, when Glyph components are used
- Updated dependencies [1d86d56]
  - @leafygreen-ui/icon@6.1.0

## 3.1.0

### Minor Changes

- dc075c7: Adds `closeOnBackdropClick` prop to handle Modal closing when the backdrop is clicked

## 3.0.6

### Patch Changes

- Updated dependencies [6fc022e]
  - @leafygreen-ui/icon@6.0.0

## 3.0.5

### Patch Changes

- 05779a1: Upgrades `react-transition-group` to 4.4.1 which removes all React `StrictMode` warnings, making these components `StrictMode` safe.
- Updated dependencies [2fc4ef9]
- Updated dependencies [e857861]
- Updated dependencies [cf6167e]
  - @leafygreen-ui/icon@5.2.0

## 3.0.4

### Patch Changes

- 2a03117: Upgrades @testing-library/react to v10 and revises test suites to conform with new standards
- Updated dependencies [c812eb3]
  - @leafygreen-ui/icon@5.1.0

## 3.0.3

### Patch Changes

- Updated dependencies [4c268a5]
  - @leafygreen-ui/icon@5.0.0

## 3.0.2

### Patch Changes

- fabc1c9: Conditionally enables `useEscapeKey` hook, to ensure that escapeKey events are not unintentionally blocked from propagating
- 232cf52: `React-transition-group` now dependency instead of peer dependency
- Updated dependencies [0a75bd6]
- Updated dependencies [fabc1c9]
  - @leafygreen-ui/icon@4.0.0
  - @leafygreen-ui/lib@4.2.0

## 3.0.1

### Patch Changes

- 69792b8: Makes `react-transition-group` an external dependency of the build
- Updated dependencies [11b2217]
- Updated dependencies [8fd107a]
  - @leafygreen-ui/lib@4.1.0
  - @leafygreen-ui/icon@3.0.1

## 3.0.0

### Major Changes

- 464c09d: Introduces SSR compatibility though a change to our build process and files

### Patch Changes

- Updated dependencies [464c09d]
  - @leafygreen-ui/hooks@2.0.0
  - @leafygreen-ui/icon@3.0.0
  - @leafygreen-ui/lib@4.0.0
  - @leafygreen-ui/palette@2.0.0
  - @leafygreen-ui/portal@2.0.0

## 2.0.0

### Major Changes

- b04a66f: Moves className prop to apply to root `div` rather than content `div`, and adds `contentClassName` to style overlay container. Where using `className` currently, should update to `contentClassName`

## 1.2.3

### Patch Changes

- 50853ca: Upgrade dependencies

## 1.2.2

- Updated dependencies [563dc2e]:
  - @leafygreen-ui/portal@1.1.7

## 1.2.1

### Patch Changes

- 4de039a: Further accessibility updates to make components compliant with a11y standards
- 3a24668: Replaces existing Escape handling with new useEscapeKey hook

## 1.2.0

### Minor Changes

- 27381f6: Modal content can receive focus

## 1.1.1

- Updated dependencies [eb49b56]:
  - @leafygreen-ui/icon@2.0.0
