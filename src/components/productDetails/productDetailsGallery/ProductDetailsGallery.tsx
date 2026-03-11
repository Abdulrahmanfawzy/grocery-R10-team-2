import { useRef } from "react";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/image-gallery.css";
import type {GalleryItem, ImageGalleryRef } from "react-image-gallery";
// import type { productData } from "@/lib/types/productDetailsTypes";
import type {productDetailsProps} from "../../../lib/types/productDetailsTypes"


export default function ProductDetailsGallery({product}:productDetailsProps) {
  // const {id} = useParams()
  // const { data, isLoading, isError } = useProductDetails(id!)
// console.log(product);




const images: GalleryItem[] = [
  {
    original: product!.image_url,
    thumbnail: product!.image_url,
  },
  {
    original: product!.image_url,
    thumbnail: product!.image_url
  },
  {
    original: product!.image_url,
    thumbnail: product!.image_url,
  },
];

      const galleryRef = useRef<ImageGalleryRef>(null);
  return <>
        <ImageGallery
      showFullscreenButton={false}
      showPlayButton={false}
      showNav={false}
      ref={galleryRef}
      items={images}
      
      onSlide={(index) => console.log("Slid to", index)}
      />
  </>
}
