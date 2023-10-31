import { useLayoutEffect, useRef, useState } from 'react'

interface Offset {
  offsetRef: React.RefObject<HTMLElement | undefined>
  offset: number
}

/**
 * Hook to get the height and ref of the element the ref is assigned to.
 *
 * @returns A ref and the current height of the element assigned to the ref
 */
export function useOffset(): Offset {
  const offsetRef = useRef<HTMLElement>()
  const [offset, setOffset] = useState<number>(0)

  useLayoutEffect(() => {
    const current = offsetRef.current

    setOffset(current ? -current.clientHeight : 0)
  }, [offsetRef.current])

  return { offsetRef, offset }
}
