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
  title: string
  imageSrc: string
  status: LeagueStatus
  sponsor: LeagueSponsor
  year: string
}

export const mockLeagues: Array<League> = [
  {
    title: 'St. Louis Pro Season Points League',
    imageSrc: '/football-image.png',
    status: LeagueStatus.DraftLive,
    sponsor: { name: 'ESPN', logoSrc: '/espn-logo.png' },
    year: '2023',
  },
  {
    title: 'Washington Pro Season Points League',
    imageSrc: '/football-image.png',
    status: LeagueStatus.PreDraft,
    sponsor: { name: 'ESPN', logoSrc: '/espn-logo.png' },
    year: '2023',
  },
  {
    title: 'New York Pro H2H Points PPR League',
    imageSrc: '/football-image.png',
    status: LeagueStatus.DraftLive,
    sponsor: { name: 'ESPN', logoSrc: '/espn-logo.png' },
    year: '2023',
  },
  {
    title: 'Washington Pro Season Points League',
    imageSrc: '/football-image.png',
    status: LeagueStatus.PreDraft,
    sponsor: { name: 'ESPN', logoSrc: '/espn-logo.png' },
    year: '2023',
  },
  {
    title: 'New York Pro H2H Points PPR League',
    imageSrc: '/football-image.png',
    status: LeagueStatus.PostDraft,
    sponsor: { name: 'ESPN', logoSrc: '/espn-logo.png' },
    year: '2023',
  },
  {
    title: 'New York Pro H2H Points PPR League',
    imageSrc: '/football-image.png',
    status: LeagueStatus.Archived,
    sponsor: { name: 'ESPN', logoSrc: '/espn-logo.png' },
    year: '2023',
  },
  {
    title: 'Washington Pro Season Points League',
    imageSrc: '/football-image.png',
    status: LeagueStatus.Archived,
    sponsor: { name: 'ESPN', logoSrc: '/espn-logo.png' },
    year: '2023',
  },
  {
    title: 'New York Pro H2H Points PPR League',
    imageSrc: '/football-image.png',
    status: LeagueStatus.Archived,
    sponsor: { name: 'ESPN', logoSrc: '/espn-logo.png' },
    year: '2023',
  },
]
