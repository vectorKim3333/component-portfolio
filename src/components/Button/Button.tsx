import React from "react"
import classNames from "classnames"
import styles from "./Button.module.sass"

export enum ButtonType {
  DEFAULT = "default",
  PRIMARY = "primary",
  SECONDARY = "secondary"
}

export interface IProps {
  children: React.ReactNode
  onClick?: React.MouseEventHandler
  theme?: ButtonType
}

const Button: React.FC<IProps> = ({children, theme = ButtonType.DEFAULT}) => {
  const className = classNames(styles.default, styles[theme])
  return <button className={className}>{children}</button>
}

export default Button
