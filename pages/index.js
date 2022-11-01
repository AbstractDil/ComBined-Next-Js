import Head from 'next/head';

import Script from 'next/script';

import Title from '../components/Title';
import Header from '../components/Header';
import Footer from '../components/Footer';
import FooterEnd from '../components/FooterEnd';

import Link from  'next/link';


export const getStaticProps = async () => {
  const res = await fetch("https://mathhub.nandysagar.in/combined/api/noti_fetch.php");
  const data = await res.json();

  return {
    props: { blog:data}
  };
};


const  News = ({blog}) => {

return (

 
  <>
  <Head>
        <title>HOME - MATHHUB COMBINED</title>
        <meta name="deScription" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap.min.css"/>
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"/>




      </Head>

      <Header/>
      <Title/>

      <div className="container  mt-3  " >

<div className="row">

  {blog?.map(item => {
      return (
          <div key={item.id} >

<div className=" col-md-12" >

<div className="  mb-3 justify-content-center">

<div className="col-md-12 mb-3 alert alert-info border-1 " >
<p className="font-weight-bold text-center">

                  
                  <span className="label label-danger blink">New</span>
                  <span className="titleOne ">{item.title}</span> <span className="label label-danger blink ">New</span>
                 
                  <br />
                 <br />
     <span className="text-danger"><span className="glyphicon glyphicon-hand-right"></span> Application Start  :</span>  {item.start_date}<br/>
                <span className='text-danger'><span className="glyphicon glyphicon-hand-right"></span> Application End : </span>   {item.end_date}<br/>
                <span className='text-danger'><span className="glyphicon glyphicon-hand-right"></span>  Edit Window :  </span>{item.edit_date}<br/>
                <span className='text-danger'><span className="glyphicon glyphicon-hand-right"></span>  Application Fees : </span> {item.fees}<br/>
                <span className='text-danger'><span className="glyphicon glyphicon-hand-right"></span> </span> {item.other}<br/>
                </p>
                <hr className='hr-info' />
                <div className="text-center">

                  <Link href={item.application_link}>
                  
                <a  type='button' className='btn btn-warning'><i className='fa fa-pencil-square-o'></i> Apply Now</a>
                </Link>
                
                <Link href={item.notification_link}>
                
                    <a type='button' className='btn btn-down'><i className='fa fa-download'></i> Notification </a>
                </Link>
                   
                </div>
                
            </div>
            
        </div>

  
  </div>

          
              
          
          </div>
      )
  })};

</div>

</div>

   <Footer/>
      <FooterEnd/>
<Script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js"></Script>

<Script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/js/bootstrap.min.js"></Script>
  </>
);
}

export default News