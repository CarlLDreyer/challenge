import React, { useState } from 'react'

import { BaseRadio } from 'components/base'

export default {
  title: 'Base/Radio',
  component: BaseRadio,
}

export const Primary = (args) => {
  const [active, setActive] = useState(false)

  const handleClick = () => {
    setActive(!active)
  }

  return <BaseRadio {...args} id={0} active={active} onClick={handleClick} />
}
