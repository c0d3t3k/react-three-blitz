import { useGLTF } from "@react-three/drei"
import { useRef, Suspense } from "react"
import * as THREE from 'three'
import * as math from 'mathjs'
import AxesHelper from "app/pages/AxesHelper"
import { useFrame } from "react-three-fiber"


function Logo({r3f}) {
    
    const { nodes, materials } = useGLTF('BlitzLogo.glb')
    const ref = useRef()

    useFrame(({ clock }) => ((ref.current as any).rotation.y = Math.sin(clock.getElapsedTime())))
    
    return (
        <group ref={ref}>
            <group
                position={[0, 1.3, 0]}
                scale={[.10, .10, .10]}
                rotation={[math.unit(180, 'deg').toNumber('rad'), math.unit(90, 'deg').toNumber('rad'), 0]}
            >
                {/* <AxesHelper /> */}
                <Suspense fallback={<div>Loading...</div>} >
                <mesh
                    material={new THREE.MeshNormalMaterial()}
                    geometry={(nodes.path1 as any).geometry}
                />
                </Suspense>
            </group>
        </group>
    )
}

export default Logo