export default function Footer() {
  return (
    <footer className="footer text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">MiEmpresa</h3>
            <p className="text-gray-300">
              Transformando ideas en soluciones digitales innovadoras.
            </p>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Enlaces</h4>
            <ul className="space-y-2 text-gray-300">
              <li><a href="#" className="hover:text-white">Inicio</a></li>
              <li><a href="#servicios" className="hover:text-white">Servicios</a></li>
              <li><a href="#nosotros" className="hover:text-white">Nosotros</a></li>
              <li><a href="#contacto" className="hover:text-white">Contacto</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Servicios</h4>
            <ul className="space-y-2 text-gray-300">
              <li>Desarrollo Web</li>
              <li>Marketing Digital</li>
              <li>Diseño UX/UI</li>
              <li>Consultoría</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Contacto</h4>
            <ul className="space-y-2 text-gray-300">
              <li>info@miempresa.com</li>
              <li>+1 234 567 890</li>
              <li>Ciudad, País</li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2024 MiEmpresa. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
}
