import ProductCard from "../components/ProductCard.tsx";

function MainPage() {
  return <div className="w-full">
    <div className="flex flex-row items-center justify-center w-full">
    <ProductCard></ProductCard>
    <ProductCard></ProductCard>
    <ProductCard></ProductCard>
    </div>
    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 w-full rounded-full mt-5">Load More...</button>
    </div>;
}
export default MainPage;
