import styles from "../styles/ProductList.module.css";
import ProductCard from "./ProductCard";

const LastestScreen = () => {
    return (

        <div className={styles.container}>

            <p className="mt-2 text-3xl leading-8 font-bold tracking-tight text-gray-900">
                Lastest reviews
            </p>

            <div className={styles.wrapper}>

                <ProductCard/>
                <ProductCard/>
                <ProductCard/>
                
            </div>

        </div>        
      
    )
}

export default LastestScreen
