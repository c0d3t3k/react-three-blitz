import React, { Suspense, useEffect, useRef, useState, useMemo } from 'react'

import { Canvas } from 'react-three-fiber'
import { Perf } from 'r3f-perf'
import { OrbitControls, Preload, Html } from '@react-three/drei'
//import { OrbitControls} from 'drei'


interface CanvasProps {
    hasPerf: boolean
    hasOrbit: boolean
    children: any,
    domElement: any
}

const LCanvas = ({ hasPerf=false, hasOrbit=true, children, domElement }: CanvasProps) => {

    // https://github.com/pmndrs/react-three-fiber/issues/1004
    const canvas = useMemo(
        () => (
            <Canvas>
                <Preload all />
                {hasPerf && <Perf openByDefault trackGPU={true} position={'bottom-right'} />}
                {hasOrbit && <OrbitControls listenToKeyEvents = {false}/>}
                {children}
            </Canvas>
        )
    , [
        hasPerf,
        children
    ]);

    return (
        <>{canvas}</>
    )
}

export default LCanvas
