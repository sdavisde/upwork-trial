export enum LeagueStatus {
  DraftLive = 'Draft Live',
  PreDraft = 'Pre Draft',
  PostDraft = 'Post Draft',
  Archived = 'Archived',
}

export type LeagueSponsor = {
  name: string
  logoSrc: string
}

export type League = {
  id: string
  title: string
  imageSrc: string
  status: LeagueStatus
  sponsor: LeagueSponsor
  year: string
}

export const mockLeagues: Array<League> = [
  {
    id: '1',
    title: 'St. Louis Pro Season Points League',
    imageSrc: '/football-image.png',
    status: LeagueStatus.DraftLive,
    sponsor: { name: 'ESPN', logoSrc: '/espn-logo.png' },
    year: '2023',
  },
  {
    id: '2',
    title: 'Washington Pro Season Points League',
    imageSrc: '/football-image.png',
    status: LeagueStatus.PreDraft,
    sponsor: { name: 'ESPN', logoSrc: '/espn-logo.png' },
    year: '2023',
  },
  {
    id: '3',
    title: 'New York Pro H2H Points PPR League',
    imageSrc: '/football-image.png',
    status: LeagueStatus.DraftLive,
    sponsor: { name: 'ESPN', logoSrc: '/espn-logo.png' },
    year: '2023',
  },
  {
    id: '4',
    title: 'Washington Pro Season Points League',
    imageSrc: '/football-image.png',
    status: LeagueStatus.PreDraft,
    sponsor: { name: 'ESPN', logoSrc: '/espn-logo.png' },
    year: '2023',
  },
  {
    id: '5',
    title: 'New York Pro H2H Points PPR League',
    imageSrc: '/football-image.png',
    status: LeagueStatus.PostDraft,
    sponsor: { name: 'ESPN', logoSrc: '/espn-logo.png' },
    year: '2023',
  },
  {
    id: '6',
    title: 'New York Pro H2H Points PPR League',
    imageSrc: '/football-image.png',
    status: LeagueStatus.Archived,
    sponsor: { name: 'ESPN', logoSrc: '/espn-logo.png' },
    year: '2023',
  },
  {
    id: '7',
    title: 'Washington Pro Season Points League',
    imageSrc: '/football-image.png',
    status: LeagueStatus.Archived,
    sponsor: { name: 'ESPN', logoSrc: '/espn-logo.png' },
    year: '2023',
  },
  {
    id: '8',
    title: 'New York Pro H2H Points PPR League',
    imageSrc: '/football-image.png',
    status: LeagueStatus.Archived,
    sponsor: { name: 'ESPN', logoSrc: '/espn-logo.png' },
    year: '2023',
  },
]
