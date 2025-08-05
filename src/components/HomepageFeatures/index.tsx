import type {ReactNode} from 'react';
import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  // Svg: React.ComponentType<React.ComponentProps<'svg'>>;
  img: string;
  description: ReactNode;
  url: string;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Addressing the Critical Lack of Awareness',
    // Svg: require('@site/static/img/f1.png').default,
    img: 'img/f1.png',
    description: (
      <>
        Oftentimes, Despite the high prevalence of ADHD, public awareness and understanding of the condition remain insufficient, 
        leading to misconceptions and inadequate support for those affected.
      </>
    ),
    url:'/adhd/blog/paper-beyond-the-prescription#main-point-1-addressing-the-critical-lack-of-awareness'
  },
  {
    title: ' Comprehensive Treatment Approaches',
    // Svg: require('@site/static/img/f2.png').default,
    img: 'img/f2.png',
    description: (
      <>
        The Boundaries of Effective ADHD Treatment Extend Far and Wide, encompassing a variety of Approaches Such as Medication, 
        Cognitive-Behavioral Therapy, Emotional Regulation Strategies, and Structured Environmental Support.
      </>
    ),
    url:'/adhd/blog/paper-beyond-the-prescription#main-point-2-comprehensive-treatment-approaches'
  },
  {
    title: 'Considering Medication Carefully',
    // Svg: require('@site/static/img/f3.png').default,
    img: 'img/f3.png',
    description: (
      <>
        While medication has been proven to enhance attention and impulse control in individuals with ADHD, 
        it often comes with negative side effects that raise concerns about long-term dependency and overall well-being.
      </>
    ),
    url:'/adhd/blog/paper-beyond-the-prescription#main-point-3-considering-medication-carefully'
  },
  {
    title: 'The Power of Long-Term Strategies',
    // Svg: require('@site/static/img/f4.png').default,
    img: 'img/f4.png',
    description: (
      <>
        Due to the fact that ADHD symptoms manifest differently in each individual, 
        long-term interventions—such as therapy and structured support systems—often provide more sustainable benefits compared to short-term medication alone.
      </>
    ),
    url:'/adhd/blog/paper-beyond-the-prescription#main-point-4-the-power-of-long-term-strategies'
  },
];

function Feature({title, img, description, url}: FeatureItem) {
  return (
    <a href={url} className={clsx('col col--6', styles.feature)}>
    <div >
      <div className="text--center">
        <img className={styles.featureSvg} src={img}  role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
    </a>
  );
}

export default function HomepageFeatures(): ReactNode {
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
