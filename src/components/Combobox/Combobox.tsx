/** @jsx jsx */
import React, { forwardRef } from 'react'
import {
  ComboboxInput as ReachComboboxInput,
  ComboboxPopover as ReachComboboxPopover,
  ComboboxList as ReachComboboxList,
  ComboboxOption as ReachComboboxOption
} from '@reach/combobox'
import type {
  ComboboxInputProps,
  ComboboxPopoverProps,
  ComboboxListProps,
  ComboboxOptionProps
} from '@reach/combobox'
import { css, jsx } from '@emotion/react'
import { Box } from '../Box/Box'
import { Input } from '../Input/Input'

export const ComboboxInput = forwardRef(
  (
    props: ComboboxInputProps & React.InputHTMLAttributes<HTMLInputElement>,
    ref: React.Ref<HTMLInputElement>
  ) => {
    return <Input as={ReachComboboxInput} ref={ref} {...props} />
  }
)

ComboboxInput.displayName = 'ComboboxInput'

export const ComboboxPopover = forwardRef(
  (
    props: ComboboxPopoverProps & React.HTMLAttributes<HTMLDivElement>,
    ref: React.Ref<HTMLDivElement>
  ) => {
    return (
      <Box
        as={ReachComboboxPopover}
        ref={ref}
        overflow="hidden"
        mt="xsmall"
        py="xsmall"
        fwelement="comboboxPopover"
        {...props}
      />
    )
  }
)

ComboboxPopover.displayName = 'ComboboxPopover'

export const ComboboxList = forwardRef(
  (
    props: ComboboxListProps & React.HTMLAttributes<HTMLUListElement>,
    ref: React.Ref<HTMLUListElement>
  ) => {
    return (
      <Box
        as={ReachComboboxList}
        ref={ref}
        m="none"
        p="none"
        listStyle="none"
        userSelect="none"
        fwelement="comboboxList"
        {...props}
      />
    )
  }
)

ComboboxList.displayName = 'ComboboxList'

export const ComboboxOption = forwardRef(
  (
    props: ComboboxOptionProps & React.HTMLAttributes<HTMLLIElement>,
    ref: React.Ref<HTMLLIElement>
  ) => {
    return (
      <Box
        as={ReachComboboxOption}
        ref={ref}
        cursor="pointer"
        px="small"
        py="xsmall"
        fwelement="comboboxOption"
        css={css`
          [data-suggested-value] {
            font-weight: bold;
          }
        `}
        {...props}
      />
    )
  }
)

ComboboxOption.displayName = 'ComboboxOption'

export { Combobox, ComboboxOptionText } from '@reach/combobox'
