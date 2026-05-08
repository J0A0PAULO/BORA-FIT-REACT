import styles from "../Container/Container.module.css"

export function Container({children, className}) {
  return (
    <>
    <div className={`${styles.container} ${className}`}>
      {children}
    </div>
    </>
  )
}