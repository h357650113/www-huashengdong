import React, { useEffect, useRef, useState } from 'react'

export default function LazyImage({ id, src }) {
    const [inView, setInView] = useState(false)
    const ref = useRef()

    const callback = (entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                setInView(true)
            }
        })
    }

    useEffect(() => {
        const observer = new IntersectionObserver(callback)
        if (ref?.current) {
            observer.observe(ref.current)
        }
        return () => {
            observer.disconnect()
        }
    }, [])
    return inView ? (
        <div
            ref={ref}
            className="cover-image"
            style={{ backgroundImage: `url(${src})` }}
            key={id}
            id={id}
        ></div>
    ) : (
        <div ref={ref} className="cover-image"></div>
    )
}
