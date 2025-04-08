"use client";

import React from 'react';
import Link from 'next/link';

const MASS_FORMS = [
  { name: 'Novus Ordo', src: "https://catholicfamilynews.com/wp-content/uploads/2024/03/Novus-Ordo-ad-orientem.jpg", href: "/novus-ordo" },
  { name: 'Tridentine', src: "https://institute-christ-king.org/images/institute/images/traditional_liturgy.jpg", href: "#" },
  { name: 'Byzantine', src: "https://media.ascensionpress.com/wp-content/uploads/2020/03/building-palace-europe-religion-italy-church-1080585-pxhere.com_-scaled.jpg", href: "#" },
  { name: 'Divine Office', src: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhsSKYvmFIfhKU_pStg23TyPvO9RKggXJqwfoHizVXoTeK7Gnh5idsq0fGnlng272ltG0k6ICXgvmQo4d1i5lj7i4h3H4lnl_WS9kLJQb_AzeRBbbS-M2BAqnxPU9OpuGZ8_pF_nA/s1600/Canons.jpg", href: "#" },
];

export default function Liturgies() {
  return (
    <section className="bg-[#030509] py-24 px-6 text-white">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-serif font-bold mb-8 text-white">
          Explore the Liturgical Traditions
        </h2>
        <p className="max-w-2xl mx-auto text-lg md:text-xl font-light mb-14 text-white">
          Journey into the beauty and depth of the Church's liturgical life—from the reverence of the Tridentine Mass to the rhythm of the Divine Office.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          {MASS_FORMS.map((form) => (
            <Link href={form.href} key={form.name}>
              <div className="relative h-56 rounded-xl overflow-hidden shadow-lg border-2 border-[#5a2626] text-antique-white font-semibold text-xl hover:scale-105 transition-transform group cursor-pointer">
                <div className="absolute inset-0 w-full h-full overflow-hidden">
                  <img
                    src={form.src}
                    alt={form.name}
                    className="w-full h-full object-cover opacity-90 group-hover:opacity-90 transition duration-300 transform group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black opacity-60" />
                </div>
                <div className="relative z-10 flex items-center justify-center h-full text-white/80 group-hover:text-white/90">
                  {form.name}
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
