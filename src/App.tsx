import ProductCard from "./components/ProductCard";
import ProductCardContainer from "./components/ProductCardContainer";

function App(){
  return (
    <>
      <ProductCardContainer
        title="Lo mas Vendido">
        <ProductCard
          title="Teclado Mecánico"
          description="Teclado Mecánico Wireless Redragon Azure K652 Rgb 75% Sp"
          src="https://http2.mlstatic.com/D_NQ_NP_855390-MLU74275224636_022024-O.webp"
          precio={90.234}
        />

        <ProductCard
          title="Cable Kz Usb C - Pin C"
          description="Cable Kz Usb C - Pin C Con Microfono Repuesto Original"
          src="https://http2.mlstatic.com/D_NQ_NP_622684-MLA82301950220_022025-O.webp"
          precio={16.609}
        />

        <ProductCard
          title="Auriculares KZ gaming ZSN Pro"
          description="Auriculares KZ gaming ZSN Pro X sin micrófono color negro 1 par"
          src="https://http2.mlstatic.com/D_NQ_NP_999454-MLA84116925938_052025-O.webp"
          precio={42.921}
        /> 

        <ProductCard
          title="Apple iPad 11 Gen (2025)"
          description="Apple iPad 11 Gen (2025) Chip A16 11 Pulgadas 6gb Ram 128 Gb"
          src="https://http2.mlstatic.com/D_NQ_NP_738450-CBT83018743324_032025-O.webp"
          precio={523.385}
        /> 

        <ProductCard
          title="Funda Infantil Para Tablet"
          description="Funda Infantil Para Tablet Samsung A8 X200 10.5 + Vidrio"
          src="https://http2.mlstatic.com/D_NQ_NP_857212-MLA76273611895_052024-O.webp"
          precio={10.564}
        /> 

        <ProductCard
          title="Notebook Lenovo Ideapad 1"
          description="Notebook Lenovo Ideapad 1 15IAU7 Pantalla Táctil Fhd De 15,6 Pulgadas"
          src="https://http2.mlstatic.com/D_NQ_NP_736072-MLU76955229828_062024-O.webp"
          precio={819.999}
        />  
      </ProductCardContainer>
      
    </>
  )
}


export default App;
