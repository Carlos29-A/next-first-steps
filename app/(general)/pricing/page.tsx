import { Metadata } from "next";


export const metadata:Metadata = {
 title: 'Pricing page',
 description: 'Esta es la pagina de precios de mi servicios',
};

export default function Pricingpage() {
  return (
    <>
        <span className="text-7xl">Pricing Page</span>
    </>
  )
}
