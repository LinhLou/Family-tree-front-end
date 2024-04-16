import React from 'react'

export default function Button(props) {
  return (
    <button disabled={props.disabled} type="submit" className='btn btn-primary '>
      {props.children}
    </button>
  )
}
