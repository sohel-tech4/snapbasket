import nexiosInstance from "@/config/nexios.config";
import Link from "next/link";

const Products = async () => {
  const { data }: any = await nexiosInstance.get("/products", {
    cache: "no-store",
  });

  console.log(data);

  return (
    <div className="my-5">
      <h1 className="text-center my-10 text-3xl font-bold">All Products</h1>
      <div className="flex flex-wrap gap-4 justify-center ">
        {data?.data?.map((item: any) => (
          <div
            key={item?._id}
            className="card glass w-96 hover:scale-105 transition-transform duration-300"
          >
            <figure>
              <img
                src={item?.images}
                alt="car!"
                className="hover:scale-105 transition-transform duration-300"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title">{item?.name}</h2>
              <p>{item?.description}</p>
              <div className="card-actions flex justify-center items-center">
                <p>Price: {item?.price}$</p>
                <Link
                  href={`/products/${item?._id}`}
                  className="bg-[#FA552F] btn btn-md text-white hover:bg-[#1E88E5] hover:text-white "
                >
                  View Details
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
