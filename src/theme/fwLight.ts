import merge from 'lodash/merge'
import type { Theme } from './theme'
import fwTheme, { colors } from './fw'

const lightOverrides = {
  text: {
    color: 'black'
  },
  heading: {
    color: 'black'
  },
  label: {
    color: 'black'
  },
  input: {
    bg: 'white',
    color: 'black',
    boxShadow: `0px 0px 0px 1px ${colors['gray5']} inset`,
    '::placeholder': {
      color: 'black'
    }
  },
  select: {
    bg: 'white',
    color: 'black',
    boxShadow: `0px 0px 0px 1px ${colors['gray5']} inset`,
    '::placeholder': {
      color: 'black'
    }
  },
  comboboxPopover: {
    bg: 'white',
    border: `1px solid ${colors.gray5}`
  },
  comboboxOption: {
    '&:hover': {
      color: 'white',
      bg: colors.primary
    },
    "&[aria-selected='true']": {
      color: 'white',
      bg: colors.primary
    }
  },
  menuList: {
    bg: 'white'
  },
  menuItem: {
    color: 'black',
    '&[data-selected]': {
      color: 'white',
      bg: colors.primary
    }
  },
  menuLink: {
    color: 'black',
    '&[data-selected]': {
      color: 'white',
      bg: colors.primary
    }
  },
  variants: {
    outline: {
      color: 'black',
      '&:hover': {
        color: 'black',
        bg: 'rgba(0, 0, 0, 0.2)'
      }
    },
    icon: {
      color: 'black',
      '&:hover': {
        color: 'black',
        bg: 'rgba(0, 0, 0, 0.2)'
      }
    },
    text: {
      color: 'black',
      '&:hover': {
        color: 'black'
      }
    }
  }
}

const fwLightTheme = (font): Theme => merge(fwTheme(font), lightOverrides)

export default fwLightTheme
