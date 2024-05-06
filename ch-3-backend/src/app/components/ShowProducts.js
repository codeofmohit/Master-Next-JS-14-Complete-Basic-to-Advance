import { js_posts_via_local } from "../constants/constants";

const Product = ({ type, desc }) => {
  return (
    <div className="product my-2 p-2">
      <h1 className="m-1 font-bold text-2xl">{type}</h1>
      <h1>{desc}</h1>
    </div>
  );
};

const ShowProducts = async () => {
  const getData = async (api) => {
    try {
      const res = await fetch(api);
      if (res.ok) {
        const data = await res.json();
        return data;
      }
    } catch (error) {
      console.log(error);
    }
  };

  const products = await getData(js_posts_via_local);

  return (
    <div className="main flex flex-col justify-center items-center vh-[50%]">
      <h1>Congratulations on creating your own first next js get api</h1>
      <h1>here is the data coming from your own next js get api</h1>
      <section className="p-4 m-2">
        {products.map((product) => {
          const { title, body } = product;
          return <Product key={title} type={title} desc={body} />;
        })}
      </section>
    </div>
  );
};
export default ShowProducts;
