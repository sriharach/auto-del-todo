import Each from '@/components/Each'
import React, { useEffect, useState } from 'react'
import styled from 'styled-components'

type Iitem = {
  type: 'Fruit' | 'Vegetable'
  name: string
  period: number
}

const items = [
  {
    type: 'Fruit',
    name: 'Apple',
  },
  {
    type: 'Vegetable',
    name: 'Broccoli',
  },
  {
    type: 'Vegetable',
    name: 'Mushroom',
  },
  {
    type: 'Fruit',
    name: 'Banana',
  },
  {
    type: 'Vegetable',
    name: 'Tomato',
  },
  {
    type: 'Fruit',
    name: 'Orange',
  },
  {
    type: 'Fruit',
    name: 'Mango',
  },
  {
    type: 'Fruit',
    name: 'Pineapple',
  },
  {
    type: 'Vegetable',
    name: 'Cucumber',
  },
  {
    type: 'Fruit',
    name: 'Watermelon',
  },
  {
    type: 'Vegetable',
    name: 'Carrot',
  },
]

const AutoDelTodo = () => {
  const [selectItem, setSelectItem] = useState<Iitem[]>([])
  const [render, setRender] = useState(items)

  const delay = (ms: number) =>
    new Promise((resolve) => setTimeout(resolve, ms))

  const handleClickItem = (item: Iitem) => {
    if (selectItem.includes(item)) {
      setSelectItem((prevItems) => prevItems.filter((i) => i !== item))
      setRender((prevItems) => [...prevItems, item])
    } else {
      setRender((prevItems) => prevItems.filter((i) => i !== item))
      setSelectItem((prevItems) => [...prevItems, item])
    }
  }

  useEffect(() => {
    const timeOut = setTimeout(() => {
      setSelectItem((prevItems) => {
        const [_, ...move] = prevItems
        return [...move]
      })

      const [item] = selectItem
      if (item) {
        setRender((prevItems) => [...prevItems, item])
      }
    }, 5000)
    return () => clearTimeout(timeOut)
  }, [selectItem])

  return (
    <Container>
      <BoxContent>
        <Each
          of={render}
          render={(item: Iitem) => (
            <BoxTodo onClick={() => handleClickItem(item)}>{item.name}</BoxTodo>
          )}
        />
      </BoxContent>
      <BoxPush>
        <p>Fruit</p>
        <Each
          of={selectItem}
          render={(item: Iitem) => {
            if (item.type === 'Fruit')
              return (
                <BoxTodo onClick={() => handleClickItem(item)}>
                  {item.name}
                </BoxTodo>
              )
          }}
        />
      </BoxPush>
      <BoxPush>
        <p>Vegetable</p>
        <Each
          of={selectItem}
          render={(item: Iitem) => {
            if (item.type === 'Vegetable')
              return (
                <BoxTodo onClick={() => handleClickItem(item)}>
                  {item.name}
                </BoxTodo>
              )
          }}
        />
      </BoxPush>
    </Container>
  )
}

export default AutoDelTodo

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding: 20px;
  column-gap: 6px;
  min-height: 600px;
`
const BoxContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`
const BoxPush = styled.div`
  width: 250px;
  border: 1px solid red;
  text-align: center;
  padding: 10px;
  display: flex;
  flex-direction: column;
  gap: 8px;
`
const BoxTodo = styled.div`
  border: 1px solid red;
  text-align: center;
  padding: 10px;
  cursor: pointer;
  width: 150px;
`
