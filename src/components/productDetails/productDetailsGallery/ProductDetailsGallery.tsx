import { useRef } from "react";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/image-gallery.css";
import type { ImageGalleryRef } from "react-image-gallery";
import type { galleryProps } from "../../lib/types/productDetailsTypes"

// const images: GalleryItem[] = [
//   {
//     original: imgProduct,
//     thumbnail: imgProduct,
//   },
//   {
//     original: imgProduct,
//     thumbnail: imgProduct
//   },
//   {
//     original: imgProduct,
//     thumbnail: imgProduct,
//   },
// ];


export default function ProductDetailsGallery({ images }: galleryProps) {

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
