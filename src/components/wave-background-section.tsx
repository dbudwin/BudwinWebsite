import * as THREE from "three";

import { Container, Hero } from "react-bulma-components";
import React, { ReactElement, useEffect, useRef, useState } from "react";

import WAVES from "vanta/dist/vanta.waves.min";

type WaveBackgroundSectionProps = React.HTMLAttributes<HTMLDivElement>;

export default function WaveBackgroundSection({ ...props }: WaveBackgroundSectionProps): ReactElement {
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
        <div id={props.id} ref={sectionRef}>
            <Hero hasNavbar className="make-transparent">
                <Hero.Body>
                    <Container>
                        {props.children}
                    </Container>
                </Hero.Body>
            </Hero>
        </div>
    );
}
