import { Link } from 'react-router-dom';
import './Productos.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMinusCircle } from '@fortawesome/free-solid-svg-icons'

const Agregar = () => {
    let productos = []
    let producto = {} 

    //Obtengo mi producto del localStorage
    producto = JSON.parse(localStorage.getItem('producto'))
    
    //Hago un push de producto a mis productos
    /*productos.push(producto)
    console.log(productos)*/

    const eliminarItem = (id) => {
        productos = productos.filter(producto =>(producto.id !== id
        localStorage.removeItem(producto))
    }
    }

    return (

        <div className='container mt-4'>
            <h2>Productos</h2>

            <Link to="/"><button className="btn btn-success me-3">Agregar +</button></Link>
            <button className="btn btn-danger">Eliminar todo</button>

            <div className='row border-top border-bottom mt-4 p-2'>
                <div className='col-2 fw-bolder'>#</div>
                <div className='col-5 fw-bolder'>Producto</div>
                <div className='col-2 fw-bolder'>Cantidad</div>
                <div className='col-2 fw-bolder'>Precio</div>
                <div className='col-1 fw-bolder'>Acción</div>
            </div>
            
                {producto !== null?
                    productos.push(producto)
                :
                    <p>No hay productos cargados</p>
                }

                {productos.length > 0?
                    productos.map(prod => (
                        <div className='row border-top border-bottom mt-4 p-2' key={prod.id}>
                            <div className='col-2 fw-bolder'>#</div>
                                <div className='col-5 fw-bolder'>{prod.nombre}</div>
                                <div className='col-2 fw-bolder'>{prod.cantidad}</div>
                                <div className='col-2 fw-bolder'>{prod.precio}</div>
                                <div className='col-1 fw-bolder' onClick={() => eliminarItem(prod.id)}>
                                    <FontAwesomeIcon icon={faMinusCircle} />
                                </div>
                            </div>
                    ))
                :
                    <p>No hay productos cargados</p>
                }
        </div>
    );
}
 
export default Agregar;