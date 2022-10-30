"use client";

import React, { useEffect } from 'react'

const ErrorBoundary = ({ error, reset }: any) => {
    useEffect(() => {
        console.log(error);
    }, [error]);
  return (
    <div>
        Something went wrong!
    </div>
  )
}

export default ErrorBoundary