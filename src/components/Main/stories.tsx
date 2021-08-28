import { Meta, Story } from '@storybook/react'

import { Main } from '.'

export default {
  component: Main,
  title: 'Main'
} as Meta

export const Basic: Story = (args) => <Main {...args} />
