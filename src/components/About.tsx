export default function About() {
  return (
    <section id="nosotros" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Sobre Nosotros
            </h2>
            <p className="text-lg text-gray-600 mb-6">
              Somos un equipo apasionado por la tecnología y la innovación.
              Con más de 10 años de experiencia, hemos ayudado a cientos de
              empresas a alcanzar sus objetivos digitales.
            </p>
            <p className="text-lg text-gray-600 mb-8">
              Nuestra misión es transformar ideas en soluciones tecnológicas
              que generen valor real para nuestros clientes.
            </p>
            <div className="grid grid-cols-3 gap-8 text-center">
              <div>
                <div className="text-3xl font-bold text-blue-600">500+</div>
                <div className="text-gray-600">Proyectos</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-blue-600">50+</div>
                <div className="text-gray-600">Clientes</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-blue-600">10+</div>
                <div className="text-gray-600">Años</div>
              </div>
            </div>
          </div>
          <div className="bg-gradient-to-br from-blue-500 to-blue-700 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">¿Por qué elegirnos?</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <span className="mr-3">✓</span>
                <span>Equipo experto y dedicado</span>
              </li>
              <li className="flex items-start">
                <span className="mr-3">✓</span>
                <span>Tecnología de vanguardia</span>
              </li>
              <li className="flex items-start">
                <span className="mr-3">✓</span>
                <span>Soporte 24/7</span>
              </li>
              <li className="flex items-start">
                <span className="mr-3">✓</span>
                <span>Precios competitivos</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
