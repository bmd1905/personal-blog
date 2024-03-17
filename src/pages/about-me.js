import React, { useState, useEffect } from 'react';
import Layout from '@theme/Layout';
import styles from './index.module.css';

export default function MyReactPage() {
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
      <Layout>
        <div className="hero shadow--lw">
          {/* Added paddingTop to the container */}
          <div className="container" style={{ display: 'flex', flexDirection: 'row', gap: '20px', paddingTop: '50px' }}>
            {/* Column 1 */}
            <div style={{ flex: 1, textAlign: 'justify' }}>
            <h1 className={`hero__title ${isVisible ? styles.fadeIn : ''}`}>Về Tôi</h1>
            <p className={`paragraph ${isParagraphVisible ? styles.fadeInParagraph : ''}`}>Tôi đã có một bước chuyển mình lớn từ một cậu học sinh chỉ toàn ăn chơi, không quan tâm học hành đến một người rất yêu việc học và cuộc sống ở hiện tại. Trong hành trình phát triển bản thân của mình, tôi may mắn tìm thấy được những người dẫn đường đồng điệu với tôi cả về tính cách và suy nghĩ. Giờ đây khi đã cảm nhận được những niềm hạnh phúc nhỏ nhặt trong cuộc sống, tôi muốn chia sẻ nó với tất cả mọi người.</p>
            </div>

            {/* Column 2 */}
            <div style={{ flex: 1 }}>
              {/* Lottie animation iframe */}
              {/* <iframe src="https://lottie.host/embed/d5322826-6fe6-4a74-ab94-006d5b6e5883/pICK1OVb6Z.json" style={{ width: '100%', height: '300px', border: 'none' }}></iframe> */}
              <iframe loading="lazy" width="100%" height="300" src="https://lottie.host/embed/d5322826-6fe6-4a74-ab94-006d5b6e5883/pICK1OVb6Z.json"></iframe>
            </div>
          </div>
        </div>
      </Layout>
    );
  }
