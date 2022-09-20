import React from 'react'
import { ThemeProvider } from './ThemeProvider'
import fwThemeDark from '../theme/fwDark'
import fwThemeLight from '../theme/fwLight'
import type { Theme } from '../theme/theme'

type Props = {
  theme?: 'light' | 'dark'
  font?: 'string'
  children: React.ReactNode
}

const mapTheme = (theme?: 'light' | 'dark', font?: string): Theme => {
  switch (theme) {
    case 'light':
      return fwThemeLight(font)
    default:
      return fwThemeDark(font)
  }
}

export const FWThemeProvider: React.FC<Props> = ({
  theme,
  font,
  children
}: Props) => {
  return <ThemeProvider theme={mapTheme(theme, font)}>{children}</ThemeProvider>
}

FWThemeProvider.displayName = 'FWThemeProvider'
