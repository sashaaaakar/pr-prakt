import styles from "./News.module.scss";
import { posts } from "../../constants/news";

export default function News() {
  return (
    <div id="news" className={styles.container}>
      <h1 className={styles.header}>НОВОСТИ</h1>
      <div className={styles.posts_container}>
        {posts.map((post, index) => (
          <div className={styles.posts}>
            <a href={post.arrow}>
              <img className={styles.img} src={post.img} />
            </a>
            <span className={styles.data}>{post.data}</span>
            <h2 className={styles.post_heading}>
              <a className={styles.arrow} href={post.arrow}>
                {post.heading}
              </a>
            </h2>
          </div>
        ))}
      </div>
    </div>
  );
}
