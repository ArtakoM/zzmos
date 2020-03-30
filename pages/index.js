import Head from 'next/head';
import { StylesProvider } from '@material-ui/core/styles';
import MainContainer from '../containers/MainContainer';

const Home = () => (
    <div className="container">
    <Head>
      <title>Create Next App</title>
      <link rel="icon" href="/favicon.ico" />
      <link rel="apple-touch-icon" href="/favicon.ico"></link>
      <meta name="theme-color" content="#ffeb3b"/>
      <link rel="manifest" href="/manifest.json" />
      <meta name="robots" content="all"/>
      <meta name="Description" content="Artak Mosinyan CV"></meta>
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
