import Head from "next/head";
import styles from "./layout.module.css";
import utilStyles from "../styles/utils.module.css";

const  name = '京都人';
export const siteTitle = 'Next.js blog';

const Layout = ({children}) => {


    return (
        <div className={styles.container}> 
            <Head>
                <link rel='icon' href="/favicon.ico"></link>
            </Head>
            <header className={styles.header}>
                <img class={utilStyles.borderCircle} src="/images/IMG_0285.png" />
                <h1 class={utilStyles.heading2Xl}>{name}</h1>
            </header>
            <main>{children}</main>
        </div>
    )
}

export default Layout