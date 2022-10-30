"use client";

import React from 'react'

const Error = ({ error, reset }:{ error: Error, reset: () => void }) => {
  console.log('ERROR', error);
  return ( 
    <div style={{color: 'red'}}>Custom Error page</div>
  )
}

export default Error