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
        nome={image.name}
        src={image.url}
        tamanho={image.size}
        dataUpload={image.uploadDate}

      />
    )
  }

  function renderImageCards() {
    //return images.map(image => renderImageCard(image))
    return images.map(renderImageCard);
  }



  return (
    <Template>

      <section className="mb-14">

        {/* Barra de ferramentas */}
        <div className="flex flex-wrap items-center gap-4 rounded-2xl">

          <input
            type="text"
            placeholder="Pesquisar nome da imagem ou palavra-chave..."
            className="min-w-[200px] flex-1 rounded-xl
                 border border-white/10 bg-[#0B0B16]
                 px-5 py-3 text-white outline-none
                 placeholder:text-gray-500
                 focus:border-violet-500"
          />

          <select
            className="rounded-xl border border-white/10
                 bg-[#0B0B16] px-6 py-3 text-gray-300
                 outline-none focus:border-violet-500"
          >
            <option value="">Todos os formatos</option>
          </select>

          <button
            onClick={searchImages}
            className="rounded-xl bg-violet-600 px-7 py-3
                 font-semibold text-white shadow-lg
                 shadow-violet-900/30 transition
                 hover:bg-violet-500"
          >
            Explorar galeria →
          </button>

          <button
            className="rounded-xl border border-violet-400/40
                 px-7 py-3 font-semibold text-violet-300
                 transition hover:bg-violet-500/10"
          >
            + Adicionar imagem
          </button>

        </div>

      </section>

      <section>

        <div className="mb-8">
          <h2 className="text-2xl font-bold">
            Nossa coleção
          </h2>

          <p className="mt-2 text-gray-400">
            Confira os componentes disponíveis.
          </p>
        </div>



        <div className="grid grid-cols-1 gap-7 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {
            renderImageCards()
          }
        </div>

      </section>

    </Template>
  );
}