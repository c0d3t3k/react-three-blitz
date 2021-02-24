import Head from "next/head";

import React, { useState, useEffect } from "react";


import dynamic from "next/dynamic";
import Layout from "app/core/layouts/Layout";
import SignupForm from "../components/SignupForm";

// https://blitzjs.com/docs/code-splitting#with-no-ssr
const Logo = dynamic(import("../../core/components/Logo"), {
  ssr: false,
});

function Signup3D() {
//   const [hasMounted, setHasMounted] = useState(false);

//   useEffect(() => setHasMounted(true), []);
  return (
    <Layout title="Signup">
      <Logo r3f />
      <div className="flex justify-center">
        <SignupForm />
      </div>
      
    </Layout>
  );
}

export default Signup3D