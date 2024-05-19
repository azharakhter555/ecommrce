import { useRouter } from "next/router";
const SingleProductPage = () => {
    const router = useRouter();
    const { slug } = router.query;
  
    return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <h1 className="text-4xl font-bold text-blue-500">
        Welcome to Next.js with Tailwind CSS! Single Product page
            </h1>
            <h1>Product Details for {slug}</h1>
    </div>
    )
}

export default SingleProductPage;