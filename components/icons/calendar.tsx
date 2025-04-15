type CalendarIconProps = Partial<{
  className: string
}>
export function CalendarIcon({ className }: CalendarIconProps) {
  return (
    <svg
      width='10'
      height='10'
      viewBox='0 0 10 10'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      className={className}
    >
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M2.5 1H0.5V9.5H9.5V1H7.5V0H6.5V1H3.5V0H2.5V1ZM2.5 4V3H7.5V4H2.5Z'
        fill='#9D9D95'
      />
    </svg>
  )
}
