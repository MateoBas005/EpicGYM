import React, { useState, useEffect } from 'react';
import { MapPin, Phone, MessageCircle, Instagram, Youtube, Facebook, ChevronRight, ChevronLeft, Dumbbell, Zap, Users, HeartHandshake } from 'lucide-react';
import hefoBg from './assets/image/epiclogo2.jpeg';
import instalacionesImg from './assets/image/instalacionesepic.jpg';
import entrenamientoImg from './assets/image/entrenadorepic.jpg';
import jumpImg from './assets/image/fotoinstalacion.jpeg';
import comunidadImg from './assets/image/comunidad.webp';
import video from './assets/image/JUMP.mp4';

const App = () => {
  // Datos del gimnasio actualizados para la visualización
  const gymData = {
    managerName: "Nombre del Gerente/Dueño",
    location: "Wilson F. Aldunate 651 esq. Manuel Calleros, Artigas, Uruguay",
    plans: [
      { name: "Clase suelta", price: "$200" },
      { name: "Plan 3 veces por semana", price: "$1200" },
      { name: "Mensual full", price: "$1400" },
    ],
    testimonials: [
      {
        id: 1,
        text: "¡Epic Gym es más que un gimnasio, es una comunidad! Los entrenadores son increíbles y las clases de JUMP son pura energía. ¡Me encanta entrenar aquí!",
        author: "María S.",
        role: "Clienta",
      },
      {
        id: 2,
        text: "Como entrenador, puedo decir que Epic Gym ofrece un ambiente único para crecer. El equipo es profesional y el apoyo entre compañeros es inigualable.",
        author: "Juan P.",
        role: "Entrenador",
      },
      {
        id: 3,
        text: "Nunca había encontrado un gimnasio que me motivara tanto. Los equipos son de primera y siempre hay alguien dispuesto a ayudarte. ¡Lo recomiendo a todos!",
        author: "Carlos L.",
        role: "Cliente",
      },
    ],
    socialMedia: {
      whatsapp: "59891886824",
      instagram: "https://www.instagram.com/epicgym_artigas/",
      youtube: "epicgym",
      facebook: "https://www.facebook.com/profile.php?id=61556258351706&ref=_xav_ig_profile_page_web",
    },
    aboutText: "Somos un gimnasio dedicado a inspirar a las personas a alcanzar su mejor versión. En Epic Gym, no solo entrenas, te unes a una comunidad que te apoya y te motiva. Desde levantamiento de pesas hasta nuestras energéticas clases de JUMP, ofrecemos un espacio donde la fuerza y la diversión se unen para crear una experiencia única.",
  };

  // Nuevo contenido para el carrusel de beneficios
  // Carruse inferior dendoe se muestran los beneficios de ir al gim 
  const benefits = [
    {
      icon: Dumbbell,
      title: "Transforma tu cuerpo",
      description: "Equipos de última generación y guías expertos te ayudarán a esculpir tu físico y alcanzar tus objetivos de fuerza.",
    },
    {
      icon: Users,
      title: "Crea conexiones",
      description: "Únete a una comunidad de apoyo donde cada persona te motiva a superar tus límites y celebrar tus logros.",
    },
    {
      icon: Zap,
      title: "Eleva tu energía",
      description: "Nuestras clases de JUMP y entrenamientos de alta intensidad recargarán tu energía, liberarán el estrés y te harán sentir imparable.",
    },
  ];

  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [currentBenefit, setCurrentBenefit] = useState(0);

  const whatsappMessage = "Quiero saber mas sobre EpicGYM!";
  const whatsappLink = `https://wa.me/${gymData.socialMedia.whatsapp}?text=${encodeURIComponent(whatsappMessage)}`;

  // Navegación para testimonios
  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % gymData.testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + gymData.testimonials.length) % gymData.testimonials.length);
  };

  // Navegación para el carrusel de beneficios
  const nextBenefit = () => {
    setCurrentBenefit((prev) => (prev + 1) % benefits.length);
  };

  const prevBenefit = () => {
    setCurrentBenefit((prev) => (prev - 1 + benefits.length) % benefits.length);
  };

  // Animación automática del carrusel de beneficios
  useEffect(() => {
    const interval = setInterval(() => {
      nextBenefit();
    }, 5000); // Cambia de slide cada 5 segundos
    return () => clearInterval(interval);
  }, [currentBenefit]);

  return (
    <div className="bg-gray-950 text-white font-sans antialiased">
      {/* Barra de navegación */}
      <header className="sticky top-0 z-50 bg-gray-950/80 backdrop-blur-sm shadow-lg">
        <nav className="container mx-auto px-4 py-3 flex justify-between items-center">
          <a href="#" className="flex items-center">
            {/* Logo de texto con colores cambiados */}
            <h1 className="text-xl md:text-2xl font-extrabold tracking-widest uppercase text-yellow-400">
              EPIC <span className="text-white">GYM</span>
            </h1>
          </a>
          <div className="flex items-center space-x-4">
            <a href="#planes" className="text-gray-300 hover:text-white transition-colors duration-300">Planes</a>
            <a href="#actividades" className="text-gray-300 hover:text-white transition-colors duration-300">Actividades</a>
            <a href="#ubicacion" className="text-gray-300 hover:text-white transition-colors duration-300">Ubicación</a>
            <a href="#testimonios" className="text-gray-300 hover:text-white transition-colors duration-300">Testimonios</a>
            <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-semibold py-2 px-4 rounded-full transition-colors duration-300 flex items-center gap-2">
              <MessageCircle size={20} /> Contacto
            </a>
          </div>
        </nav>
      </header>

      {/* Sección principal (Hero) */}
      <main>
        <section className="relative h-screen flex items-center justify-center p-4 text-center overflow-hidden">
          {/* Imagen de fondo parte principal */}
          <div className="absolute inset-0 z-0 bg-cover bg-center" style={{ backgroundImage: `url(${hefoBg})` }}>
            <div className="absolute inset-0 bg-gray-95Transforma tu fuerza en resultados0 opacity-80"></div>
          </div>
          <div className="relative z-10 max-w-4xl mx-auto">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white leading-tight mb-4 animate-fade-in-down">
              Transforma tu fuerza en resultados.
            </h1>
            <p className="text-lg sm:text-xl text-gray-300 mb-8 animate-fade-in-up">
              Refleja toda la fuerza y creatividad de Epic Gym, donde cualquier persona puede encontrar de forma clara y atractiva.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4 animate-fade-in-up delay-300">
              <a href="#planes" className="bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-bold py-3 px-8 rounded-full text-lg shadow-lg transition-transform transform hover:scale-105">
                Ver Planes
              </a>
              <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="bg-gray-100 hover:bg-gray-300 text-gray-900 font-bold py-3 px-8 rounded-full text-lg shadow-lg transition-transform transform hover:scale-105">
                ¡Contacta ahora!
              </a>
            </div>
          </div>
        </section>

        {/* Sección de Resumen (Carrusel) */}
        <section className="bg-gray-900 py-20 px-4">
          <div className="container mx-auto max-w-2xl text-center relative">
            <h2 className="text-3xl sm:text-4xl font-bold text-yellow-400 mb-12">
              ¿Por qué Epic Gym?
            </h2>
            <div className="relative overflow-hidden">
              <div
                className="flex transition-transform duration-700 ease-in-out"
                style={{ transform: `translateX(-${currentBenefit * 100}%)` }}
              >
                {benefits.map((benefit, index) => (
                  <div
                    key={index}
                    className="flex-shrink-0 w-full p-8 rounded-lg shadow-lg transition-transform duration-300 transform hover:scale-105"
                  >
                    <div className="bg-gray-800 p-8 rounded-lg">
                      <benefit.icon size={48} className="text-yellow-400 mx-auto mb-4" />
                      <h3 className="text-xl font-semibold text-white mb-2">{benefit.title}</h3>
                      <p className="text-gray-300">{benefit.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            {/* Controles de navegación */}
            <div className="absolute inset-y-0 left-0 flex items-center">
              <button
                onClick={prevBenefit}
                className="bg-gray-800 p-2 rounded-full text-white hover:bg-gray-700 transition-colors duration-300"
              >
                <ChevronLeft size={24} />
              </button>
            </div>
            <div className="absolute inset-y-0 right-0 flex items-center">
              <button
                onClick={nextBenefit}
                className="bg-gray-800 p-2 rounded-full text-white hover:bg-gray-700 transition-colors duration-300"
              >
                <ChevronRight size={24} />
              </button>
            </div>
          </div>
        </section>

        {/* Sección de Historia */}
        <section className="bg-gray-950 py-20 px-4">
          <div className="container mx-auto max-w-6xl">
            <h2 className="text-3xl sm:text-4xl font-bold text-center text-yellow-400 mb-12">
              Nuestra Esencia
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <p className="text-gray-300 text-2xl">{gymData.aboutText}</p>
                <div className="flex space-x-4 justify-center md:justify-start">
                  <a href={gymData.socialMedia.instagram} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors duration-300"><Instagram size={28} /></a>
                  <a href={gymData.socialMedia.facebook} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors duration-300"><Facebook size={28} /></a>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <img src={instalacionesImg} alt="Instalaciones del gimnasio" className="rounded-lg shadow-xl object-cover h-full w-full" />
                <img src={entrenamientoImg} alt="Entrenamiento" className="rounded-lg shadow-xl object-cover h-full w-full" />
                <img src={jumpImg} alt="Clase de JUMP" className="rounded-lg shadow-xl object-cover h-full w-full" />
                <img src={comunidadImg} alt="Comunidad de Epic Gym" className="rounded-lg shadow-xl object-cover h-full w-full" />
              </div>
            </div>
          </div>
        </section>

        {/* Sección de Planes y Precios */}
        <section id="planes" className="bg-gray-900 py-20 px-4">
          <div className="container mx-auto max-w-6xl">
            <h2 className="text-3xl sm:text-4xl font-bold text-center text-white mb-12">
              Planes y Precios
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {gymData.plans.map((plan, index) => (
                <div key={index} className="bg-gray-800 p-8 rounded-lg shadow-lg text-center border-2 border-transparent hover:border-yellow-400 transition-all duration-300">
                  <HeartHandshake size={48} className="text-yellow-400 mx-auto mb-4" />
                  <h3 className="text-2xl font-semibold text-white mb-2">{plan.name}</h3>
                  <p className="text-4xl font-bold text-yellow-400 mb-4">{plan.price}</p>
                  <p className="text-gray-300 mb-6">Detalles del plan.</p>
                  <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-bold py-3 px-8 rounded-full transition-colors duration-300">
                    ¡Lo quiero!
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Sección de Actividades Únicas */}
        <section id="actividades" className="bg-gray-950 py-20 px-4">
          <div className="container mx-auto max-w-6xl">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div className="md:order-2">
                <img src="https://placehold.co/600x400/15202B/facc15?text=Clase+de+JUMP" alt="Clase de JUMP en Epic Gym" className="rounded-lg shadow-xl" />
              </div>
              <div className="md:order-1 space-y-6">
                <h2 className="text-3xl sm:text-4xl font-bold text-white leading-tight">
                  Más que pesas y cross, ¡es energía y diversión!
                </h2>
                <p className="text-gray-300 text-lg">
                  En Epic Gym, sabemos que el entrenamiento puede ser una experiencia social y divertida.
                  Por eso, le damos un espacio protagonista a nuestras clases de JUMP, que transmiten pura energía y
                  atraen a un público que busca entrenar de una manera distinta y social.
                </p>
                <ul className="text-gray-300 space-y-2">
                  <li className="flex items-center gap-2"><ChevronRight className="text-yellow-400" /> Clases llenas de energía.</li>
                  <li className="flex items-center gap-2"><ChevronRight className="text-yellow-400" /> Profesores expertos y motivadores.</li>
                  <li className="flex items-center gap-2"><ChevronRight className="text-yellow-400" /> Un ambiente social y divertido.</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Sección de Testimonios */}
        <section id="testimonios" className="bg-gray-900 py-20 px-4">
          <div className="container mx-auto max-w-4xl text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-12">
              Lo que dicen nuestros clientes y profesores
            </h2>
            <div className="relative">
              <div className="bg-gray-800 p-8 rounded-lg shadow-xl min-h-[200px] flex items-center justify-center">
                <p className="text-gray-300 text-lg italic leading-relaxed">
                  {`"${gymData.testimonials[currentTestimonial].text}"`}
                </p>
              </div>
              <div className="mt-6 text-center">
                <h4 className="text-xl font-semibold text-white">{gymData.testimonials[currentTestimonial].author}</h4>
                <p className="text-gray-400 text-sm">{gymData.testimonials[currentTestimonial].role}</p>
              </div>
              <button onClick={prevTestimonial} className="absolute left-0 top-1/2 -translate-y-1/2 p-2 rounded-full bg-gray-700 text-white hover:bg-gray-600 transition-colors duration-300">
                <ChevronLeft size={24} />
              </button>
              <button onClick={nextTestimonial} className="absolute right-0 top-1/2 -translate-y-1/2 p-2 rounded-full bg-gray-700 text-white hover:bg-gray-600 transition-colors duration-300">
                <ChevronRight size={24} />
              </button>
            </div>
          </div>
        </section>

        {/* Sección de Ubicación y Contacto */}
        <section id="ubicacion" className="bg-gray-950 py-20 px-4">
          <div className="container mx-auto max-w-6xl">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <img src="https://placehold.co/600x400/15202B/facc15?text=Mapa+del+Gimnasio" alt="Mapa de la ubicación de Epic Gym" className="rounded-lg shadow-xl" />
              </div>
              <div className="space-y-6">
                <h2 className="text-3xl sm:text-4xl font-bold text-white">
                  Encuéntranos en el corazón de la ciudad
                </h2>
                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <MapPin size={28} className="text-yellow-400 flex-shrink-0 mt-1" />
                    <p className="text-gray-300 text-lg font-semibold">{gymData.location}</p>
                  </div>
                  <div className="flex items-start gap-4">
                    <Phone size={28} className="text-yellow-400 flex-shrink-0 mt-1" />
                    <a href={`tel:${gymData.socialMedia.whatsapp}`} className="text-gray-300 text-lg hover:text-white transition-colors duration-300">
                      Contacto directo: {gymData.socialMedia.whatsapp}
                    </a>
                  </div>
                </div>
                <p className="text-gray-400">
                  Estamos listos para recibirte. Ven a visitarnos y descubre por qué somos tu mejor opción.
                </p>
                <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-bold py-3 px-8 rounded-full shadow-lg transition-transform transform hover:scale-105">
                  <MessageCircle size={20} /> ¡Chatea con nosotros!
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Pie de página */}
      <footer className="bg-gray-900 py-8 px-4 text-center text-gray-400">
        <p>&copy; {new Date().getFullYear()} Epic Gym. Todos los derechos reservados.</p>
        <div className="flex justify-center space-x-4 mt-4">
          <a href={gymData.socialMedia.instagram} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors duration-300"><Instagram size={24} /></a>
          <a href={gymData.socialMedia.facebook} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors duration-300"><Facebook size={24} /></a>
        </div>
      </footer>
    </div>
  );
};

export default App;
