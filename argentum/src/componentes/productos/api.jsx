export const fetchProductos = async( )=> {
    const BASE_URL = "/data/producto.json"
    try{
        const response = await fetch(BASE_URL);
        const data = await response.json()
        return data 
    }catch(error){
        console.error('Error fetch dara',error)
    }
}