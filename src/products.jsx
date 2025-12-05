import Card from "./card.jsx";
import product1 from './assets/product1.png';
import product2 from './assets/product2.png';
import product3 from './assets/product3.png';
import product4 from './assets/product4.png';
import product5 from './assets/product5.png';
import product6 from './assets/product6.png';
import test from './assets/ass.png';

function Products() {
  return (
    <div className="products">
    {/* <Header /> */}
      <div className="productCont">
        <div className="contents">
          <div className="img">
            <img src={product6} alt="BoldTap" />
          </div>
          <div className="txtCont">
            <h1>Make a good first impression</h1>
            <p>Never run out of business cards again</p>
          </div>
        </div>
        <div className="productItems">
          <Card image={product1} title="Bold Standard" text="75,000.00 TZS" />
          <Card image={product2} title="Bold Premium" text="170,000.00 TZS" />
          <Card image={product3} title="Bold Custom" text="90,000.00 TZS" />
          <Card image={test} title="Bold Button" text="35,000.00 TZS" />
          <Card image={product5} title="Bold Band" text="48,000.00 TZS" />
          <Card image={product4} title="Bold Ring" text="20,0000.00 TZS" />
        </div>
      </div>
    </div>
  );
}

export default Products;
