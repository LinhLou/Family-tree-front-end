import React from 'react';
import { Link } from 'react-router-dom'

export default function LinkEle({children, path}) {
  return (
    <Link to={path} className='link-primary fs-6'>{children}</Link>
  )
}
