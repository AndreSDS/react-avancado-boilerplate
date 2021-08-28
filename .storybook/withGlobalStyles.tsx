import {StoryFn} from '@storybook/addons'

import {GlobalStyle} from  '../src/styles/global'

export const withGlobalStyles = (storyFn: StoryFn) => (
  <>
    <GlobalStyle />
    {storyFn()}
  </>
)
