import podcastsData from './podcasts.json'

export type PodcastEpisode = {
  slug: string
  title: string
  excerpt: string
  date: string
  image: string
  contentHtml: string
  author: string
}

export const podcastEpisodes: readonly PodcastEpisode[] = podcastsData.episodes

export function getPodcastEpisode(slug: string | undefined) {
  return podcastEpisodes.find((episode) => episode.slug === slug)
}
