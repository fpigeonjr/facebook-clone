import * as React from 'react'
import Image from 'next/image'

export default function Contact(contact) {
  return (
    <div className="flex items-center space-x-2 mb-2 relative hover:bg-gray-200 cursor-pointer p-2 rounded-xl">
      <Image
        className="rounded-full"
        objectFit="cover"
        src={contact.src}
        width={50}
        height={50}
        layout="fixed"
        alt={contact.name}
      />
      <p>{contact.name}</p>
      <div className="absolute bottom-2 left-7 bg-green-400 h-3 w-3 rounded-full animate-bounce" />
    </div>
  )
}
