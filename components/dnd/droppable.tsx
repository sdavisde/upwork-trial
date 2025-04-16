import React, { ReactNode } from 'react'
import { useDroppable } from '@dnd-kit/core'

type DroppableChildrenProps = {
  isOver: boolean
}

type DroppableProps = {
  id: string
  children: (props: DroppableChildrenProps) => ReactNode
}
export function Droppable({ id, children }: DroppableProps) {
  const { isOver, setNodeRef } = useDroppable({ id })
  return (
    <div
      ref={setNodeRef}
      className='w-full'
    >
      {children({ isOver })}
    </div>
  )
}
