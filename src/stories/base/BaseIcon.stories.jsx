import React from 'react'

import { BaseIcon } from 'components/base'

export default {
  title: 'Base/Icon',
  component: BaseIcon,
  argTypes: {
    size: {
      control: { type: 'radio' },
      options: ['xs'],
      defaultValue: 'xs',
    },
    name: {
      control: { type: 'select' },
      options: ['check', 'chevron-down', 'clear', 'minus'],
      defaultValue: 'check',
    },
  },
}

export const Primary = (args) => <BaseIcon {...args} />
