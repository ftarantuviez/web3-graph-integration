'use client'
import Table from '../components/Table/Table'
import background from '../../public/images/background.png'
import { epochesSelector } from '../store/epoches'
import { useAppSelector } from '../store'

export default function IndexPage() {
  const { epoches } = useAppSelector(epochesSelector)

  return (
    <main
      style={{
        backgroundImage: `url(${background.src})`,
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Table epoches={epoches} />
    </main>
  )
}
