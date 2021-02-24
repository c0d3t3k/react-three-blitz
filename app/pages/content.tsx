import UserInfo from "app/core/components/UserInfo"
import { Link } from "blitz"
import { Box, useAspect } from "@react-three/drei"
//import { Box, useAspect } from "drei"
import React, { Suspense, useRef } from "react"
import { useFrame, useThree } from "react-three-fiber"
import { Flex } from "react-three-flex"
import * as THREE from 'three'
import DarkMode from "app/core/components/DarkMode"

function Content() {

    return (
    // <div className="demo-content ">
    <div className="flex flex-col items-end text-center mt-96">
        <div>
            {/* <div className="logo">
            <img src="/logo.png" alt="blitz.js" /> */}
            {/* </div> */}
            <p>
            <strong>Congrats!</strong> Your app is ready, including user sign-up and log-in.
            </p>
            <DarkMode />
            <div className="buttons" style={{ marginTop: "1rem", marginBottom: "1rem" }}>
            <Suspense fallback="Loading...">
                <UserInfo />
            </Suspense>
            </div>
            <p>
            <strong>
                To add a new model to your app, <br />
                run the following in your terminal:
            </strong>
            </p>
            <pre>
            <code>blitz generate all project name:string</code>
            </pre>
            <div style={{ marginBottom: "1rem" }}>(And select Yes to run prisma migrate)</div>
            <div>
            <p>
                Then <strong>restart the server</strong>
            </p>
            <pre>
                <code>Ctrl + c</code>
            </pre>
            <pre>
                <code>blitz dev</code>
            </pre>
            <p>
                and go to{" "}
                <Link href="/projects">
                <a>/projects</a>
                </Link>
            </p>
            </div>
            <div className="space-x-4" style={{ marginTop: "5rem" }}>
                <a
                    className="bg-purple-300 hover:bg-purple-700 p-2 text-white rounded"
                    href="https://blitzjs.com/docs/getting-started?utm_source=blitz-new&utm_medium=app-template&utm_campaign=blitz-new"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Documentation
                </a>
                <a
                    className="bg-purple-300 hover:bg-purple-700 p-2 text-white rounded"
                    href="https://github.com/blitz-js/blitz"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Github Repo
                </a>
                <a
                    className="bg-purple-300 hover:bg-purple-700 p-2 text-white rounded"
                    href="https://discord.blitzjs.com"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Discord Community
                </a>
            </div>
        </div>
    </div>
    )
  }

  export default Content