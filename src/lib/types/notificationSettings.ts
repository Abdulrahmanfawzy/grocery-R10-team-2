type SectionItem = {
  title: string
  items: string[]
}

export type ToggleSectionProps = {
  sections: SectionItem[]
  toggles: Record<string, boolean>
  toggle: (item: string) => void
}