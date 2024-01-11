import Head from 'next/head'
import Image from 'next/image'
import styles from '@/styles/Home.module.css'
import React from 'react';
import Link from 'next/link';



export default function Home() {
  return (
    <>
      <Head>
        <title>Ana Beauty</title>
        <meta name="keywords" content="Studio de Beleza, STUDIO ANA BEAUTY - ITAJAÍ, Sobrancelha, Sobrancelhas Itajaí, Itajaí, Designer de Sobrancelhas, Ana Sobrancelhas Itajaí, Ana Sobrancelhas, Salão de Beleza, Cílios, Cilios, Unha, Manicure" />
        <meta 
          name="description"
          content="STUDIO ANA BEAUTY - ITAJAÍ"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
        <link rel="apple-touch-icon" sizes="180x180" href="images/apple-touch-icon.png"/>
        <link rel="icon" type="image/png" sizes="32x32" href="images/favicon-32x32.png"/>
        <link rel="icon" type="image/png" sizes="16x16" href="images/favicon-16x16.png"/>
        <link rel="manifest" href="images/site.webmanifest"></link>

      </Head>

      <div>
        <div className={styles.container}>
          <div className={styles.box}>
            <div className={styles.box_header}>
              <Image 
                src={"/images/foto4.png"}
                alt="Foto"
                className={styles.image}
                width="843"
                height="843"           
              />
              <p id={styles.name}>Ana Beauty</p>
              {/* <p id={styles.description}>Especialista em Sobrancelhas</p> */}
            </div>

            <div className={styles.box_button}>
                <Link href="https://www.salao99.com.br/aanasobrancelhas/" className={styles.button}>AGENDA</Link>
                <Link href="https://api.whatsapp.com/send?phone=5547997141634&text=Ol%C3%A1!%20Gostaria%20de%20mais%20informa%C3%A7%C3%B5es%20sobre%20seu%20trabalho." className={styles.button}>CURSO VIP</Link>
                <Link href="https://api.whatsapp.com/send?phone=5547997141634&text=Ol%C3%A1!%20Gostaria%20de%20mais%20informa%C3%A7%C3%B5es%20sobre%20seu%20trabalho." className={styles.button}>CONTATO</Link>
                <Link href="https://goo.gl/maps/u2FuB6DPbyrwqAhj6" className={styles.button}>LOCALIZAÇÃO</Link>
            </div>
          </div>
          
        </div>
      </div>
    </>
  )
}
