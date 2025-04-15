import { ReactNode } from 'react'
import cn from 'clsx'

export type BadgeProps = {
  color?: 'white' | 'blue' | 'orange' | 'red' | 'green'
  size?: 'sm' | 'lg'
  icon?: ReactNode
  text: string
}
export function Badge({ text, icon, color = 'white', size = 'sm' }: BadgeProps) {
  const primaryHex = getPrimaryHex(color)
  return (
    <div
      // Badge class defined in globals.css controls color styles to make it easier to propagate color changes to css through variable
      className={cn('badge px-3', {
        'py-1 text-sm': size === 'lg',
        'text-xs leading-[18px]': size === 'sm',
      })}
      style={
        {
          '--badge-primary': primaryHex,
        } as React.CSSProperties
      }
    >
      {text}
    </div>
  )
}

function getPrimaryHex(color: BadgeProps['color']) {
  switch (color) {
    case 'white':
      return '#FFFFFF'
    case 'blue':
      return '#4a5af2'
    case 'green':
      return '#b5ff4c'
    case 'orange':
      return '#ffad33'
    case 'red':
      return '#fe474a'
  }
}
