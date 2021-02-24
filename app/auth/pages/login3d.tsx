import Head from "next/head";

import React, { useState, useEffect } from "react";


import dynamic from "next/dynamic";
import Layout from "app/core/layouts/Layout";
import LoginForm from "../components/LoginForm";

// https://blitzjs.com/docs/code-splitting#with-no-ssr
const Logo = dynamic(import("../../core/components/Logo"), {
    ssr: false,
});

function Login3D() {
    //   const [hasMounted, setHasMounted] = useState(false);

    //   useEffect(() => setHasMounted(true), []);
    return (
        <Layout title="Login">
            <Logo r3f />
            <div className="flex justify-center">
                <LoginForm />
            </div>
        </Layout>
    );
}

export default Login3D