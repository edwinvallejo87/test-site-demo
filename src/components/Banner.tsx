export default function Banner() {
  return (
    <section className="banner min-h-screen flex items-center justify-center text-white pt-16">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-6">
          Bienvenido a MiEmpresa
        </h1>
        <p className="text-xl md:text-2xl mb-8 opacity-90">
          Soluciones innovadoras para tu negocio. Transformamos ideas en resultados.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="btn-primary px-8 py-4 rounded-lg text-lg font-semibold transition-all transform hover:scale-105">
            Comenzar Ahora
          </button>
          <button className="bg-white text-blue-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-all">
            Saber Más
          </button>
        </div>
      </div>
    </section>
  );
}
