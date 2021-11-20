import React, { MouseEventHandler } from 'react'
import './BaseButton.scss'
import classNames from 'classnames'
import { BaseIcon } from 'components/base'

interface Props {
  name?: string,
  active?: boolean,
  rounded?: boolean,
  outlined?: boolean,
  disabled?: boolean,
  inverted?: boolean,
  dropdown?: boolean,
  children?: any,
  onClick?: MouseEventHandler,
}

const BaseButton = ({
  name,
  active,
  rounded,
  outlined,
  disabled,
  inverted,
  dropdown,
  children,
  onClick,
} : Props) => {
  const classes = classNames([
    'base-button',
    {
      [`base-button-${name}`]: name,
      'base-button--active': active,
      'base-button--rounded': rounded,
      'base-button--outlined': outlined,
      'base-button--inverted': inverted,
      'base-button--disabled': disabled,
    },
  ])

  return (
    <button
      className={classes}
      aria-label={name}
      onClick={onClick}
    >
      <div className="base-button__content">
        { children }
        { dropdown && <BaseIcon name="chevron-down" size="xs" /> }
      </div>

    </button>
  )
}

export default BaseButton
