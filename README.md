# Fwego UI

A themeable set of React components built for a consistent design system

## Install

```
yarn add fwego
```

## Using

```javascript
import { Box, Text } from 'fwego'

export default () => {
  return (
    <Box p={['small', 'large']} bg="primary">
      <Text size="medium" weight="bold">
        Hello World
      </Text>
    </Box>
  )
}
```

## Developer Setup

Install prerequisites node `brew install node` & yarn `brew install yarn`

Install dependencies `yarn`

## Development

Run storybook

```
yarn storybook
```

## GitHub Pages

Visit the site [https://loopsocial.github.io/fwego](https://loopsocial.github.io/fwego/?path=/story/box--default)

Deploy the storybook site by running `yarn deploy-storybook`
