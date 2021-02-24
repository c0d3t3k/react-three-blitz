import ReactDOM from 'react-dom'
import * as math from 'mathjs'
import * as THREE from 'three'
import React, { Suspense, useEffect, useRef, useState } from 'react'
import { Canvas, useLoader, useFrame } from 'react-three-fiber'
import dynamic from 'next/dynamic'

// const Text = dynamic(import("./Text"), {
//   ssr: false,
// });

// @ts-ignore
// import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import { useGLTF } from '@react-three/drei'
//import { useGLTF } from 'drei'
import Text from './Text'
import Layout from 'app/core/layouts/Layout'
import AxesHelper from './AxesHelper'
import Content from './content'
import { Html as HTML } from '@react-three/drei'
// import './styles.css'

export function Logo() {
    const { nodes, materials } = useGLTF('BlitzLogo.glb')
    const ref = useRef()
    return (
        <group ref={ref}>
            <group
                position={[5.5, -0.5, 0.5]}
                scale={[1.5, 1.5, 1.5]}
                // rotation={[math.unit(180, 'deg').toNumber('rad'), math.unit(90, 'deg').toNumber('rad'), 0]}
            >
                {/* <AxesHelper /> */}
                <mesh
                    material={new THREE.MeshNormalMaterial()}
                    geometry={(nodes.path1 as any).geometry}
                />
            </group>
        </group>
    )
}

function Jumbo() {
    const { nodes, materials } = useGLTF('BlitzLogo.glb')
    const ref = useRef()
    useFrame(({ clock }) => ((ref.current as any).rotation.x = (ref.current as any).rotation.y = (ref.current as any).rotation.z = Math.sin(clock.getElapsedTime()) * 0.3))
    return (
        <group ref={ref}>
            <group
                position={[5.5, -0.5, 0.5]}
                scale={[1.5, 1.5, 1.5]}
                rotation={[math.unit(180, 'deg').toNumber('rad'), math.unit(90, 'deg').toNumber('rad'), 0]}
            >
                {/* <AxesHelper /> */}
                <mesh
                    material={new THREE.MeshNormalMaterial()}
                    geometry={(nodes.path1 as any).geometry}
                />
            </group>
            {/* <mesh geometry={(nodes. || nodes.shoe_0).geometry} material={materials.laces} material-color={items.laces} /> */}
            <Text hAlign="left" position={[0, 4.2, 0]} children="REACT" />
            <Text hAlign="left" position={[0, 0, 0]} children="THREE" />
            <Text hAlign="left" position={[0, -4.2, 0]} children="BLITZ" />
        </group>
    )
}

let i = 0

// This component was auto-generated from GLTF by: https://github.com/react-spring/gltfjsx
function Bird({ speed, factor, url, ...props }) {
    const { nodes, materials, animations } = useGLTF(url) as any // useLoader(GLTFLoader, url) as any
    const group = useRef()
    const [mixer] = useState(() => new THREE.AnimationMixer(null as any))
    useEffect(() => void mixer.clipAction(animations[0], group.current).play(), [])
    useFrame((state, delta) => {
        (group.current as any).rotation.y += Math.sin((delta * factor) / 2) * Math.cos((delta * factor) / 2) * 1.5
        mixer.update(delta * speed)
    })

    return (
        <group ref={group} dispose={null}>
            <scene name="Scene" {...props}>
                <mesh
                    name="Object_0"
                    morphTargetDictionary={nodes.Object_0.morphTargetDictionary}
                    morphTargetInfluences={nodes.Object_0.morphTargetInfluences}
                    rotation={[1.5707964611537577, 0, 0]}
                    geometry={nodes.Object_0.geometry}
                    material={materials.Material_0_COLOR_0}
                />
            </scene>
        </group>
    )
}

function Birds() {
    return (new Array(100) as any).fill().map((_, i) => {
        const x = (15 + Math.random() * 30) * (Math.round(Math.random()) ? -1 : 1)
        const y = -10 + Math.random() * 20
        const z = -5 + Math.random() * 10
        const bird = ['Stork', 'Parrot', 'Flamingo'][Math.round(Math.random() * 2)]
        let speed = bird === 'Stork' ? 0.5 : bird === 'Flamingo' ? 2 : 5
        let factor = bird === 'Stork' ? 0.5 + Math.random() : bird === 'Flamingo' ? 0.25 + Math.random() : 1 + Math.random() - 0.5
        return <Bird key={i} position={[x, y, z]} rotation={[0, x > 0 ? Math.PI : 0, 0]} speed={speed} factor={factor} url={`/${bird}.glb`} />
    })
}


interface HeroProps {
    r3f: boolean
}

const Hero = ({ r3f }: HeroProps) => {
    //   return window ? (
    // <Suspense fallback={null}>
    //   <Canvas camera={{ position: [0, 0, 35] }}>
    return (
        <>
            <ambientLight intensity={2} />
            <pointLight position={[40, 40, 40]} />
            <group position={[5, 15, -30]}>
                <Suspense fallback={<HTML>
                    <h1 className="text-lg">Loading ...</h1>
                </HTML>}>
                    <Jumbo />
                    <Birds />
                </Suspense>
            </group>
        </>
    )
//       </Canvas>
//     </Suspense>
//   ) : null;
}

export default Hero;
