import React from 'react'
import './BaseInput.scss'
import classNames from 'classnames'
import { BaseIcon } from 'components/base'

interface InputProps {
  name?: string
  type?: string
  placeholder?: string
  value: string
  disabled?: boolean
  outlined?: boolean
  alert?: string
  children?: any
  onChange?: any
}

const BaseInput = ({
  name,
  type = 'text',
  placeholder = 'Input',
  value,
  disabled,
  outlined,
  alert,
  children,
  onChange,
}: InputProps) => {
  const classes = classNames([
    'base-input',
    {
      [`input-${name}`]: name,
      'base-input--disabled': disabled,
      'base-input--outlined': outlined,
      'base-input--alerted': alert,
    },
  ])

  return (
    <div className="base-input-wrapper">
      <div className={classes}>
        {children && <div className="base-input__icon">{children}</div>}

        <input
          type={type}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
        />
      </div>

      {alert && (
        <div className="base-input__alert">
          <BaseIcon name="alert" />

          <span className="base-input__alert__msg">{alert}</span>
        </div>
      )}
    </div>
  )
}

export default BaseInput
