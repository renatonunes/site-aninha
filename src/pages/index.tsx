import Head from 'next/head'
import Image from 'next/image'
import styles from '@/styles/Home.module.css'
import React from 'react';
import Link from 'next/link';



export default function Home() {
  return (
    <>
      <Head>
        <title>Ana Sobrancelhas</title>
        <meta name="keywords" content="Sobrancelha, Sobrancelhas Itajaí, Itajaí, Designer de Sobrancelhas, Ana Sobrancelhas Itajaí" />
        <meta 
          name="description"
          content="Melhor designer de sobrancelhas em Itajaí"
        />
        {/* <meta name="viewport" content="width=device-width, initial-scale=1.0"/> */}
      </Head>

      <div>
        <div className={styles.container}>
          <div className={styles.box}>
            <div className={styles.box_header}>
              <img 
                src={"/images/foto.png"}
                alt="Foto"
                className={styles.image}                
                />
              <p id={styles.name}>Ana Gilli</p>
              <p id={styles.description}>Especialista em Sobrancelhas</p>
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
