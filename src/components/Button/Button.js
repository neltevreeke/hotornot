import React from 'react'
import styles from './Button.scss'
import cx from 'classnames'

const VARIANT_DEFAULT = 'default'

const Button = ({
  children,
  variant = VARIANT_DEFAULT,
  className,
  isLoading,
  ...props
}) => {
  return (
    <button
      disabled={isLoading}
      className={cx(styles.component, {
        [styles[`variant--${variant}`]]: variant,
        [className]: className
      })}
      {...props}
    >
      {/* in case you need a loading animation */}
      {isLoading ? (
        <span>Loading...</span>
      ) : children}
    </button>
  )
}

Button.VARIANT_DEFAULT = VARIANT_DEFAULT

export default Button
