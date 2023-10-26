'use client'

import { epochesSelector } from '../store/epoches'
import { useAppSelector } from '../store'
import Table from '../components/Table/Table'
import { EpochColumns } from '../types/epoch'
import { useState } from 'react'
import { Button } from '../components/Button'
import { InputSearch } from '../components/InputSearch'
import { TSortingOrder } from '../types/filters'
import { useEpoches } from '../contexts/EpochesContext'
import styles from '../styles/pages/Home.module.scss'

export type TSortingValues = {
  dir: TSortingOrder
  col: EpochColumns
}
export default function IndexPage() {
  const { epoches } = useAppSelector(epochesSelector)
  const { setFilters, filters } = useEpoches()

  const [searchQuery, setSearchQuery] = useState('')

  const handleSortByColumn = (
    event: React.MouseEvent<HTMLTableCellElement, MouseEvent>,
  ) => {
    const id = event.currentTarget.id as EpochColumns

    setFilters({
      ...filters,
      orderBy: id,
      orderDirection: filters.orderDirection === 'asc' ? 'desc' : 'asc',
    })
  }

  const handleLoadMore = () => {
    setFilters({ ...filters, first: filters.first + 3 })
  }

  const onSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value)
  }

  const handleResetInput = () => setSearchQuery('')

  return (
    <main className={styles.home}>
      <div className={styles.home__header}>
        <h4>Indexers</h4>
        <div className={styles.home__header__divider} />
        <InputSearch
          onChange={onSearchChange}
          value={searchQuery}
          handleResetInput={handleResetInput}
        />
      </div>
      <div className={styles.home__tableCont}>
        <Table
          epoches={epoches}
          handleSortByColumn={handleSortByColumn}
          filters={filters}
        />
        <p>1 of 1</p>
      </div>
      <Button onClick={handleLoadMore}>Load More</Button>
    </main>
  )
}
