import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';
import Link from '@docusaurus/Link';

const FeatureList = [
  {
    title: '个人博客',
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        博主的碎碎念，没什么营养，随缘更新。完全没有文学性和艺术性。
      </>
    ),
    buttonText: '📗',
    buttonLink: '/blog',
  },
  {
    title: '生活百科',
    Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        和计算机没有关系的知识，整理的不太系统。不是博主的专业，漏洞百出。
      </>
    ),buttonText: '🍳',
    buttonLink: '/docs/intro',
  },
  {
    title: '技术文档',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        和计算机相关的知识，更加不系统。由于博主学业不精，所有也是漏洞百出。
      </>
    ),
    buttonText: '💻',
    buttonLink: '/cs/intro',
  },
];

function Feature({ Svg, title, description, buttonText, buttonLink }) {
  return (
    <div className={clsx('col col--4')}>
      {/* <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div> */}
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
      <div className={styles.buttons} style={{ display: 'flex', justifyContent: 'center' }}>
        <Link
          className="button button--secondary button--lg"
          to={buttonLink}>
          {buttonText}
        </Link>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
