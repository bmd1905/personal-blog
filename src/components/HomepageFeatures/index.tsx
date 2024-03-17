import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

import React, { useState, useEffect } from 'react';

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<'svg'>>;
  description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Easy to Use',
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        Docusaurus was designed from the ground up to be easily installed and
        used to get your website up and running quickly.
      </>
    ),
  },
  {
    title: 'Focus on What Matters',
    Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        Docusaurus lets you focus on your docs, and we&apos;ll do the chores. Go
        ahead and move your docs into the <code>docs</code> directory.
      </>
    ),
  },
  {
    title: 'Powered by React',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        Extend or customize your website layout by reusing React. Docusaurus can
        be extended while reusing the same header and footer.
      </>
    ),
  },
];

function Feature({title, Svg, description}: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): JSX.Element {
  const [isVisible, setIsVisible] = useState(false);
  const [isParagraphVisible, setIsParagraphVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.target.classList.contains('hero__title')) {
          setIsVisible(entry.isIntersecting);
        } else if (entry.target.classList.contains('paragraph')) {
          setIsParagraphVisible(entry.isIntersecting);
        }
      });
    }, { threshold: 0.1 });

    const heroTitle = document.querySelector('.hero__title');
    const paragraph = document.querySelector('.paragraph');

    if (heroTitle) observer.observe(heroTitle);
    if (paragraph) observer.observe(paragraph);

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <div className="hero shadow--lw">
        <div className={`container ${styles.containerFlex}`}>
          <div className={styles.textSection}>
            <h1 className={`hero__title ${isVisible ? styles.fadeIn : ''}`}>Giới Thiệu</h1>
            <p className={`paragraph ${isParagraphVisible ? styles.fadeInParagraph : ''}`}>Chào các bạn, đây nơi tôi chia sẻ về hành trình lượm lặt những ngày hạnh phúc và những cách sống của cá nhân tôi. Có thể các góc nhìn này sẽ khác phần nào với các bạn, nên hãy cân nhắc trước khi xem.</p>
          </div>
          <div className={styles.textSection}>
            {/* <iframe src="https://lottie.host/embed/e4c75b46-129a-4ff2-a378-87e79012bc01/dxIpOYJ00E.json" style={{ width: '100%', height: '300px', border: 'none' }}></iframe> */}
            <iframe loading="lazy" width="100%" height="300" src="https://lottie.host/embed/e4c75b46-129a-4ff2-a378-87e79012bc01/dxIpOYJ00E.json"></iframe>
          </div>
        </div>
      </div>

      <div className={`container ${styles.containerFlex}`}>
        <div className="row">
          <div className="col col--12">
            <h2 className={`hero__title ${styles.heroTitle}`}>Giới Thiệu</h2>
          </div>
        </div>
      </div>

      <section className={styles.features}>
        <div className="container">
          <div className="row">
            {FeatureList.map((props, idx) => (
              <Feature key={idx} {...props} />
            ))}
          </div>
        </div>
      </section>
    </>

  );
}