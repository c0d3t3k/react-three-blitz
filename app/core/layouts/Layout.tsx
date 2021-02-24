import { ReactNode, Children, Component, Suspense } from "react"
import { Head } from "blitz"
import dynamic from 'next/dynamic'
import Dom from "./_dom"
import { ThemeProvider, useTheme } from "next-themes"

let LCanvas: any = null
////if (process.env.NODE_ENV === 'production') {
LCanvas = dynamic(() => import('./_canvas'), {
    ssr: false,
})
// } else {
//     LCanvas = require('./_canvas').default
// }

type HeaderProps = {
    title?: string
}

export const Header = ({ title }: HeaderProps) => {
    return (
        <Head>
            <title>{title || "react-three-blitz"}</title>
            <link rel="icon" href="/favicon.ico" />
        </Head>
    )
}

function SplitApp({ canvas, dom, title, hasPerf, hasOrbit }) {
    const suspenseFallback = (
        <div className="h-full w-full justify-center flex flex-col text-center">
            <h1 className="text-lg">Loading ...</h1>
        </div>
    );
    const { theme, setTheme } = useTheme();
    return (
        <Suspense fallback={suspenseFallback}>
            <div className={`relative w-screen h-screen ${theme == 'dark' ? 'bg-deeper-purple text-white' : 'bg-white text-black'}`} 
            style={{
                fontSize: '1.75vh'
            }}
            >
                <Header title={title} />

                <div className="absolute z-20 h-screen w-screen inset-x-0 bottom-0">
                    {dom && <Dom title={title} dom={dom} />}
                </div>
                <div className="absolute z-10 w-screen h-screen">
                    <LCanvas hasPerf={false} hasOrbit={true}>{canvas && <group>{canvas}</group>}</LCanvas>
                </div>
            </div>
        </Suspense>
    )
}


type LayoutProps = {
    title?: string
}

const Layout: React.FC<LayoutProps> = ({ title, children }) => {

    let r3fArr: any = []
    let compArr: any = []

    Children.map(children, (child: React.ReactElement<any>) => {
        if (child?.props && child?.props.r3f) {
            r3fArr.push(child)
        } else {
            compArr.push(child)
        }
    })

    console.log("Child Arrays", children, r3fArr.length, compArr.length)


    return r3fArr.length > 0 ? (
        <SplitApp title={title} canvas={r3fArr} dom={compArr} hasPerf={false} hasOrbit={true} />
    ) : (
            <>
                {children}
            </>
        )
}

export default Layout
