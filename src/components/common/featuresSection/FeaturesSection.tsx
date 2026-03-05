
import Container from '../shared/Container'

import tag from'../../../assets/Web/Hi-Fi/Group.png'
import RefreshCcw from'../../../assets/Web/Hi-Fi/svgexport-6 (3) 1.png'
import Truck from'../../../assets/Web/Hi-Fi/Vector.png'
type Feature = {
  id: number;
  title: string;
  desc: string;
  icon: string;
};
const FeaturesSection = () => {
    const features: Feature[] = [
  {
    id: 1,
    title: "Best Prices & Deals",
    desc: "Don’t miss our daily amazing deals and prices",
    icon: tag,
  },
  {
    id: 2,
    title: "Refundable",
    desc: "If your items have damage we agree to refund it",
    icon: RefreshCcw,
  },
  {
    id: 3,
    title: "Free delivery",
    desc: "Do purchase over $50 and get free delivery anywhere",
    icon: Truck,
  },
];
  return (
    <div className='mt-8'>
        <Container>
            <div className='p-12 bg-gray-100 grid md:grid-cols-3 gap-8 text-center md:text-left rounded-2xl'>

                {/* Features*/}
                {
                    features.map(features => (

          <div key={features.id} className="flex flex-col md:flex-row items-center gap-4 p-4">
            <img src={features.icon} alt={features.title} className='w-14' />
            <div>
              <h3 className="font-semibold text-lg">
                {features.title}
              </h3>
              <p className="text-gray-500 text-sm">
                {features.desc}
              </p>
            </div>
          </div>
                    ))
                }

            </div>
        </Container>
    </div>
  )
}

export default FeaturesSection