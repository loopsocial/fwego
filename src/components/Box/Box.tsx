/** @jsx jsx */
import React, { forwardRef } from 'react'
import { jsx } from '@emotion/core'
import { useTheme } from '../../hooks'
import { partitionStyleProps, combineCssProperties } from '../../utils'
import type { FontSize, FontWeight } from '../../theme/fonts'
import type { Space } from '../../theme/spaces'
import styleConfig from './config'

export type Size = string | number
export type ResponsiveSize = Size | Array<Size>
export type ResponsiveSpace = Space | Array<Space> | ResponsiveSize
export type ResponsiveFontSize = FontSize | Array<FontSize>
export type ResponsiveString = string | Array<string>
export type ResponsiveProp = string | number | Array<string> | Array<number>
export type Overflow = 'visible' | 'hidden' | 'scroll' | 'auto'
export type ResponsiveOverflow = Overflow | Array<Overflow>

export interface BoxProps
  extends Omit<React.HTMLAttributes<HTMLElement>, 'color'> {
  alignContent?: ResponsiveString
  alignItems?: ResponsiveString
  alignSelf?: ResponsiveString
  animation?: ResponsiveString
  as?: keyof JSX.IntrinsicElements | React.ComponentType<any>
  bg?: ResponsiveString
  backdropFilter?: ResponsiveString
  backgroundImage?: ResponsiveString
  backgroundPosition?: ResponsiveString
  backgroundSize?: ResponsiveString
  border?: ResponsiveString
  borderCollapse?: ResponsiveString
  borderColor?: ResponsiveString
  borderRadius?: ResponsiveString
  borderStyle?: ResponsiveString
  borderTop?: ResponsiveString
  borderRight?: ResponsiveString
  borderBottom?: ResponsiveString
  borderLeft?: ResponsiveString
  borderTopLeftRadius?: ResponsiveSize
  borderTopRightRadius?: ResponsiveSize
  borderBottomLeftRadius?: ResponsiveSize
  borderBottomRightRadius?: ResponsiveSize
  borderWidth?: ResponsiveString
  bottom?: ResponsiveSize
  boxShadow?: ResponsiveString
  boxSizing?: ResponsiveString
  color?: ResponsiveString
  columnGap?: ResponsiveSpace
  cursor?: ResponsiveString
  display?: ResponsiveString
  filter?: ResponsiveString
  flex?: ResponsiveProp
  flexDirection?: ResponsiveString
  flexFlow?: ResponsiveString
  flexGrow?: ResponsiveString
  flexShrink?: ResponsiveString
  flexWrap?: ResponsiveString
  fwcss?: { [key: string]: string }
  fwelement?: string
  fontFamily?: ResponsiveString
  fontSize?: ResponsiveFontSize | ResponsiveSize
  fontWeight?: FontWeight
  gap?: ResponsiveString
  gridAutoFlow?: ResponsiveString
  gridAutoColumns?: ResponsiveString
  gridArea?: ResponsiveString
  gridColumn?: ResponsiveString
  gridRow?: ResponsiveString
  gridTemplateColumns?: ResponsiveString
  gridTemplateRows?: ResponsiveString
  height?: ResponsiveSize
  justifyContent?: ResponsiveString
  justifySelf?: ResponsiveString
  left?: ResponsiveSize
  lineClamp?: ResponsiveString
  lineHeight?: ResponsiveProp
  listStyle?: ResponsiveString
  m?: ResponsiveSpace
  mt?: ResponsiveSpace
  mr?: ResponsiveSpace
  mb?: ResponsiveSpace
  ml?: ResponsiveSpace
  my?: ResponsiveSpace
  mx?: ResponsiveSpace
  minHeight?: ResponsiveSpace
  minWidth?: ResponsiveSpace
  maxHeight?: ResponsiveSpace
  maxWidth?: ResponsiveSpace
  objectFit?: ResponsiveSpace
  opacity?: ResponsiveProp
  order?: ResponsiveProp
  outline?: ResponsiveString
  overflow?: ResponsiveOverflow
  overflowX?: ResponsiveOverflow
  overflowY?: ResponsiveOverflow
  overflowWrap?: ResponsiveString
  p?: ResponsiveSpace
  pt?: ResponsiveSpace
  pr?: ResponsiveSpace
  pb?: ResponsiveSpace
  pl?: ResponsiveSpace
  py?: ResponsiveSpace
  px?: ResponsiveSpace
  placeSelf?: ResponsiveSpace
  pointerEvents?: ResponsiveString
  position?: ResponsiveString
  right?: ResponsiveSize
  rowGap?: ResponsiveSpace
  size?: ResponsiveFontSize | ResponsiveSize
  src?: string
  textAlign?: ResponsiveString
  textDecoration?: ResponsiveString
  textOverflow?: ResponsiveString
  textShadow?: ResponsiveString
  textTransform?: ResponsiveString
  top?: ResponsiveSize
  transform?: ResponsiveString
  transition?: ResponsiveString
  userSelect?: ResponsiveString
  variant?: string
  whiteSpace?: ResponsiveString
  width?: ResponsiveSize
  webkitAppearance?: ResponsiveString
  weight?: FontWeight | Array<FontWeight>
  wordBreak?: ResponsiveString
  wordWrap?: ResponsiveString
  zIndex?: ResponsiveProp
}

const fwBoxCss = {
  display: 'block',
  boxSizing: 'border-box',
  minWidth: '0px'
}

export const Box = forwardRef(
  (
    {
      as = 'div',
      children,
      fwcss = {},
      fwelement,
      variant,
      ...props
    }: BoxProps,
    ref: React.Ref<HTMLElement>
  ) => {
    const theme = useTheme()
    const Component = as
    const [forwardedProps, styleProps] = partitionStyleProps(props, styleConfig)

    let elementStyles = {}
    if (fwelement && fwelement in theme) {
      elementStyles = theme[fwelement]
    }

    let variantStyles = {}
    if (variant && variant in theme.variants) {
      variantStyles = theme.variants[variant]
    }

    const styles = combineCssProperties(
      {
        ...fwBoxCss,
        ...fwcss,
        ...elementStyles,
        ...variantStyles,
        ...styleProps
      },
      styleConfig,
      theme
    )

    return (
      <Component ref={ref} css={styles} {...forwardedProps}>
        {children}
      </Component>
    )
  }
)

Box.displayName = 'Box'
