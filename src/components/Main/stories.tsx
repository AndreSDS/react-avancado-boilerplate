import { Meta, Story } from '@storybook/react'

import { Main } from '.'

export default {
  component: Main,
  title: 'Main',
  args: {
    title: 'React Avançado',
    description: 'TypeScript, ReactJS, NextJS e Styled Components'
  }
} as Meta

export const Basic: Story = (args) => <Main {...args} />
// Basic.args = {
//   title: 'React Avançado',
//   description: 'TypeScript, ReactJS, NextJS e Styled Components'
// }
