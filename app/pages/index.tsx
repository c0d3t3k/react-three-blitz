import Head from "next/head";

import React, { useState, useEffect } from "react";


import dynamic from "next/dynamic";
import Content from "./content";
import Layout from "app/core/layouts/Layout";

// https://blitzjs.com/docs/code-splitting#with-no-ssr
const Hero = dynamic(import("./hero"), {
  ssr: false,
});

export default function Index() {
  const [hasMounted, setHasMounted] = useState(false);

  useEffect(() => setHasMounted(true), []);
  return (
    <Layout>
      <Hero r3f />
      <Content />
    </Layout>
  );
}