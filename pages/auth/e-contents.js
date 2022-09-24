import Head from 'next/head';

import Script from 'next/script';

import TitleOne from '../../components/TitleOne';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import FooterEnd from '../../components/FooterEnd';
import Materials from '../../components/Materials';



export default function Home() {
  
  return (
    <div>
      <Head>
        <title>E-Contents - MATHHUB COMBINED</title>
        <meta name="deScription" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap.min.css"/>
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"/>

<Script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js"></Script>

<Script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/js/bootstrap.min.js"></Script>


      </Head>
     
      <Header/>
      <TitleOne/>
     
         <Materials/>
      
      
      <Footer/>
      <FooterEnd/>
      

  
 

 
    </div>
  )
}
