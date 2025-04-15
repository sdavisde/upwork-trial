import { League, LeagueSponsor, LeagueStatus } from '@/data/leagues'
import Image from 'next/image'
import { CalendarIcon } from './icons/calendar'
import { Badge, BadgeProps } from './badge'

type LeagueCardProps = League & {}
export function LeagueCard({ title, imageSrc, status, sponsor, year }: LeagueCardProps) {
  const effectColorHex = getEffectColorFromStatus(status)
  const badgeColor = getBadgeColorFromStatus(status)

  return (
    <div
      className='bg-card-background p-8 rounded-md w-full flex items-center gap-6 grid-bg'
      style={
        {
          '--dot-color': effectColorHex,
        } as React.CSSProperties
      }
    >
      <Image
        src={imageSrc}
        alt={title}
        width={40}
        height={40}
        className='aspect-square rounded-sm'
      />
      <div className='flex flex-col gap-2'>
        <div className='flex items-center gap-2'>
          <p>{title}</p>
          <Badge
            text={status}
            color={badgeColor}
          />
        </div>
        <div className='flex items-center gap-4'>
          <span className='flex items-center gap-2'>
            <Image
              src={sponsor.logoSrc}
              alt={sponsor.name}
              width={12}
              height={12}
            />
            <span className='text-xs font-light text-gray-400'>{sponsor.name}</span>
          </span>
          <span className='flex items-center gap-2'>
            <CalendarIcon />
            <span className='text-xs font-light text-gray-400'>{year}</span>
          </span>
        </div>
      </div>
    </div>
  )
}

function getEffectColorFromStatus(status: LeagueStatus): string {
  switch (status) {
    case LeagueStatus.Archived:
      return '#FFFFFF'
    case LeagueStatus.DraftLive:
      return '#B5FF4D'
    case LeagueStatus.PostDraft:
      return '#F0F0F0'
    case LeagueStatus.PreDraft:
      return '#FFAD33'
  }
}

function getBadgeColorFromStatus(status: LeagueStatus): BadgeProps['color'] {
  switch (status) {
    case LeagueStatus.Archived:
      return 'white'
    case LeagueStatus.DraftLive:
      return 'green'
    case LeagueStatus.PostDraft:
      return 'white'
    case LeagueStatus.PreDraft:
      return 'orange'
  }
}
