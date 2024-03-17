import React from 'react';
import Layout from '@theme/Layout';

export default function MyReactPage() {
  return (
    <Layout>
      <div class="hero shadow--lw">
        <div class="container">
          <h1 class="hero__title">Hero Title</h1>
          <p class="hero__subtitle">Not all heroes wear capes</p>
          <div>
            <button class="button button--secondary button--outline button--lg">
              Get Started
            </button>
          </div>
        </div>
      </div>
    </Layout>
  );
}


