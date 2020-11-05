import React from 'react'
import { Grid, Box } from '../'
import infoAddOn from '../../../.storybook/infoAddOn'

export default {
  component: Grid,
  title: 'Grid',
  parameters: {
    info: infoAddOn
  }
}

export const Default: React.FC<{}> = () => {
  return (
    <Grid gap="medium" columns={['repeat(2, 1fr)', 'repeat(3, 1fr)']}>
      <Box height="100" bg="primary" />
      <Box height="100" bg="primary" />
      <Box height="100" bg="primary" />
      <Box height="100" bg="primary" />
      <Box height="100" bg="primary" />
      <Box height="100" bg="primary" />
    </Grid>
  )
}
