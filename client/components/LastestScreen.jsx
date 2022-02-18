import styles from "../styles/ProductList.module.css";
import ProductCard from "./ProductCard";
import ProductCardTH from "./ProductCardTH";
import ProductCardAxios from "./ProductCardAxios";

const LastestScreen = () => {
    return (

        <div className={styles.container}>

            <p className="mt-2 mb-4 text-2xl leading-8 font-bold tracking-tight text-gray-900">
                Lastest reviews
            </p>

            <div className={styles.wrapper}>

                <ProductCardAxios/>
                {/* <ProductCardTH/>
                <ProductCard/> */}
                
            </div>

        </div>        
      
    )
}

export default LastestScreen
