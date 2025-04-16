'use client'

import { League } from '@/data/leagues'
import { useState } from 'react'
import { LeagueCard } from './league-card'
import { DndContext, DragEndEvent, DragOverlay, DragStartEvent } from '@dnd-kit/core'
import { Droppable } from '@/components/dnd/droppable'
import { arrayMove, SortableContext } from '@dnd-kit/sortable'

type LeagueListProps = {
  leagueData: Array<League>
}
export function LeagueList({ leagueData }: LeagueListProps) {
  const [leagues, setLeagues] = useState(leagueData)
  const [activeId, setActiveId] = useState<string | null>(null)
  const activeLeague = leagues.find((it) => it.id === activeId)

  function onDragStart(event: DragStartEvent) {
    setActiveId(event.active.id as string)
  }

  function onDragEnd(event: DragEndEvent) {
    const { active, over } = event
    setActiveId(null)

    if (over?.id === 'archive') {
      setLeagues(leagues.filter((it) => it.id !== active.id))
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
      <SortableContext items={leagues}>
        <div className='flex flex-col gap-5 row-start-2 items-center sm:items-start w-[640px]'>
          {leagues.map((league) => (
            <LeagueCard
              {...league}
              key={league.id}
              activeId={activeId}
            />
          ))}
        </div>
      </SortableContext>
      <Droppable id='archive'>
        {() => (
          <div className='w-full border-dashed border-white/15 border-2 p-8 rounded-md flex items-center justify-center text-[#9D9D95]'>
            Drop league here to archive
          </div>
        )}
      </Droppable>
      <DragOverlay>
        {activeId && activeLeague ? (
          <LeagueCard
            {...activeLeague}
            activeId={null}
          />
        ) : null}
      </DragOverlay>
    </DndContext>
  )
}
