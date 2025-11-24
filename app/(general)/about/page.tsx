import { Metadata } from "next";


export const metadata: Metadata = {
 title: 'SEO Title',
 description: 'SEO Description',
 keywords: ['About page', 'Carlos', 'Información', '...']
};


export default function Aboutpage() {
  return (
    <>
        <span className="text-7xl">About Page</span>
    </>
  )
}
