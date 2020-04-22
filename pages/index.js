import Head from 'next/head';
import MainContainer from '../containers/MainContainer';

const Home = () => (
    <div className="container">
    <Head>
      <title>ZZMOS</title>
      <link rel="icon" href="/512.png" />
      <link rel="apple-touch-icon" href="/512.png" />
      <meta name="theme-color" content="#ffeb3b"/>
      <link rel="manifest" href="/manifest.json" />
      <meta name="robots" content="all"/>
      <meta name="description" content="Artak Mosinyan CV" />
      <meta property="og:title" content="ZZMOS" />
      <meta property="og:url" content="http://zzmos.now.sh/" />
      <meta property="og:image" content="/resources/images/social-preview.png" />
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content="ZZMOS" />
    </Head>
    <MainContainer />
    <style jsx global>{`
      @font-face {
        font-family: 'lulo-clean';
        src: url('/resources/fonts/Lulo-Clean.ttf'),
        url('/resources/fonts/Lulo-Clean.ttf');
      }
      
      @font-face {
        font-family: 'avenir-light';
        src: url('/resources/fonts/Avenir-Light.ttf'),
        url('/resources/fonts/Avenir-Light.ttf');
      }
      html,
      body,
      p,
      h1,
      h2,
      h3,
      h4,
      h5,
      h6 {
        padding: 0;
        margin: 0;
        font-family: avenir-light;
      }

      * {
        box-sizing: border-box;
      }
    `}</style>
  </div>
);

export default Home;
