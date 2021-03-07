import React from 'react'

export function Counter() {
  return <button>Click me</button>
}

export default function CounterBs({ children, variant, ...props}) {


  let className = 'btn btn-' + variant;

  return <button className={className}>
    {children}
  </button>
}