import React from 'react'

import { BaseButton } from 'components/base'

export default {
  title: 'Base/Button',
  component: BaseButton,
  argTypes: {
    onClick: { action: 'clicked' },
  },
}

const Template = (args) => <BaseButton {...args}>Button</BaseButton>

export const Primary = Template.bind({})
