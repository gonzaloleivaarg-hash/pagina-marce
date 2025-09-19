import React, { useState } from 'react';

const App = () => {
  const [language, setLanguage] = useState('es');

  const translations = {
    es: {
      title: "Departamentos por día en Mendoza, Argentina",
      subtitle: "Alojamiento cómodo y accesible, sin intermediarios. Ideal para familias, parejas y grupos de amigos.",
      bookButton: "👉 Reservar por WhatsApp",
      aboutTitle: "Sobre nosotros",
      aboutText: "En nuestro complejo encontrarás departamentos totalmente equipados para que disfrutes de tu estadía en Mendoza.",
      features: [
        "Alquiler diario y semanal",
        "WiFi y Smart TV",
        "Aire acondicionado / calefacción",
        "Cochera privada",
        "Pileta",
        "Cercanía a centro de la ciudad y bodegas"
      ],
      apartmentsTitle: "Nuestros departamentos",
      apartments: [
        {
          name: "Monoambiente (2 personas)",
          description: "Ideal para parejas. Incluye cama matrimonial, cocina equipada y baño privado.",
          button: "Consultar disponibilidad"
        },
        {
          name: "Departamento familiar (4 personas)",
          description: "Perfecto para familias pequeñas. 2 habitaciones, living, cocina completa.",
          button: "Consultar disponibilidad"
        },
        {
          name: "Departamento grande (hasta 6 personas)",
          description: "Amplio y cómodo para grupos. 3 habitaciones, 2 baños, balcón con vista.",
          button: "Consultar disponibilidad"
        }
      ],
      locationTitle: "Ubicación",
      locationText: "Estamos en Av. San Martín 1234, una ubicación estratégica a pocos minutos del centro de Mendoza y las principales bodegas.",
      activitiesTitle: "Qué hacer en la zona",
      activities: [
        "Visitar la famosa Ruta del Vino y sus bodegas históricas",
        "Degustar gastronomía local en parrillas y restaurantes típicos mendocinos",
        "Excursiones a la Cordillera de los Andes, trekking y visitas a lagos"
      ],
      contactTitle: "Reservá directo",
      contactText: "Reservá de forma rápida y directa, sin pagar comisiones a intermediarios.",
      whatsapp: "📲 WhatsApp: +54 9 261 555 1234",
      email: "📧 Email: info@departamentosmendoza.com",
      social: "🌐 Instagram / Facebook: @departamentosmendoza",
      contactButton: "Chatear en WhatsApp"
    },
    pt: {
      title: "Aluguel de apartamentos por temporada em Mendoza, Argentina",
      subtitle: "Apartamentos mobiliados, ideais para férias em família, casais ou grupos.",
      bookButton: "👉 Reservar pelo WhatsApp",
      aboutTitle: "Sobre nós",
      aboutText: "Em nosso complexo você encontrará apartamentos totalmente equipados para desfrutar da sua estadia em Mendoza.",
      features: [
        "Aluguel diário e semanal",
        "Wi-Fi e Smart TV",
        "Ar condicionado / aquecimento",
        "Garagem privativa",
        "Piscina",
        "Proximidade ao centro da cidade e vinícolas"
      ],
      apartmentsTitle: "Nossos apartamentos",
      apartments: [
        {
          name: "Estúdio (2 pessoas)",
          description: "Ideal para casais. Inclui cama de casal, cozinha equipada e banheiro privativo.",
          button: "Consultar disponibilidade"
        },
        {
          name: "Apartamento familiar (4 pessoas)",
          description: "Perfeito para famílias pequenas. 2 quartos, sala, cozinha completa.",
          button: "Consultar disponibilidade"
        },
        {
          name: "Apartamento grande (até 6 pessoas)",
          description: "Amplo e confortável para grupos. 3 quartos, 2 banheiros, varanda com vista.",
          button: "Consultar disponibilidade"
        }
      ],
      locationTitle: "Localização",
      locationText: "Estamos na Av. San Martín 1234, uma localização estratégica a poucos minutos do centro de Mendoza e das principais vinícolas.",
      activitiesTitle: "O que fazer na região",
      activities: [
        "Visitar a famosa Rota do Vinho e suas vinícolas históricas",
        "Degustar gastronomia local em churrascarias e restaurantes típicos mendocinos",
        "Excursões à Cordilheira dos Andes, trekking e visitas a lagos"
      ],
      contactTitle: "Reserve direto",
      contactText: "Reserve de forma rápida e direta, sem pagar comissões a intermediários.",
      whatsapp: "📲 WhatsApp: +54 9 261 555 1234",
      email: "📧 Email: info@departamentosmendoza.com",
      social: "🌐 Instagram / Facebook: @departamentosmendoza",
      contactButton: "Conversar no WhatsApp"
    },
    en: {
      title: "Daily apartment rentals in Mendoza, Argentina",
      subtitle: "Comfortable and accessible accommodation, no intermediaries. Ideal for families, couples and groups of friends.",
      bookButton: "👉 Book via WhatsApp",
      aboutTitle: "About us",
      aboutText: "At our complex you will find fully equipped apartments to enjoy your stay in Mendoza.",
      features: [
        "Daily and weekly rental",
        "WiFi and Smart TV",
        "Air conditioning / heating",
        "Private parking",
        "Swimming pool",
        "Close to city center and wineries"
      ],
      apartmentsTitle: "Our apartments",
      apartments: [
        {
          name: "Studio (2 people)",
          description: "Ideal for couples. Includes double bed, equipped kitchen and private bathroom.",
          button: "Check availability"
        },
        {
          name: "Family apartment (4 people)",
          description: "Perfect for small families. 2 bedrooms, living room, full kitchen.",
          button: "Check availability"
        },
        {
          name: "Large apartment (up to 6 people)",
          description: "Spacious and comfortable for groups. 3 bedrooms, 2 bathrooms, balcony with view.",
          button: "Check availability"
        }
      ],
      locationTitle: "Location",
      locationText: "We are located at Av. San Martín 1234, a strategic location just minutes from downtown Mendoza and the main wineries.",
      activitiesTitle: "Things to do in the area",
      activities: [
        "Visit the famous Wine Route and its historic wineries",
        "Taste local cuisine at grills and typical Mendoza restaurants",
        "Excursions to the Andes Mountains, trekking and lake visits"
      ],
      contactTitle: "Book directly",
      contactText: "Book quickly and directly, without paying commissions to intermediaries.",
      whatsapp: "📲 WhatsApp: +54 9 261 555 1234",
      email: "📧 Email: info@departamentosmendoza.com",
      social: "🌐 Instagram / Facebook: @departamentosmendoza",
      contactButton: "Chat on WhatsApp"
    }
  };

  const t = translations[language];
  const currentLang = language;

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Language Selector */}
      <div className="fixed top-4 right-4 z-50 bg-white rounded-full shadow-lg p-2">
        <select 
          value={currentLang} 
          onChange={(e) => setLanguage(e.target.value)}
          className="bg-transparent border-none outline-none text-sm font-medium"
        >
          <option value="es">ES</option>
          <option value="pt">PT</option>
          <option value="en">EN</option>
        </select>
      </div>

      {/* Hero Section */}
      <section className="relative h-screen bg-cover bg-center" style={{backgroundImage: "url('https://placehold.co/1920x1080/4f46e5/ffffff?text=Mendoza+Apartments')"}}>
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>
        <div className="relative z-10 flex items-center justify-center h-full text-center text-white px-4">
          <div className="max-w-4xl">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">{t.title}</h1>
            <p className="text-xl md:text-2xl mb-10 max-w-3xl mx-auto">{t.subtitle}</p>
            <a 
              href="https://wa.me/5492615551234" 
              className="inline-block bg-green-500 hover:bg-green-600 text-white font-bold py-4 px-8 rounded-full text-lg transition duration-300 transform hover:scale-105 shadow-lg"
            >
              {t.bookButton}
            </a>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">{t.aboutTitle}</h2>
          <p className="text-xl text-gray-700 text-center mb-12 max-w-4xl mx-auto">{t.aboutText}</p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {t.features.map((feature, index) => (
              <div key={index} className="flex items-center p-6 bg-gray-50 rounded-lg hover:shadow-md transition duration-300">
                <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span className="text-lg text-gray-800">{feature}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Apartments Section */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 text-gray-800">{t.apartmentsTitle}</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {t.apartments.map((apartment, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition duration-300 transform hover:-translate-y-2">
                <img 
                  src={`https://placehold.co/600x400/6366f1/ffffff?text=Apartamento+${index + 1}`} 
                  alt={apartment.name}
                  className="w-full h-64 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-2xl font-bold mb-4 text-gray-800">{apartment.name}</h3>
                  <p className="text-gray-600 mb-6">{apartment.description}</p>
                  <a 
                    href="https://wa.me/5492615551234" 
                    className="block w-full text-center bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-6 rounded-lg transition duration-300"
                  >
                    {apartment.button}
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Location Section */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">{t.locationTitle}</h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="aspect-video bg-gray-200 rounded-lg overflow-hidden">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3287.373364777232!2d-68.85953992374495!3d-32.89086037676354!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x967e096b4a778c3f%3A0x5a3b3b3b3b3b3b3b!2sMendoza%2C%20Argentina!5e0!3m2!1sen!2sus!4v1700000000000!5m2!1sen!2sus" 
                  width="100%" 
                  height="100%" 
                  style={{border:0}} 
                  allowFullScreen="" 
                  loading="lazy"
                  className="w-full h-full"
                ></iframe>
              </div>
            </div>
            <div>
              <p className="text-xl text-gray-700 leading-relaxed">{t.locationText}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Activities Section */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 text-gray-800">{t.activitiesTitle}</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {t.activities.map((activity, index) => (
              <div key={index} className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition duration-300">
                <div className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center mb-6">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.879 16.121A3 3 0 1012.015 11L11 14H9c0 .768.293 1.536.879 2.121z" />
                  </svg>
                </div>
                <p className="text-lg text-gray-700">{activity}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 px-4 bg-blue-900 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-8">{t.contactTitle}</h2>
          <p className="text-xl mb-12">{t.contactText}</p>
          
          <div className="space-y-4 mb-12">
            <p className="text-lg">{t.whatsapp}</p>
            <p className="text-lg">{t.email}</p>
            <p className="text-lg">{t.social}</p>
          </div>
          
          <a 
            href="https://wa.me/5492615551234" 
            className="inline-block bg-green-500 hover:bg-green-600 text-white font-bold py-4 px-8 rounded-full text-lg transition duration-300 transform hover:scale-105 shadow-lg"
          >
            {t.contactButton}
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <p>&copy; 2024 Departamentos en Mendoza. Todos los derechos reservados.</p>
        </div>
      </footer>
    </div>
  );
};

export default App;