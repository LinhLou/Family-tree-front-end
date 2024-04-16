import React from 'react'

export default function Button(props) {
  return (
    <button disabled={props.disabled} type={props.type} className='btn btn-primary '>
      {props.children}
    </button>
  )
}
