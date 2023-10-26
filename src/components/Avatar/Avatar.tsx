import React, { useMemo } from 'react'
import Image from 'next/image'
import classNames from 'classnames/bind'
import styles from './Avatar.module.scss'

type Props = {
  id: string
  size?: 'lg' | 'md'
}

const clsx = classNames.bind(styles)

export const Avatar = (props: Props) => {
  const { id, size } = props
  const randomAvatar = useMemo(() => {
    const lastChar = Number(id?.[id.length - 1])
    if (lastChar < 3) return 'blue'
    if (lastChar < 4) return 'green'
    if (lastChar < 6) return 'pink'
    return 'red'
  }, [id])

  const className = clsx({
    avatar: true,
    large: size === 'lg',
  })

  return (
    <div className={className}>
      <Image
        src={`/images/${randomAvatar}-avatar.png`}
        alt={id}
        width={'20'}
        height={'20'}
      />
    </div>
  )
}
