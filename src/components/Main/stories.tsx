import React from 'react'

import { withKnobs, text, boolean, number } from '@storybook/addon-knobs'

import { Meta } from '@storybook/react'

import { Main } from '.'

export default {
  component: Main,
  title: 'Main',
  decorators: [withKnobs]
} as Meta

export const Basic = () => (
  <Main
    title={text('Title', 'React Avançado')}
    description={text(
      'Description',
      'TypeScript, ReactJS, NextJs e Styled Components'
    )}
  />
)
