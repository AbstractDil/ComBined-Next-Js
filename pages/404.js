import Head from 'next/head';



import Err404 from '../components/Error404';


import Header from '../components/Header';
import Footer from '../components/Footer';
import FooterEnd from '../components/FooterEnd';




export default function Home() {
  
  return (
    <div>
      <Head>
        <title>404 ERROR - MATHHUB COMBINED</title>
        <meta name="deScription" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap.min.css"/>
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"/>




      </Head>
     
      <Header/>
     <Err404/>
     
   
      
      
      <Footer/>
      <FooterEnd/>
      

  
 

 
    </div>
  )
}
