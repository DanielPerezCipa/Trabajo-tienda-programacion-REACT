import { useDispatch } from "react-redux";
import { addItem } from "./CartSlice";
import "./ProductList.css";

const plants = [
  {
    id: 1,
    name: "Lavanda",
    description: "Planta aromática",
    price: 15,
    image: "https://www.aprilplants.com/cdn/shop/products/Lavanda-dentata_14o_cotton_comprar-plantas-online_plantas-de-interior_1024x.jpg?v=1647853834"
  },
  {
    id: 2,
    name: "Aloe Vera",
    description: "Planta medicinal",
    price: 10,
    image: "https://cdn.britannica.com/73/177473-050-7B7C6918/aloe-vera-plant.jpg"
  },
  {
    id: 3,
    name: "Geranio",
    description: "Planta medicinal",
    price: 20,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8wZ-tvr00cW-osW6_ciRykuzegcy2pCsd0A&s"

  },
  {
    id: 4,
    name: "Hortensia",
    description: "Planta medicinal",
    price: 50,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQX_YSQLp38RqZKhNyIVIGqVYB8FD3Q8ri2mg&s"

  },
  {
    id: 5,
    name: "Cactus",
    description: "Planta medicinal",
    price: 25,
    image: "https://mygarden.com.co/wp-content/uploads/2024/12/8-8.png"

  },
  {
    id: 6,
    name: "Romero",
    description: "Planta medicinal",
    price: 330,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKzsvrIf0fb4M4aEKy6BUPL5ZHMrohxdnTgQ&s"

  },
  {
    id: 7,
    name: "Rosas",
    description: "Planta medicinal",
    price: 40,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQT4AHX4jCpbaA6yKrfkMVG4mnWqyqbOzCRwA&s"

  },
  {
    id: 8,
    name: "Helecho",
    description: "Planta medicinal",
    price: 60,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR38en_u_ynsglwkGJwe1PiaN06DMYSPIzQTA&s"

  }
];

function ProductList() {
  const dispatch = useDispatch();

  return (
    <div className="products">
      {plants.map(plant => (
        <div className="card" key={plant.id}>
          <img src={plant.image} alt={plant.name} />
          <h3>{plant.name}</h3>
          <p>{plant.description}</p>
          <p>${plant.price}</p>
          <button onClick={() => dispatch(addItem(plant))}>
            Agregar al carrito
          </button>
        </div>
      ))}
    </div>
  );
}

export default ProductList;
