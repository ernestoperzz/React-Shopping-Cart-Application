import './ProductCart.css';


function ProductCart (props){
    return(
        <div className = "productCard">
            <dt>
                <span className = "productName">{props.name}</span>
                <span className = "productPrice">{props.price}</span>
               <span className = "productCategory">{props.category}</span>
            </dt>
        </div>
    );
}

export default ProductCart;