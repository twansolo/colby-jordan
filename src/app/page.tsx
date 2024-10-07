'use client'
import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'

const profile = {
  name: "Colby Jordan",
  avatar: "/3358305e63eb95643aa0a0d1441e366d.jpeg?height=200&width=200",
  links: [
    { title: "Portfolio", url: "/portfolio" },
    { title: "Sapphire Beauty Spa", url: "https://sapphirebeautyspa.com/" },
    { title: "Facebook", url: "https://www.facebook.com/SapphireBeauty.IA/" },
    { title: "Venmo", url: "https://venmo.com/u/ColbyJordan14" },
  ]
}

export default function SpaceLinkTree() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <div className="min-h-screen bg-gray-900 text-white flex items-center justify-center p-4 overflow-hidden relative bg-[url('/hero.jpg')">
      {/* Starry background */}
      {/* <div className="absolute inset-0 overflow-hidden">
        {[...Array(100)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-white"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              width: `${Math.random() * 3}px`,
              height: `${Math.random() * 3}px`,
              animation: `twinkle ${Math.random() * 5 + 3}s infinite`,
            }}
          />
        ))}
      </div> */}
      <Image
        src="/hero.jpg?height=800&width=800"
        alt="Elegant spa treatment"
        layout="fill"
        objectFit="cover"
        className="rounded-tl-full opacity-20 filter blur-sm "
      />
      
      {/* Shooting star */}
      <div className="absolute w-1 h-1 bg-blue-400 rounded-full" 
           style={{
             animation: 'shootingStarAnimation 5s linear infinite',
             top: '-10px',
             left: '-10px',
           }} />

      <motion.div 
        initial={{ scale: 0, rotate: -180 }}
        animate={{ scale: 1, rotate: 0 }}
        transition={{ type: "spring", duration: 1.5, bounce: 0.5 }}
        className="relative z-10 w-full max-w-md space-y-8"
      >
        <div className="flex flex-col items-center space-y-4">
          <motion.div 
            // animate={{ rotate: 360 }}
            // transition={{ duration: 200, repeat: Infinity, ease: "linear" }}
            className="w-32 h-32 rounded-full bg-gradient-to-br from-blue-900 via-pink-500 to-red-500 p-1"
          >
            <Image src={profile.avatar} alt={profile.name} className="w-full h-full rounded-full" />
          </motion.div>
          <h1 className="text-3xl font-bold text-center text-transparent bg-clip-text text-black">
            {profile.name}
          </h1>
        </div>
        <div className="space-y-4">
          {profile.links.map((link, index) => (
            <motion.a
              key={index}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full text-lg py-3 px-4 rounded-lg bg-gray-800 hover:bg-gray-700 transition-colors duration-300 text-center relative overflow-hidden group"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="relative z-10">{link.title}</span>
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 opacity-0 group-hover:opacity-50 transition-opacity duration-300" />
              <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-400 opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-300" />
            </motion.a>
          ))}
        </div>
      </motion.div>
    </div>
  )
}