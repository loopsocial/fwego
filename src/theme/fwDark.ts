import merge from 'lodash/merge'
import type { Theme } from './theme'
import fwTheme, { colors } from './fw'

const darkOverrides = {
  text: {
    color: 'white'
  },
  heading: {
    color: 'white'
  },
  label: {
    color: 'white'
  },
  input: {
    bg: colors['blk1'],
    color: 'white',
    boxShadow: `0px 0px 0px 1px ${colors['gray3']} inset`,
    '::placeholder': {
      color: colors['gray5']
    }
  },
  select: {
    bg: colors['blk1'],
    color: 'white',
    boxShadow: `0px 0px 0px 1px ${colors['gray3']} inset`,
    '::placeholder': {
      color: colors['gray5']
    }
  },
  modal: {
    bg: 'rgba(0, 0, 0, 0.5)'
  },
  modalContent: {
    bg: colors['gray3']
  },
  comboboxPopover: {
    bg: colors.gray1,
    border: `1px solid ${colors.gray3}`
  },
  comboboxOption: {
    color: 'inherit',
    '&:hover': {
      bg: colors.gray2
    },
    "&[aria-selected='true']": {
      bg: colors.gray2
    }
  },
  menuButton: {
    color: 'white'
  },
  menuList: {
    bg: colors.gray2
  },
  menuItem: {
    color: 'white',
    bg: colors.gray2,
    '&[data-selected]': {
      bg: colors.gray3
    }
  },
  menuLink: {
    color: 'white',
    bg: colors.gray2,
    '&[data-selected]': {
      bg: colors.gray3
    }
  },
  variants: {
    outline: {
      '&:hover': {
        bg: 'rgba(255, 255, 255, 0.2)'
      }
    },
    icon: {
      '&:hover': {
        bg: 'rgba(255, 255, 255, 0.2)'
      }
    },
    text: {
      color: 'white',
      '&:hover': {
        color: 'white'
      }
    }
  }
}

const fwDarkTheme = (font?: string): Theme =>
  merge(fwTheme(font), darkOverrides)

export default fwDarkTheme
