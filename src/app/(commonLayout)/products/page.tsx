import Image from "next/image";

const Products = async () => {
  const res = await fetch("http://localhost:5000/api/v1/products");
  const { data } = await res.json();

  console.log(data);

  return (
   <div className="my-5">
    <h1 className="text-center my-10 text-3xl font-bold">All Products</h1>
     <div className="flex flex-wrap gap-4 justify-center">
      {data?.map((item: any) => (
        <div key={item?._id} className="card glass w-96">
          <figure>
            <img
              src={item?.images}
              alt="car!"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">{item?.name}</h2>
            <p>How to park your car at your garage?</p>
            <div className="card-actions justify-end">
              <button className="btn btn-primary">Learn now!</button>
            </div>
          </div>
        </div>
      ))}
    </div>
   </div>
  );
};

export default Products;
