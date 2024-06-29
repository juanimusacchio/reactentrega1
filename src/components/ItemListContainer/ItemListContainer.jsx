const categories = [
    {
      id: 1,
      name: "Remeras",
      img: "https://triaxgo.com.ar/cdn/shop/files/8782065-PhotoRoom.png-PhotoRoom.png?v=1698759739",
    },
    {
      id: 2,
      name: "Pantalones",
      img: "https://nocomplyatx.com/cdn/shop/products/VN00000DBLK-ALT7_900x.webp?v=1657058199",
    },
    {
      id: 3,
      name: "Calzado",
      img: "https://triaxgo.com.ar/cdn/shop/files/9420368-Photoroom.png-Photoroom.png?v=1714746649",
    },
    {
      id: 4,
      name: "Accesorios",
      img: "https://static.flexdog.es/flexdog-5/products/images/909900a2-c469-4768-8d93-5f91f1a990d2_instyle_ai.png?width=350",
    },
    
];
function ItemListContainer({greetings}) {
    //console.log(categorias)
    return (
        <>
          <h2>{greetings}</h2>
          <div className="row">
            {categories.map(item => (
              <div key={item.id} className="col-sm-4 mb-3">
                <div className="card" style={{width: '18rem'}}>
                  <img src={item.img} className="card-img-top" alt={item.name} />
                  <div className="card-body">
                    <h5 className="card-title">{item.name}</h5>
                    <a href="#" className="btn btn-primary">Comprar</a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </>
      );
}

export default ItemListContainer