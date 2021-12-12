import React, { MouseEventHandler } from 'react'
import './BaseRadio.scss'
import classNames from 'classnames'

interface Props {
  id: string
  name?: string
  active: boolean
  disabled?: boolean
  onClick?: MouseEventHandler
}

const BaseRadio = ({ id, name, active, disabled = false, onClick }: Props) => {
  const classes = classNames([
    'base-radio',
    {
      [`radio-${name}`]: name,
      'base-radio--active': active,
      'base-radio--disabled': disabled,
    },
  ])

  const radioID = `radio-${id || name || 0}`

  return (
    <div
      className={classes}
      onClick={onClick}
    >
      <div className="base-radio__radio">
        <div className="base-radio__inner" />
      </div>

      <input
        id={radioID}
        name={radioID}
        value={name}
        aria-checked={active}
        type="radio"
        role="radio"
      />
    </div>
  )
}

export default BaseRadio
