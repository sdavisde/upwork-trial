import React, { PropsWithChildren } from 'react'
import { useDraggable } from '@dnd-kit/core'

export function Draggable({ id, children }: PropsWithChildren<{ id: string }>) {
  const { attributes, listeners, setNodeRef, transform } = useDraggable({ id })
  const style = transform
    ? {
        transform: `translate3d(${transform.x}px, ${transform.y}px, 0)`,
      }
    : undefined

  return (
    <button
      ref={setNodeRef}
      style={style}
      className='w-full'
      {...listeners}
      {...attributes}
    >
      {children}
    </button>
  )
}
