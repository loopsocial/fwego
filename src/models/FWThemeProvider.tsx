import React from 'react'
import { ThemeProvider } from './ThemeProvider'
import fwThemeDark from '../theme/fwDark'
import fwThemeLight from '../theme/fwLight'
import type { Theme } from '../theme/theme'

type Props = {
  theme?: 'light' | 'dark'
  font?: string
  children: React.ReactNode
}

const mapTheme = (theme?: 'light' | 'dark', font?: string): Theme => {
  const defaultFont =
    'Avenir Next, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, sans-serif'
  const fontFamily = font ? font.concat(', ', defaultFont) : defaultFont
  switch (theme) {
    case 'light':
      return fwThemeLight(fontFamily)
    default:
      return fwThemeDark(fontFamily)
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
