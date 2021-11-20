import React from 'react'

import { BaseButton } from 'components/base'
import BaseButtonDocs from 'stories/base/docs/BaseButton-Documentation.mdx'

export default {
  title: 'Base/Button',
  component: BaseButton,
  argTypes: {
    onClick: { action: 'clicked' },
  },
  parameters: {
    docs: {
      page: BaseButtonDocs,
    },
  },
}

const Template = (args) => <BaseButton {...args}>Button</BaseButton>

export const Primary = Template.bind({})

export const Secondary = Template.bind({})

export const Tertiary = Template.bind({})

Secondary.args = {
  rounded: true,
  outlined: true,
}

Tertiary.args = {
  rounded: true,
  inverted: true,
}
