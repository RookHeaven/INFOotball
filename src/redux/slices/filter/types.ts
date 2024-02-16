export enum TabsTitles {
  ALL = 'All clubs',
  RUSSIA = 'Russia',
  ENGLAND = 'England',
  FRANCE = 'France',
  GERMANY = 'Germany',
  ITALY = 'Italy',
  SPAIN = 'Spain'
}

export enum Options {
  ALPHABET_ASC = 'alphabeticalAsc',
  ALPHABET_DESC = 'alphabeticalDesc',
  YEAR_ASC = 'yearAsc',
  YEAR_DESC = 'yearDesc',
  CAPACITY_ASC = 'capacityAsc',
  CAPACITY_DESC = 'capacityDesc',
}

export type TFilterSlice = {
  activeTab: TabsTitles,
  currentOption: Options,
  searchValue: string
}
