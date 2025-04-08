"use client";

import React from "react";

interface TemplateProps {
  title: string;
  children: React.ReactNode;
  image: string;
}


export default function Template({title, children, image}: TemplateProps) {
  return (
          <main className="min-h-screen py-20 px-6 bg-[#030509] text-antique-white">
              <div className="relative max-w-5xl mx-auto text-center flex flex-col items-center">
                  <div className="relative w-full max-w-5xl">
                      <img
                          src={image}
                          alt="Christ Crucified"
                          className="w-full rounded-b-full shadow-lg"
                      />
                      <div className="absolute inset-0 bg-black opacity-80 rounded-b-full" />
                  </div>
  
                  <div className="absolute top-32 left-0 right-0 z-10  text-white space-y-4 px-4">
                      <h1 className="text-4xl md:text-5xl font-serif font-bold">
                          {title}
                      </h1>
  
                      {/* The Liturgy */}
                      <div className="mx-auto mt-10 text-xl">
                          {children}
                      </div>
  
                  </div>
              </div>
          </main>
      );
}