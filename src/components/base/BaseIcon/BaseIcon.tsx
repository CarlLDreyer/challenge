import React from 'react'
import './BaseIcon.scss'
import classNames from 'classnames'

interface Props {
  name: string
  size?: 'xs' | 'sm' | 'md' | 'lg'
}

const BaseIcon = ({ name, size = 'md' }: Props) => {
  const loadIcon = require(`components/icons/${size}/${name}`)
  const Icon = loadIcon?.default || loadIcon

  const classes = classNames([
    'base-icon',
    `icon-${name}`,
    `base-icon--size-${size}`,
  ])

  return (
    <div className={classes}>
      <Icon />
    </div>
  )
}

export default BaseIcon
