import * as THREE from "three";

import { Container, Hero } from "react-bulma-components";
import React, { ReactElement, useEffect, useRef, useState } from "react";

import WAVES from "vanta/dist/vanta.waves.min";

type WaveBackgroundSectionProps = {
    id: string
    children: JSX.Element
}

export default function WaveBackgroundSection({ id, children }: WaveBackgroundSectionProps): ReactElement {
    const [vantaEffect, setVantaEffect] = useState(0);
    const sectionRef = useRef(null);

    useEffect(() => {
        if (!vantaEffect) {
            setVantaEffect(WAVES({
                THREE: THREE,
                el: sectionRef.current,
                mouseControls: true,
                touchControls: true,
                gyroControls: false,
                minHeight: 200.00,
                minWidth: 200.00,
                scale: 1.00,
                scaleMobile: 1.00,
                zoom: 1.1,
                color: 0x073642,
                shininess: 70.00,
                waveHeight: 30.00,
                waveSpeed: 0.22,
            }));
        }

        return (): void => {
            if (vantaEffect) {
                vantaEffect.destroy();
            }
        };
    }, [vantaEffect]);

    return (
        <div id={id} ref={sectionRef}>
            <Hero hasNavbar className="make-transparent">
                <Hero.Body>
                    <Container>
                        {children}
                    </Container>
                </Hero.Body>
            </Hero>
        </div>
    );
}
