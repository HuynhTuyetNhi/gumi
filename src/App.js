import React from 'react';
import './App.css';
import Time from './component/time';
import ListAnime from './component/listAnime';

function App() {

  return (
    <div className="App">
    <h1>Câu 1: Hiển thị tuần tự mỗi giây 1 phần tử trong mảng bên dưới</h1>
    <Time/>
    <h1>Câu 2:Hiển thị danh sách anime </h1>
    <ListAnime/>
    </div>
  );
}

export default App;



