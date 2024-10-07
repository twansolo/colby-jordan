'use client'
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import { X } from 'lucide-react'
import Link from 'next/link'

// Simulated Instagram data
const instagramPosts = [
  { id: 1, imageUrl: '/placeholder.png?height=300&width=300', caption: 'Exploring new galaxies #SpaceExplorer' },
  { id: 2, imageUrl: '/placeholder.png?height=300&width=300', caption: 'Nebula dreams #CosmicBeauty' },
  { id: 3, imageUrl: '/placeholder.png?height=300&width=300', caption: 'Starship selfie #SpaceSelfie' },
  { id: 4, imageUrl: '/placeholder.png?height=300&width=300', caption: 'Planet hopping #InterstellarTravel' },
  { id: 5, imageUrl: '/placeholder.png?height=300&width=300', caption: 'Aurora viewing #CosmicLights' },
  { id: 6, imageUrl: '/placeholder.png?height=300&width=300', caption: 'Black hole observation #EventHorizon' },
  { id: 7, imageUrl: '/placeholder.png?height=300&width=300', caption: 'Martian sunset #RedPlanet' },
  { id: 8, imageUrl: '/placeholder.png?height=300&width=300', caption: 'Space station life #FloatingInSpace' },
  { id: 9, imageUrl: '/placeholder.png?height=300&width=300', caption: 'Lunar landing #MoonWalk' },
]

export default function SpacePortfolio() {
  const [selectedImage, setSelectedImage] = useState(null)

  return (
    <div className="min-h-screen bg-gray-900 text-white p-8">
      <div className="max-w-6xl mx-auto">
        <header className="mb-12 flex justify-between items-center">
          <h1 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
            Cosmic Captures
          </h1>
          <Link href="/" className="text-blue-400 hover:text-blue-300 transition-colors">
            ← Back to Linktree
          </Link>
        </header>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {instagramPosts.map((post) => (
            <motion.div
              key={post.id}
              className="relative aspect-square overflow-hidden rounded-lg cursor-pointer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setSelectedImage(post)}
            >
              <Image
                src={post.imageUrl}
                alt={post.caption}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                <p className="text-sm">{post.caption}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <AnimatePresence>
          {selectedImage && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4"
              onClick={() => setSelectedImage(null)}
            >
              <motion.div
                initial={{ scale: 0.9 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0.9 }}
                className="relative max-w-3xl w-full bg-gray-800 rounded-lg overflow-hidden"
                onClick={(e) => e.stopPropagation()}
              >
                <Image
                  src=""
                  alt=""
                  // src={selectedImage.imageUrl}
                  // alt={selectedImage.caption}
                  className="w-full h-auto"
                />
                <div className="absolute top-2 right-2">
                  <button
                    onClick={() => setSelectedImage(null)}
                    className="text-white bg-black/50 rounded-full p-2 hover:bg-black/70 transition-colors"
                    aria-label="Close"
                  >
                    <X size={24} />
                  </button>
                </div>
                <div className="p-4">
                  <p>{selectedImage.caption}</p>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  )
}