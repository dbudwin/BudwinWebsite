import { useLayoutEffect, useRef, useState } from "react";

interface Offset {
    offsetRef: React.MutableRefObject<HTMLElement | undefined>;
    offset: number;
}

export function useOffset(): Offset {
    const offsetRef = useRef<HTMLElement>();
    const [offset, setOffset] = useState<number>(0);

    useLayoutEffect(() => {
        const current = offsetRef.current;
        setOffset(current ? -current.clientHeight : 0);
    }, [offsetRef.current]);

    return { offsetRef, offset };
}
