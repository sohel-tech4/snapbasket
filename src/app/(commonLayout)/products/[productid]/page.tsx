import nexiosInstance from "../../../../../nexios.config";

const ProductsDetailsPage = async ({
  params,
}: {
  params: { productid: string };
}) => {
  // const res = await fetch(
  //   `http://localhost:5000/api/v1/products/${params.productid}`
  // );
  // const { data } = await res.json();

  const res : any = await nexiosInstance.get(`/products/${params.productid}`)
  const data = res.data.data;
  const { name, description, price, stock, category, images } = data

  return (
    <div className="md:p-10 md:py-10">
      <div className="flex flex-col md:flex-row gap-6">
        <img src={images} alt={name} className="md:w-1/2 p-2 hover:scale-105 transition-transform duration-300 rounded-md" />

        <div className="md:w-2/4 p-2">
          <h1 className="text-3xl font-bold text-gray-800 mb-2">{name}</h1>
          <p className=" text-xl mb-4">{description}</p>
          <p className="text-2xl font-semibold text-green-600 mb-4">
            Price: ${price}
          </p>
          <p className="text-xl  mb-2">Category: {category}</p>
          <div className="flex items-center justify-between">
            <p className="text-xl  mb-2">Stock: {stock}</p>
            <button className="bg-[#FA552F] btn btn-md text-white hover:bg-[#1E88E5] hover:text-white ">
              Buy Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductsDetailsPage;
