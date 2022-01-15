import styles from "../styles/ProductList.module.css";
import ProductCard from "./ProductCard";

const BestproductScreen = () => {
    return (
        <div>
            
            <div className={styles.container}>

                <p className="mt-2 text-3xl leading-8 font-bold tracking-tight text-gray-900">
                    Best product from reviews
                </p>

                <div className={styles.wrapper}>

                    <ProductCard/>
                    <ProductCard/>

                </div>

            </div>        

        </div>
    )
}

export default BestproductScreen
