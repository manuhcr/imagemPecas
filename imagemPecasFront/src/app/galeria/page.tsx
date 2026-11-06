'use client'

import { Template, ImageCard } from '@/components'
import { useImageService } from '@/resources/image/image.service';
import { Image } from '@/resources/image/image.resource';
import { useState } from 'react';

export default function GaleriaPage() {

  const useService = useImageService();
  const [images, setImages] = useState<Image[]>([])

  async function searchImages() {
    const result = await useService.buscar();
    setImages(result);
    console.table(result)
  }

  function renderImageCard(image: Image) {
    return (
      <ImageCard key={image.url}
          nome = {image.name}
          src = {image.url}
          tamanho = {image.size}
          dataUpload = {image.uploadDate}
      
      />
    )
  }

  function renderImageCards(){
    //return images.map(image => renderImageCard(image))
    return images.map(renderImageCard);
  }



 return (
  <Template>

    <section>

      <div className="mb-8">
        <h2 className="text-2xl font-bold">
          Nossa coleção
        </h2>

        <p className="mt-2 text-gray-400">
          Confira os componentes disponíveis.
        </p>
      </div>

        <button
            onClick={searchImages}
            className="mt-6 rounded-full bg-violet-600
            px-10 py-4 mx-2 my-4 font-semibold text-white
            shadow-lg shadow-violet-900/30
            transition hover:bg-violet-500"
          >
            Explorar galeria →
        </button>

      <div className="grid grid-cols-1 gap-7 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
         {
          renderImageCards()
         }
      </div>

    </section>

  </Template>
);
}