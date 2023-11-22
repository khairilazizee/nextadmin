import React from 'react'

const Button = ({ title }) => {
    return (
        <button className="p-2.5 bg-[#5d57c9] text-[color:var(--text)] border-none rounded-md cursor-pointer">{title}</button>
    )
}

export default Button