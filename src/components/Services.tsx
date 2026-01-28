const services = [
  {
    title: 'Desarrollo Web',
    description: 'Creamos sitios web modernos y responsivos que destacan tu marca.',
    icon: '🌐',
  },
  {
    title: 'Marketing Digital',
    description: 'Estrategias efectivas para aumentar tu presencia online.',
    icon: '📈',
  },
  {
    title: 'Diseño UX/UI',
    description: 'Experiencias de usuario intuitivas y atractivas.',
    icon: '🎨',
  },
  {
    title: 'Consultoría',
    description: 'Asesoramiento experto para impulsar tu negocio.',
    icon: '💡',
  },
];

export default function Services() {
  return (
    <section id="servicios" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Nuestros Servicios
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Ofrecemos soluciones completas para llevar tu negocio al siguiente nivel
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="service-card p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="text-4xl mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {service.title}
              </h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
