import { Meta, Story } from '@storybook/react'

import { Button } from '.'

export default {
  component: Button,
  title: 'Button'
} as Meta

export const Button: Story = () => <Button />
// Button.args = {
//   title: 'React Avançado',
//   description: 'TypeScript, ReactJS, NextJS e Styled Components'
// }
