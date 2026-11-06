
interface ImageCardProps {
  nome?: string;
  tamanho?: string;
  dataUpload?: string;
  src?: string;
}

export const ImageCard: React.FC<ImageCardProps> = ({
  nome,
  dataUpload,
  src,
  tamanho
}) => {

  function download() {
    if (src) {
      window.open(src, '_blank', 'noopener,noreferrer');
    }
  }

  return (
    <div className="
      group overflow-hidden rounded-2xl
      border border-violet-400/20
      bg-[#151525]
      shadow-lg shadow-black/20
      transition-all duration-300
      hover:-translate-y-2
      hover:border-violet-400/60
      hover:shadow-xl hover:shadow-violet-900/20
    ">

      {/* Área da imagem */}
      <div className="
        relative flex aspect-[16/10]
        items-center justify-center
        overflow-hidden bg-gradient-to-br
        from-[#202039] to-[#10101c]
      ">
        <img
          src={src}
          alt={nome || 'Peça de computador'}
          className="
            h-full w-full object-contain p-5
            transition-transform duration-500
            group-hover:scale-110
          "
        />

        <span className="
          absolute left-3 top-3 rounded-full
          border border-violet-400/30
          bg-violet-600/20 px-3 py-1
          text-xs font-semibold text-violet-200
        ">
          COMPONENTE
        </span>
      </div>

      {/* Informações */}
      <div className="space-y-4 p-4">

        <h2 className="
          truncate text-lg font-bold
          text-white
        ">
          {nome}
        </h2>

        <div className="
          flex items-center justify-between
          gap-2 text-sm text-gray-400
        ">
          <span>{tamanho}</span>
          <span>{dataUpload}</span>
        </div>

        <button
          type="button"
          onClick={download}
          disabled={!src}
          className="
            w-full rounded-full
            border border-violet-400/60
            bg-violet-600/10 px-4 py-2.5
            font-semibold text-violet-200
            transition-all duration-300
            hover:bg-violet-600 hover:text-white
            disabled:cursor-not-allowed
            disabled:opacity-40
          "
        >
          Visualizar peça
        </button>

      </div>
    </div>
  );
};
