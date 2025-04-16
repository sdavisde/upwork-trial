'use client'

import cn from 'clsx'
import { League, LeagueStatus } from '@/data/leagues'
import { useMemo, useState } from 'react'
import { LeagueCard } from './league-card'
import { DndContext, DragEndEvent, DragOverlay, DragStartEvent } from '@dnd-kit/core'
import { Droppable } from '@/components/dnd/droppable'
import { arrayMove, SortableContext } from '@dnd-kit/sortable'
import Lodash from 'lodash'
import { DropDownIcon } from '../icons/dropdown'

type LeagueListProps = {
  leagueData: Array<League>
}
export function LeagueList({ leagueData }: LeagueListProps) {
  const [leagues, setLeagues] = useState(leagueData)
  const [activeLeagues, archivedLeagues] = useMemo(
    () => Lodash.partition(leagues, (it) => it.status !== LeagueStatus.Archived),
    [leagues]
  )
  const [showArchivedLeagues, setShowArchivedLeagues] = useState(false)
  const [activeLeague, setActiveLeague] = useState<League | null>(null)

  function onDragStart(event: DragStartEvent) {
    setActiveLeague(leagues.find((it) => it.id === (event.active.id as string)) ?? null)
  }

  function onDragEnd(event: DragEndEvent) {
    const { active, over } = event
    setActiveLeague(null)

    if (over?.id === 'archive') {
      setLeagues(leagues.map((it) => (it.id === active.id ? { ...it, status: LeagueStatus.Archived } : it)))
      return
    }

    if (over && active.id !== over.id) {
      const oldIndex = leagues.findIndex((it) => it.id === active.id)
      const newIndex = leagues.findIndex((it) => it.id === over.id)
      setLeagues(arrayMove(leagues, oldIndex, newIndex))
    }
  }

  return (
    <DndContext
      onDragStart={onDragStart}
      onDragEnd={onDragEnd}
    >
      <SortableContext items={activeLeagues}>
        <div className='flex flex-col gap-5 row-start-2 items-center sm:items-start w-[640px]'>
          {activeLeagues.map((league) => (
            <LeagueCard
              {...league}
              key={league.id}
              activeId={activeLeague?.id ?? null}
            />
          ))}
        </div>
      </SortableContext>
      <button
        onClick={() => setShowArchivedLeagues((prev) => !prev)}
        className='flex items-center gap-2 cursor-pointer text-white/50'
      >
        <DropDownIcon /> Archived
      </button>
      <ul
        className={cn('transition-all duration-300 overflow-hidden w-full flex flex-col gap-4', {
          'max-h-96 opacity-100': showArchivedLeagues,
          'max-h-0 opacity-0': !showArchivedLeagues,
        })}
      >
        {archivedLeagues.map((archived) => (
          <LeagueCard
            {...archived}
            key={archived.id}
            activeId={null}
          />
        ))}
      </ul>

      <Droppable id='archive'>
        {() => (
          <div className='w-full border-dashed border-white/15 border-2 p-8 rounded-md flex items-center justify-center text-[#9D9D95]'>
            Drop league here to archive
          </div>
        )}
      </Droppable>
      <DragOverlay>
        {activeLeague ? (
          <LeagueCard
            {...activeLeague}
            activeId={null}
          />
        ) : null}
      </DragOverlay>
    </DndContext>
  )
}
