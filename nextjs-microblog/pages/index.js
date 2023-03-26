import Link from "next/link";
import Layout from '../components/Layout';
import styles from "../styles/Home.module.css"
import utilStyle from "../styles/utils.module.css"
import {getPostData} from "../lib/post"

//SSGの場合
export async function getStaticProps(){
  const allPostsData = getPostData();
  console.log(allPostsData);

  return{
    props:{
      allPostsData,
    }
  }
}

export default function Home({allPostsData}) {
  return (
    <Layout>
      <section className={utilStyle.headingMd}>
        <p>
          毒を吐きます
        </p>
      </section>
      <section>
        <h2 className={utilStyle.headingMd}>🗒エンジニアのブログ</h2>
        <div className={styles.grid}>
          <article>
            <Link legacyBehavior href="/">
              <img src="/images/thumbnail01.jpg" className={styles.thumbnailImage}/>
            </Link>
            <Link legacyBehavior href="/">
              <a className={utilStyle.boldText}>SSGとSSRの使い分けの場面はいつなのか？</a>
            </Link>
            <br />
            <small className={utilStyle.lightText}>2023/03/25</small>
          </article>
          <article>
            <Link legacyBehavior href="/">
              <img src="/images/thumbnail01.jpg" className={styles.thumbnailImage}/>
            </Link>
            <Link legacyBehavior href="/">
              <a className={utilStyle.boldText}>SSGとSSRの使い分けの場面はいつなのか？</a>
            </Link>
            <br />
            <small className={utilStyle.lightText}>2023/03/25</small>
          </article>
          <article>
            <Link legacyBehavior href="/">
              <img src="/images/thumbnail01.jpg" className={styles.thumbnailImage}/>
            </Link>
            <Link legacyBehavior href="/">
              <a className={utilStyle.boldText}>SSGとSSRの使い分けの場面はいつなのか？</a>
            </Link>
            <br />
            <small className={utilStyle.lightText}>2023/03/25</small>
          </article>
          <article>
            <Link legacyBehavior href="/">
              <img src="/images/thumbnail01.jpg" className={styles.thumbnailImage}/>
            </Link>
            <Link legacyBehavior href="/">
              <a className={utilStyle.boldText}>SSGとSSRの使い分けの場面はいつなのか？</a>
            </Link>
            <br />
            <small className={utilStyle.lightText}>2023/03/25</small>
          </article>
        </div>
      </section>
    </Layout>
  )
}
