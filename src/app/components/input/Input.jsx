import React from 'react'

const Input = ({searchQuery, handleChange, placeholder, ...otherProps}) => {
  return (
            <input
            type="text"
            value={searchQuery}
            onChange={handleChange}
            placeholder={placeholder}
            {...otherProps}
        />
  )
}

export default Input