'use client'

import { epochesSelector } from '../store/epoches'
import { useAppSelector } from '../store'
import Table from '../components/Table/Table'
import { Epoch, EpochColumns } from '../types/epoch'
import { useEffect, useState } from 'react'
import { Button } from '../components/Button'
import { InputSearch } from '../components/InputSearch'

import { useEpoches } from '../contexts/EpochesContext'
import styles from '../styles/pages/Home.module.scss'

export default function IndexPage() {
  const { epoches, isLoading } = useAppSelector(epochesSelector)
  const { setFilters, filters } = useEpoches()

  const [sortedEpoches, setSortedEpoches] = useState<Epoch[]>(epoches)
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
    const val = e.target.value
    setSearchQuery(val)

    const sortedValues = epoches.filter((epoch) => String(epoch.startBlock).includes(val))
    setSortedEpoches(sortedValues)
  }

  const handleResetInput = () => {
    setSearchQuery('')
    setSortedEpoches(epoches)
  }

  useEffect(() => {
    setSortedEpoches(epoches)
  }, [epoches])

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
      <div>
        <div className={styles.home__tableCont}>
          <Table
            epoches={sortedEpoches}
            handleSortByColumn={handleSortByColumn}
            filters={filters}
          />
        </div>
        <p className={styles.home__tableCont__pagination}>
          {sortedEpoches.length} of {filters.first}
        </p>
      </div>
      <Button onClick={handleLoadMore} isLoading={isLoading}>
        Load More
      </Button>
    </main>
  )
}
