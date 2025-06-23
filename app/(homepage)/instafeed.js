'use client'
import React, { useEffect } from 'react'

export default function InstaFeed() {
  useEffect(() => {
    // Load Instagram embed script once component mounts
    if (window.instgrm) {
      window.instgrm.Embeds.process()
    } else {
      const script = document.createElement('script')
      script.async = true
      script.src = '//www.instagram.com/embed.js'
      document.body.appendChild(script)
    }
  }, [])

  return (
    <div className="flex justify-center items-center  bg-white">
    <div style={{ width: '600px', maxWidth: '100%' }}>
      <blockquote
      loading="lazy"
        className="instagram-media"
        data-instgrm-permalink="https://www.instagram.com/lea.kis/"
        data-instgrm-version="14"
        style={{
          
          border: '0',
          borderRadius: '3px',
          boxShadow: '0 0 1px rgba(0,0,0,0.5),0 1px 10px rgba(0,0,0,0.15)',
          margin: '1px',
          maxWidth: '600px',
          minWidth: '326px',
          padding: '0',
          width: 'calc(100% - 2px)',
          height: '500px',
        }}
      >
        <a
          href="https://www.instagram.com/lea.kis/"
          style={{
            background: '#FFFFFF',
            lineHeight: 0,
            padding: '0 0',
            textAlign: 'center',
            textDecoration: 'none',
            width: '100%',
          }}
          target="_blank"
          rel="noopener noreferrer"
        >
          View this post on Instagram
        </a>
      </blockquote>
     
      
    </div>
    </div>
  )
}
