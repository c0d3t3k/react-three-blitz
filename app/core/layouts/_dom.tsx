
import Head from 'next/head'
import { ReactNode } from 'react'

import {Header} from './Layout'


type DomProps = {
    title?: string
    dom: any
    // events:any
}


const Dom = ({ title, dom }) => {

    return (
        <>
            <Header title={title} />
            <div className="flex flex-row w-full h-full justify-center">
                <div className="flex flex-col h-full justify-center">
                    {dom}
                </div>
            </div>
        </>
    )
}

export default Dom