
interface TemplateProps {
  children: React.ReactNode
}

export const Template: React.FC<TemplateProps> = (props: TemplateProps) => {
  return (
    <div className="min-h-screen bg-[#0B0B16] text-white">

      {/* Cabeçalho */}
      <header className="border-b border-violet-400/20 bg-[#0B0B16] px-8 py-5">
        <div className="flex items-center justify-between">

          <h1 className="text-2xl font-bold">
            Imagem <span className="text-violet-400">Peças</span>
          </h1>

          <span className="text-sm text-gray-400">
            Galeria de componentes
          </span>

        </div>
      </header>

      {/* Conteúdo principal */}
      <main className="px-8 py-12">

        {/* Apresentação */}
        <section className="mb-16">

          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-violet-400">
            Bem-vindo à galeria de peças para o seu computador
          </p>

          <h1 className="mb-5 text-5xl font-bold leading-tight md:text-6xl">
            Explore o universo
            <span className="block text-violet-500">
              das peças de PC.
            </span>
          </h1>

        </section>

        {/* Conteúdo recebido da página */}
        {props.children}

      </main>

      {/* Rodapé */}
      <footer className="mt-20 border-t border-white/10 py-8 text-center">
        <p className="text-sm text-gray-500">
          © 2026 Imagem Peças — Todos os direitos reservados.
        </p>
      </footer>

    </div>
  )
}
