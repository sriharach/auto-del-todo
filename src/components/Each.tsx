/* eslint-disable @typescript-eslint/no-explicit-any */
import { Children } from 'react'

interface EachProps {
  render: any
  of: any[]
}

const Each = ({ render, of }: EachProps) =>
  Children.toArray(of.map((item, index) => render(item, index)))

export default Each
