// pages/_app.tsx
import type { AppProps } from 'next/app';
import { ThemeProvider } from 'next-themes';
import Layout from '@/components/Layout';
import Head from 'next/head'; // Head 추가
import '@/styles/globals.css';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false}>
      <Head>
        <title>SJ Tech</title>
        <link rel="icon" type="image/png" href="/favicon_gold.png" />
        <meta name="description" content="AI로 혁신을 이끌어내는 기술 파트너" />
      </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ThemeProvider>
  );
}
