import React from 'react';
import Layout from '@theme/Layout';

export default function MyReactPage() {
  return (
    <Layout>
      <div className="hero shadow--lw">
        {/* Added paddingTop to the container */}
        <div className="container" style={{ display: 'flex', flexDirection: 'row', gap: '20px', paddingTop: '50px' }}>
          {/* Column 1 */}
          <div style={{ flex: 1, textAlign: 'justify' }}>
            <h1 className="hero__title">Về Tôi</h1>
            <p className="paragraph">Tôi đã có một bước chuyển mình lớn từ một cậu học sinh chỉ toàn ăn chơi, không quan tâm học hành đến một người rất yêu việc học và cuộc sống ở hiện tại. Trong hành trình phát triển bản thân của mình, tôi may mắn tìm thấy được những người dẫn đường đồng điệu với tôi cả về tính cách và suy nghĩ. Giờ đây khi đã cảm nhận được những niềm hạnh phúc nhỏ nhặt trong cuộc sống, tôi muốn chia sẻ nó với tất cả mọi người.</p>
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
