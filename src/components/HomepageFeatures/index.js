import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'A propos de Arryn',
    Svg: require('@site/static/img/logo.svg').default,
    description: (
      <>
        Arryn est un serveur Smp. Il a un mode survie
        avancer et permet d'en profiter un maximum sur la totalité tu jeu !
      </>
    ),
  },
  
  {
    title: 'Un peux plus',
    Svg: require('@site/static/img/logo.svg').default,
    description: (
      <>
        Une multitude de <code>/cmd</code>  personnaliser, lis la documentation
        pour en savoir plus ! 
      </>
    ),
  },
  {
    title: 'La documentations',
    Svg: require('@site/static/img/logo.svg').default,
    description: (
      <>
        Une documentation crée avec soin par la main d'Aposh.
        Merci de la lire ce qui pourrait énormément vous aider 
        dans l'aventure !
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
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
