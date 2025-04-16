import { mockLeagues } from '@/data/leagues'
import Image from 'next/image'
import { LeagueList } from '@/components/league/league-list'
import { XIcon } from '@/components/icons/x'

async function fetchLeagues() {
  return mockLeagues
}

export default async function Home() {
  const leagues = await fetchLeagues()

  return (
    <div className='grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-body)]'>
      <main className='flex flex-col gap-5 row-start-2 items-center sm:items-start w-[640px]'>
        <h3 className='text-2xl font-heading flex items-center gap-3'>
          <XIcon />
          Leagues
        </h3>
        <LeagueList leagueData={leagues} />
      </main>
      <footer className='row-start-3 flex gap-[24px] flex-wrap items-center justify-center'>
        <a
          className='flex items-center gap-2 hover:underline hover:underline-offset-4'
          href='https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app'
          target='_blank'
          rel='noopener noreferrer'
        >
          <Image
            aria-hidden
            src='/file.svg'
            alt='File icon'
            width={16}
            height={16}
          />
          Learn
        </a>
      </footer>
    </div>
  )
}
