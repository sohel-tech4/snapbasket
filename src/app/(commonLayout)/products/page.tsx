import Image from "next/image";

const Products = async () => {
  const res = await fetch("http://localhost:5000/api/v1/products");
  const {data} = await res.json()

  
  return (
    <div className="card glass w-96">
      {/* <figure>
        <Image src={data?.images} height={50} width={50}></Image>
      </figure>
      <div className="card-body">
        <h2 className="card-title">{data.name}</h2>
        <p>How to park your car at your garage?</p>
        <div className="card-actions justify-end">
          <button className="btn btn-primary">Learn now!</button>
        </div>
      </div> */}
    </div>
    // <></>
  );
};

export default Products;
