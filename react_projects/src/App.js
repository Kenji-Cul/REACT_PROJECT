import './App.css';
import Accordian from './components/accordian';
import TabTest from './components/custom-tabs/tab-test';
import ImageSlider from './components/image-slider';
import LightDarkMode from './components/light-dark-mode';
import LoadMoreData from './components/load-more-data';
import QRCodeGenerator from './components/qr-code-generator';
import RandomColor from './components/random-color';
import ScrollIndicator from './components/scroll-indicator';
import StarRating from './components/star-rating';
import TreeView from './components/tree-view';
import menus from './components/tree-view/data';

function App() {
  return (
    <div className="App">
     {/* Accordian component */}
      {/* <Accordian /> */}

      {/* Random color component */}
      {/* <RandomColor /> */}

      {/* Star Rating Component*/}
      {/* <StarRating noOfStars={10}/> */}

      {/* Image Slider Component */}
      {/* <ImageSlider url={'https://picsum.photos/v2/list'} page={'1'} limit={'10'}/> */}

     {/* Load more products component */}
     {/* <LoadMoreData /> */}

    {/* Tree view component /menu UI component / recursive navigation menu */}
    {/* <TreeView menus={menus}/> */}

    {/*  QR Code Generator*/}
    {/* <QRCodeGenerator /> */}

    {/* light and dark theme switch */}
    {/* <LightDarkMode /> */}

    {/* Scroll indicator component */}
    {/* <ScrollIndicator url={'https://dummyjson.com/products?limit=100'}/> */}

    {/* Custom tabs component */}
    <TabTest />
    </div>
  );
}

export default App;
