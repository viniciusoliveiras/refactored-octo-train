import * as React from 'react'

interface Props {
  text: string
}

export const ExampleComponent = ({ text }: Props) => {
  return (
    <div className='bg-red-300 text-black p-4'>Example Component: {text}</div>
  )
}
