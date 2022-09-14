import React from 'react'

export const Text = ({children, className, type}) => {
  if (type === "h1")  {
    return(
        <h1>
            <div className={className}>{children}</div>
        </h1>
    )
}
if (type === "h2")  {
    return <h2>
                <div  className={className}>{children}</div>
            </h2>
}
if (type === "h3")  {
    return <h3>
                <div  className={className}>{children}</div>
            </h3>
}
if (type === "h4")  {
    return <h4>
                <div className={className}>{children}</div>
            </h4>
}
if (type === "h5")  {
    return <h5>
                <div className={className}>{children}</div>
            </h5>
}
if (type === "h6")  {
    return <h6>
                <div className={className}>{children}</div>
            </h6>
}
if (type === "p")  {
    return <p>
                <div className={className}>{children}</div>
            </p>
}
return (
    <span>
        <p className={className}>{children}</p>
    </span>
    
)

}


