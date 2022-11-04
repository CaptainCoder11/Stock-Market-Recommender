import './App.css';
import HeaderComponent from './component/header/header.component';
import { useState } from 'react';
import StockInfoComponent from './component/stockinfo/stock.info.component';

function App() {
  const [symbol,setsymbol] = useState<String>()
  const changeValue = (value:String) => {
    setsymbol(value);
  }
  return (
    <div className="App">
      <HeaderComponent changeValue={changeValue}></HeaderComponent>
      <StockInfoComponent symbol={symbol}></StockInfoComponent>
    </div>
  );
}

export default App;
