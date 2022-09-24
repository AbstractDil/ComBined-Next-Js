import Head from 'next/head';

import Script from 'next/script';

import Title from '../components/Title';
import Header from '../components/Header';
import Footer from '../components/Footer';
import FooterEnd from '../components/FooterEnd';
import LatestNews from '../components/LatestNews';


export default function Home() {
  return (
    <div>
      <Head>
        <title>HOME - MATHHUB COMBINED</title>
        <meta name="deScription" content="MathHub ComBined - Developed By Sagar Nandy" />
        <link rel="icon" href="/favicon.ico" />
<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap.min.css"/>
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"/>



      </Head>
     
      <Header/>
      <Title/>
     
      <LatestNews/>     
      
      
      <Footer/>
      <FooterEnd/>
      

  
      <Script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js"></Script>

<Script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/js/bootstrap.min.js"></Script>

 
    </div>
  )
}
