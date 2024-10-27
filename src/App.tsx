import React, { useEffect, useState } from 'react';
import './App.css';

const App: React.FC = () => {
  const [showImage, setShowImage] = useState<boolean>(false);
  const [showBanner, setShowBanner] = useState<boolean>(false);
  const [content, setContent] = useState<string>('このアプリは意図的にパフォーマンスを低下させています。');
  const [data, setData] = useState<string>('');
  const [computeResult, setComputeResult] = useState<string>('');

  // ページビューのロード時間を悪化させる
  const heavyComputation = () => {
    const start = Date.now();
    while (Date.now() - start < 5000) {
      // 5秒間ブロック
    }
  };

  useEffect(() => {
    heavyComputation();

    // バックエンドのAPIを呼び出す
    fetchComputeResult();

    // LCPを悪化させる
    setTimeout(() => {
      setShowImage(true);
    }, 6000);

    // CLSを悪化させる
    setTimeout(() => {
      setShowBanner(true);
    }, 3000);
  }, []);

  // バックエンドの /compute エンドポイントを呼び出す関数
  const fetchComputeResult = async () => {
    try {
      const response = await fetch('http://localhost:3001/intensive-calc');
      const result = await response.text();
      setComputeResult(result);
    } catch (error) {
      console.error('バックエンドからのデータ取得中にエラーが発生しました:', error);
    }
  };

  // INPを悪化させる
  const handleClick = () => {
    const start = Date.now();
    while (Date.now() - start < 4000) {
      // 4秒間ブロック
    }
  };

  // ボタンをクリックしたときにエラーを発生させる
  const handleErrorButtonClick = () => {
    throw new Error('An error occurred due to button click');
  };

  return (
    <div className="App" onClick={handleClick}>
      {showBanner && (
        <div className="banner">
          <p>遅れて表示されるバナー</p>
        </div>
      )}
      <header className="App-header">
        <h1>パフォーマンスが悪いサンプルアプリ</h1>
        <p>{content}</p>
        {/* エラーを発生させるボタン */}
        <button onClick={handleErrorButtonClick}>エラーを発生させる</button>
        <div>
          <h2>バックエンドからの計算結果：</h2>
          {computeResult ? <p>{computeResult}</p> : <p>計算中...</p>}
        </div>
        {showImage && (
          <img
            src="/large_image.png"
            alt="Logo"
          />
        )}
      </header>
    </div>
  );
};

export default App;
