
export function Button ({children, type, ...rest}) {
  return(
    <>
      <button type={type} {...rest}>{children} </button>
    </>
  )
}