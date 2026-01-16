"use client";

import Image from 'next/image';
import { motion } from 'framer-motion';
import { CONTACT_INFO, PERSONAL_INFO, ICONS } from '@/lib/constants';
import { Button } from '@/components/ui/button';

const { Mail, Phone, MapPin, Calendar, ChevronDown } = ICONS;
const profileImage = '/FOTO.jpg';

// Importamos íconos directamente si no están en ICONS
import { Github, Linkedin } from 'lucide-react';

// Variantes para animaciones (sin transition dentro)
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.2 }
  }
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: { y: 0, opacity: 1 }
};

const floatingAnimation = {
  y: [0, -10, 0],

};



export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white py-20 px-6 overflow-hidden">

      {/* Fondo moderno con efectos */}
      <div className="absolute inset-0 z-0">
        {/* Grid pattern sutil */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f46e510_1px,transparent_1px),linear-gradient(to_bottom,#4f46e510_1px,transparent_1px)] bg-[size:64px_64px] opacity-20"></div>

        {/* Gradientes animados */}
        <motion.div
          className="absolute top-1/4 -left-24 w-96 h-96 bg-gradient-to-r from-blue-600/20 to-cyan-500/20 blur-[120px] rounded-full"
          animate={{
            x: [0, 20, 0],
            y: [0, 15, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />

        <motion.div
          className="absolute bottom-1/4 -right-24 w-80 h-80 bg-gradient-to-r from-indigo-600/15 to-purple-500/15 blur-[100px] rounded-full"
          animate={{
            x: [0, -15, 0],
            y: [0, 10, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />

        {/* Líneas decorativas */}
        <div className="absolute top-0 left-1/4 w-px h-full bg-gradient-to-b from-transparent via-blue-500/20 to-transparent"></div>
        <div className="absolute top-0 right-1/3 w-px h-full bg-gradient-to-b from-transparent via-purple-500/20 to-transparent"></div>
      </div>

      <motion.div
        className="max-w-7xl mx-auto relative z-10 w-full"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Columna de Texto */}
          <div className="space-y-8">
            <motion.div
              variants={itemVariants}
              initial="hidden"
              animate="visible"
              transition={{
                y: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
                opacity: { duration: 0.4, ease: "easeOut" }
              }}
              className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-gradient-to-r from-blue-500/10 to-cyan-500/10 border border-blue-500/20 backdrop-blur-sm"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-gradient-to-r from-green-400 to-emerald-400"></span>
              </span>
              <span className="text-sm font-medium tracking-wider text-cyan-300">
                DISPONIBLE PARA NUEVAS OPORTUNIDADES
              </span>
            </motion.div>
            <motion.h1
              variants={itemVariants}
              initial="hidden"
              animate="visible"
              transition={{
                y: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
                opacity: { duration: 0.4, ease: "easeOut" }
              }}
              className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tighter leading-tight text-center lg:text-left"
            >
              <span className="block bg-clip-text text-transparent bg-gradient-to-r from-white via-blue-100 to-cyan-200">
                {PERSONAL_INFO.name.split(' ').slice(0, 2).join(' ')}
              </span>
              <span className="block bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-300 mt-1 md:mt-2">
                {PERSONAL_INFO.name.split(' ').slice(2).join(' ') || '\u00A0'}
              </span>
            </motion.h1>

            <motion.div
              variants={itemVariants}
              initial="hidden"
              animate="visible"
              transition={{
                y: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
                opacity: { duration: 0.4, ease: "easeOut" }
              }}
              className="relative inline-block"
            >
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-lg blur opacity-30"></div>
              <h2 className="relative text-2xl md:text-3xl font-bold text-white bg-slate-900/50 px-6 py-3 rounded-lg border border-white/10 backdrop-blur-sm">
                {PERSONAL_INFO.title}
              </h2>
            </motion.div>

            <motion.p
              variants={itemVariants}
              initial="hidden"
              animate="visible"
              transition={{
                y: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
                opacity: { duration: 0.4, ease: "easeOut" }
              }}
              className="text-xl text-slate-300 leading-relaxed max-w-2xl"
            >
              Especialista en plataformas LMS, desarrollo de software y ciberseguridad.
              Apasionado por crear soluciones tecnológicas innovadoras y seguras.
            </motion.p>

            {/* Info personal con diseño mejorado */}
            <motion.div
              variants={itemVariants}
              initial="hidden"
              animate="visible"
              transition={{
                y: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
                opacity: { duration: 0.4, ease: "easeOut" }
              }}
              className="grid grid-cols-1 md:grid-cols-2 gap-4"
            >
              <div className="flex items-center gap-3 group p-3 rounded-xl bg-white/5 hover:bg-white/10 transition-all duration-300">
                <div className="p-2 rounded-lg bg-gradient-to-br from-blue-500/20 to-blue-600/20">
                  <MapPin className="w-5 h-5 text-blue-400" />
                </div>
                <div>
                  <p className="text-sm text-slate-400">Ubicación</p>
                  <p className="font-medium">{CONTACT_INFO.location}</p>
                </div>
              </div>

              <div className="flex items-center gap-3 group p-3 rounded-xl bg-white/5 hover:bg-white/10 transition-all duration-300">
                <div className="p-2 rounded-lg bg-gradient-to-br from-cyan-500/20 to-cyan-600/20">
                  <Calendar className="w-5 h-5 text-cyan-400" />
                </div>
                <div>
                  <p className="text-sm text-slate-400">Nacimiento</p>
                  <p className="font-medium">{CONTACT_INFO.birthday}</p>
                </div>
              </div>
            </motion.div>

            {/* Botones modernizados */}
            <motion.div
              variants={itemVariants}
              initial="hidden"
              animate="visible"
              transition={{
                y: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
                opacity: { duration: 0.4, ease: "easeOut" }
              }}
              className="flex flex-wrap items-center justify-center gap-4 pt-6"
            >
              {/* Email Button */}
              <Button
                asChild
                size="lg"
                className="group relative overflow-hidden rounded-xl px-6 py-4 bg-gradient-to-r from-blue-600 via-cyan-500 to-blue-600 text-white font-medium shadow-lg shadow-blue-500/20 hover:shadow-xl hover:shadow-blue-500/30 transition-all duration-300 backdrop-blur-sm border border-white/10"
              >
                <a href={`mailto:${CONTACT_INFO.email}`}>
                  <span className="relative z-10 flex items-center gap-2">
                    <Mail className="w-5 h-5" />
                    <span>Contactar por Email</span>
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </a>
              </Button>

              {/* Teléfono Button */}
              <Button
                asChild
                size="lg"
                variant="outline"
                className="rounded-xl px-6 py-4 bg-white/5 backdrop-blur-sm border border-white/15 text-white hover:bg-white/10 hover:border-white/25 transition-all duration-300 font-medium"
              >
                <a href={`tel:${CONTACT_INFO.phone}`}>
                  <span className="flex items-center gap-2">
                    <Phone className="w-5 h-5" />
                    <span>{CONTACT_INFO.phone}</span>
                  </span>
                </a>
              </Button>

              {/* Redes Sociales */}
              <div className="flex items-center gap-3">
                <Button
                  asChild
                  size="icon"
                  variant="ghost"
                  className="rounded-full w-12 h-12 bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-blue-500/20 hover:border-blue-400/30 transition-all duration-300"
                >
                  <a
                    href={CONTACT_INFO.linkedin || "#"}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="LinkedIn"
                  >
                    <Linkedin className="w-5 h-5 text-blue-400" />
                  </a>
                </Button>

                <Button
                  asChild
                  size="icon"
                  variant="ghost"
                  className="rounded-full w-12 h-12 bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-gray-200/10 hover:border-gray-300/20 transition-all duration-300"
                >
                  <a
                    href={CONTACT_INFO.github || "#"}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="GitHub"
                  >
                    <Github className="w-5 h-5 text-white" />
                  </a>
                </Button>
              </div>
            </motion.div>
          </div>

          {/* Columna de Imagen - Diseño moderno */}
          <motion.div
            variants={itemVariants}
            initial="hidden"
            animate="visible"
            transition={{
              y: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
              opacity: { duration: 0.4, ease: "easeOut" }
            }}
            className="relative"
          >
            <motion.div
              animate={floatingAnimation}
              transition={{
                y: {
                  duration: 3,
                  repeat: Infinity,
                  ease: [0.22, 1, 0.36, 1] // ✅ Usamos el easing como array
                }
              }}
              className="relative"
            >
              {/* Marco decorativo */}
              <div className="absolute -inset-4">
                <div className="absolute inset-0 border-2 border-transparent rounded-3xl bg-gradient-to-br from-blue-600/30 via-transparent to-cyan-600/30 blur-sm"></div>
                <div className="absolute inset-0 rounded-3xl border border-blue-500/30"></div>

                {/* Elementos decorativos flotantes */}
                <motion.div
                  className="absolute -top-6 -left-6 w-12 h-12 rounded-full bg-gradient-to-br from-blue-500/40 to-cyan-500/40 blur-md"
                  animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.4, 0.7, 0.4]
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                />

                <motion.div
                  className="absolute -bottom-8 -right-8 w-16 h-16 rounded-full bg-gradient-to-br from-purple-500/30 to-pink-500/30 blur-md"
                  animate={{
                    scale: [1, 1.3, 1],
                    opacity: [0.3, 0.6, 0.3]
                  }}
                  transition={{
                    duration: 5,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                />
              </div>

              {/* Imagen principal */}
              <div className="relative">
                <div className="relative w-full h-[500px] rounded-2xl overflow-hidden bg-slate-900">
                  <Image
                    src={profileImage}
                    alt={PERSONAL_INFO.name}
                    fill
                    className="object-contain p-6"
                    priority
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />



                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/20 via-transparent to-slate-950/10"></div>
                </div>

                {/* Badge de especialización */}
                <motion.div
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ delay: 1 }}
                  className="absolute -bottom-6 -right-6"
                >
                  <div className="flex flex-col items-center gap-2 p-4 rounded-2xl bg-gradient-to-br from-slate-900/90 to-slate-950/90 backdrop-blur-xl border border-white/10 shadow-2xl">
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 rounded-full bg-gradient-to-r from-green-400 to-emerald-400 animate-pulse"></div>
                      <span className="text-sm font-semibold text-cyan-300">ESPECIALISTA</span>
                    </div>
                    <div className="text-center">
                      <p className="text-xs text-slate-400"></p>
                      <p className="text-sm font-bold text-white">LMS & Ciberseguridad</p>
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>

      {/* Scroll indicator mejorado */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 2 }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2"
      >
        <div className="flex flex-col items-center gap-3">
          <motion.div
            animate={{
              y: [0, 8, 0],
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="flex flex-col items-center gap-1"
          >
            <div className="w-px h-8 bg-gradient-to-b from-blue-400/50 to-transparent"></div>
            <ChevronDown className="w-6 h-6 text-blue-400" />
          </motion.div>
          <p className="text-xs tracking-widest text-slate-500 uppercase">Explorar</p>
        </div>
      </motion.div>
    </section>
  );
}