import { Container, Hero } from 'react-bulma-components'
import React, { ReactElement, useEffect, useRef, useState } from 'react'

type WaveBackgroundSectionProps = {
  id: string
  children: JSX.Element
}

// Vanta does not have TypeScript support, this is a hack to make TypeScript happy
type WavesVantaEffect = {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  value: any
}

export default function WaveBackgroundSection({
  id,
  children,
}: WaveBackgroundSectionProps): ReactElement {
  const [vantaEffect, setVantaEffect] = useState<WavesVantaEffect>({ value: 0 })
  const sectionRef = useRef(null)

  useEffect(() => {
    const lazyLoadWavesEffect = async (): Promise<void> => {
      await import(/* webpackChunkName: "three-js" */ 'three').then(async THREE => {
        await import(/* webpackChunkName: "vanta-waves" */ 'vanta/dist/vanta.waves.min').then(library => {
          if (!vantaEffect.value) {
            const WAVES = library.default

            setVantaEffect({ value: WAVES({
              THREE: THREE,
              el: sectionRef.current,
              mouseControls: true,
              touchControls: true,
              gyroControls: false,
              minHeight: 200.0,
              minWidth: 200.0,
              scale: 1.0,
              scaleMobile: 1.0,
              zoom: 1.1,
              color: 0x073642,
              shininess: 70.0,
              waveHeight: 30.0,
              waveSpeed: 0.22,
            })})
          }

          return (): void => {
            if (vantaEffect.value) {
              vantaEffect.value.destroy()
            }
          }
        })
      })
    }

    // eslint-disable-next-line @typescript-eslint/no-floating-promises
    lazyLoadWavesEffect()

  }, [vantaEffect])

  return (
    <div id={id} ref={sectionRef}>
      <Hero hasNavbar className='make-transparent'>
        <Hero.Body>
          <Container>{children}</Container>
        </Hero.Body>
      </Hero>
    </div>
  )
}
