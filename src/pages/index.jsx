import Head from 'next/head';
import styled from 'styled-components';

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Title</title>
        <meta name="description" content="Description" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1>title</h1>
    </div>
  );
}
