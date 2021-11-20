import React, { useState } from 'react'

import {
  BaseInput,
  BaseIcon,
} from 'components/base'

export default {
  title: 'Base/Input',
  component: BaseInput,
}

export const Primary = (args) => {
  const [input, setInput] = useState('')

  const handleChange = (e) => {
    setInput(e.target.value)
  }

  return (
    <BaseInput
      {...args}
      value={input}
      onChange={handleChange}
    />
  )
}

export const withIcon = (args) => {
  const [input, setInput] = useState('')

  const handleChange = (e) => {
    setInput(e.target.value)
  }

  return (
    <BaseInput
      {...args}
      value={input}
      onChange={handleChange}
    >
      <BaseIcon name="search" size="sm" />
    </BaseInput>
  )
}

export const withAlert = (args) => {
  const [input, setInput] = useState('')

  const handleChange = (e) => {
    setInput(e.target.value)
  }

  return (
    <BaseInput
      {...args}
      alert="This is an alert example!"
      value={input}
      onChange={handleChange}
    >
      <BaseIcon name="search" size="sm" />
    </BaseInput>
  )
}
