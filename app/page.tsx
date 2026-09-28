import Image from 'next/image'
import { ArrowUpRight, Check, ChevronRight, Droplets, MapPin, Menu, Phone, Sparkles } from 'lucide-react'

const phoneHref = 'tel:+14233038405'

function Logo() {
  return (
    <a href="#top" className="flex items-center gap-3" aria-label="Living Water Pool & Spa home">
      <span className="grid size-10 place-items-center rounded-full border border-white/30 bg-white/10">
        <Droplets className="size-5 text-[#39B7C4]" strokeWidth={1.5} />
      </span>
      <span className="leading-none">
        <span className="block text-[15px] font-semibold tracking-[0.18em] text-white">LIVING WATER</span>
        <span className="mt-1 block text-[9px] tracking-[0.3em] text-white/60">POOL & SPA</span>
      </span>
    </a>
  )
}

const services = [
  { number: '01', title: 'Custom Pool Design', text: 'Thoughtful forms, finishes, and water features shaped around the way you live.' },
  { number: '02', title: 'Pool Construction', text: 'Exceptional materials and meticulous craftsmanship from first dig to final detail.' },
  { number: '03', title: 'Outdoor Living', text: 'Complete the experience with patios, fire features, kitchens, and gathering spaces.' },
]

export default function Page() {
  return (
    <main id="top" className="overflow-hidden bg-[#F7F5EF] text-[#172326]">
      <section className="relative min-h-[760px] bg-[#062F3D] text-white lg:min-h-[820px]">
        <Image src="/pool-hero.png" alt="Luxury custom pool at golden hour" fill priority className="object-cover opacity-75" />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(6,47,61,.97)_0%,rgba(6,47,61,.72)_42%,rgba(6,47,61,.1)_100%)]" />
        <div className="relative mx-auto flex min-h-[760px] max-w-7xl flex-col px-6 lg:min-h-[820px] lg:px-10">
          <header className="flex items-center justify-between border-b border-white/20 py-6">
            <Logo />
            <nav className="hidden items-center gap-8 text-sm text-white/75 md:flex" aria-label="Main navigation">
              <a className="transition hover:text-white" href="#about">Our approach</a>
              <a className="transition hover:text-white" href="#services">Services</a>
              <a className="transition hover:text-white" href="#process">Process</a>
              <a className="transition hover:text-white" href="#contact">Contact</a>
            </nav>
            <a href={phoneHref} className="hidden items-center gap-2 text-sm font-medium text-white md:flex"><Phone className="size-4 text-[#39B7C4]" /> (423) 303-8405</a>
            <button className="md:hidden" aria-label="Open navigation"><Menu className="size-6" /></button>
          </header>
          <div className="flex flex-1 items-center pb-24 pt-20 lg:pb-28">
            <div className="max-w-2xl">
              <div className="mb-7 flex items-center gap-3 text-xs font-medium uppercase tracking-[0.28em] text-[#9de8ec]"><span className="h-px w-10 bg-[#39B7C4]" /> Cleveland, Tennessee</div>
              <h1 className="max-w-2xl text-5xl font-light leading-[1.02] tracking-[-0.045em] sm:text-7xl lg:text-[88px]">Where water meets <em className="font-serif not-italic text-[#9de8ec]">exceptional</em> design.</h1>
              <p className="mt-8 max-w-lg text-base leading-7 text-white/70 sm:text-lg">Custom pools and outdoor spaces, designed with intention and built to become part of your everyday life.</p>
              <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center">
                <a href="#contact" className="group inline-flex items-center justify-center gap-3 rounded-full bg-[#39B7C4] px-6 py-3.5 text-sm font-semibold text-[#062F3D] transition hover:bg-[#9de8ec]">Request a consultation <ArrowUpRight className="size-4 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" /></a>
                <a href={phoneHref} className="inline-flex items-center justify-center gap-2 rounded-full border border-white/30 px-6 py-3.5 text-sm font-medium transition hover:bg-white/10"><Phone className="size-4" /> Call our studio</a>
              </div>
            </div>
          </div>
          <div className="flex items-end justify-between border-t border-white/20 py-5 text-xs text-white/55"><span>Designed for the way you live outside.</span><span className="hidden items-center gap-2 sm:flex"><span className="size-2 rounded-full bg-[#39B7C4]" /> Now serving the Tennessee Valley</span></div>
        </div>
      </section>

      <section id="about" className="mx-auto grid max-w-7xl gap-14 px-6 py-24 lg:grid-cols-[.8fr_1.2fr] lg:px-10 lg:py-36">
        <div><p className="eyebrow">The Living Water difference</p><h2 className="mt-5 max-w-md text-4xl font-light leading-tight tracking-[-.04em] sm:text-5xl">A better kind of <span className="text-[#075E68]">backyard.</span></h2></div>
        <div className="max-w-2xl"><p className="text-xl leading-8 text-[#425256]">We believe the best pool is more than a beautiful body of water. It is a place that changes how your home feels — and how your family spends time together.</p><p className="mt-7 text-base leading-7 text-[#6b7778]">Living Water Pool & Spa brings an architectural eye, a builder&apos;s discipline, and a deep respect for the Tennessee landscape to every project. From the first sketch to the final stone, we make the process feel considered.</p><div className="mt-10 grid grid-cols-2 gap-8 border-t border-[#d8c7aa] pt-7 sm:grid-cols-3"><div><strong className="block text-3xl font-light text-[#075E68]">15+</strong><span className="mt-1 block text-xs uppercase tracking-widest text-[#6b7778]">Years crafting</span></div><div><strong className="block text-3xl font-light text-[#075E68]">100%</strong><span className="mt-1 block text-xs uppercase tracking-widest text-[#6b7778]">Custom built</span></div><div><strong className="block text-3xl font-light text-[#075E68]">1:1</strong><span className="mt-1 block text-xs uppercase tracking-widest text-[#6b7778]">Design care</span></div></div></div>
      </section>

      <section id="services" className="bg-[#062F3D] text-white"><div className="mx-auto grid max-w-7xl gap-12 px-6 py-24 lg:grid-cols-[.7fr_1.3fr] lg:px-10 lg:py-32"><div><p className="eyebrow text-[#9de8ec]">What we create</p><h2 className="mt-5 max-w-sm text-4xl font-light leading-tight tracking-[-.04em] sm:text-5xl">Designed for <em className="font-serif not-italic text-[#9de8ec]">living.</em></h2><p className="mt-6 max-w-xs leading-7 text-white/60">A complete vision for your outdoor space, brought to life by one thoughtful team.</p><a href="#contact" className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-[#39B7C4]">Start a conversation <ChevronRight className="size-4" /></a></div><div>{services.map((service) => <div key={service.number} className="group flex gap-6 border-t border-white/20 py-7 last:border-b"><span className="pt-1 text-sm text-[#39B7C4]">{service.number}</span><div><h3 className="text-2xl font-light tracking-tight transition group-hover:text-[#9de8ec]">{service.title}</h3><p className="mt-2 max-w-lg leading-7 text-white/55">{service.text}</p></div><ArrowUpRight className="ml-auto size-5 text-white/40 transition group-hover:text-[#39B7C4]" /></div>)}</div></div></section>

      <section className="mx-auto grid max-w-7xl gap-8 px-6 py-24 lg:grid-cols-[1.1fr_.9fr] lg:px-10 lg:py-36"><div className="relative min-h-[460px] overflow-hidden rounded-[2rem]"><Image src="/pool-detail.png" alt="Pool water meeting natural stone" fill className="object-cover" /><div className="absolute bottom-6 left-6 rounded-2xl border border-white/30 bg-[#062F3D]/75 p-5 text-white backdrop-blur"><Sparkles className="mb-3 size-5 text-[#39B7C4]" /><p className="max-w-[170px] text-sm leading-6">Every detail has a purpose.</p></div></div><div className="flex flex-col justify-center lg:pl-12"><p className="eyebrow">Crafted with intention</p><h2 className="mt-5 text-4xl font-light leading-tight tracking-[-.04em] sm:text-5xl">The details are what make it <span className="text-[#B97952]">yours.</span></h2><p className="mt-7 leading-7 text-[#6b7778]">We pair timeless materials with modern water design to create spaces that feel as natural as they are elevated. No templates. No rushed decisions. Just a clear vision, carefully built.</p><ul className="mt-8 space-y-4 text-sm text-[#425256]"><li className="flex items-center gap-3"><Check className="size-4 text-[#075E68]" /> Natural stone and custom finishes</li><li className="flex items-center gap-3"><Check className="size-4 text-[#075E68]" /> Energy-conscious equipment</li><li className="flex items-center gap-3"><Check className="size-4 text-[#075E68]" /> Seamless indoor-outdoor flow</li></ul></div></section>

      <section id="process" className="bg-[#D8C7AA]/30"><div className="mx-auto grid max-w-7xl gap-12 px-6 py-24 lg:grid-cols-[.8fr_1.2fr] lg:px-10 lg:py-32"><div><p className="eyebrow">Our process</p><h2 className="mt-5 max-w-md text-4xl font-light leading-tight tracking-[-.04em] sm:text-5xl">From first idea to <span className="text-[#075E68]">first swim.</span></h2></div><div className="grid gap-8 sm:grid-cols-3"><div><span className="text-4xl font-light text-[#B97952]">01</span><h3 className="mt-5 text-lg font-semibold">Listen</h3><p className="mt-3 text-sm leading-6 text-[#6b7778]">We start with your home, your habits, and the feeling you want to create.</p></div><div><span className="text-4xl font-light text-[#B97952]">02</span><h3 className="mt-5 text-lg font-semibold">Shape</h3><p className="mt-3 text-sm leading-6 text-[#6b7778]">Ideas become a considered design that balances beauty, budget, and buildability.</p></div><div><span className="text-4xl font-light text-[#B97952]">03</span><h3 className="mt-5 text-lg font-semibold">Build</h3><p className="mt-3 text-sm leading-6 text-[#6b7778]">Our team brings every line, finish, and feature to life with care.</p></div></div></div></section>

      <section id="contact" className="relative overflow-hidden bg-[#075E68] text-white"><Image src="/outdoor-living.png" alt="Outdoor living space beside a luxury pool" fill className="object-cover opacity-20" /><div className="relative mx-auto grid max-w-7xl gap-12 px-6 py-24 lg:grid-cols-[1fr_.8fr] lg:px-10 lg:py-32"><div><p className="eyebrow text-[#9de8ec]">Let&apos;s make space for more</p><h2 className="mt-5 max-w-xl text-5xl font-light leading-[1.05] tracking-[-.04em] sm:text-6xl">Your best days are <em className="font-serif not-italic text-[#9de8ec]">outside.</em></h2><p className="mt-7 max-w-md leading-7 text-white/70">Tell us a little about your vision. We&apos;ll be in touch to schedule a complimentary consultation.</p><div className="mt-10 flex flex-wrap gap-6 text-sm text-white/75"><a href={phoneHref} className="flex items-center gap-2 hover:text-white"><Phone className="size-4 text-[#39B7C4]" /> (423) 303-8405</a><span className="flex items-center gap-2"><MapPin className="size-4 text-[#39B7C4]" /> Cleveland, TN</span></div></div><form className="rounded-3xl border border-white/20 bg-[#062F3D]/70 p-6 backdrop-blur sm:p-8"><div className="grid gap-5 sm:grid-cols-2"><label className="text-sm text-white/70">Your name<input required className="contact-input" name="name" /></label><label className="text-sm text-white/70">Email address<input required type="email" className="contact-input" name="email" /></label></div><label className="mt-5 block text-sm text-white/70">Tell us about your project<textarea className="contact-input min-h-28 resize-none" name="message" /></label><button type="submit" className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-[#39B7C4] px-5 py-3.5 text-sm font-semibold text-[#062F3D] transition hover:bg-[#9de8ec]">Request a consultation <ArrowUpRight className="size-4" /></button></form></div></section>

      <footer className="bg-[#062F3D] text-white"><div className="mx-auto flex max-w-7xl flex-col gap-8 px-6 py-10 sm:flex-row sm:items-center sm:justify-between lg:px-10"><Logo /><div className="flex items-center gap-5 text-sm text-white/55"><span>124 Woods Trail NE, Cleveland, TN</span><a href="#top" aria-label="Living Water social link" className="text-xs uppercase tracking-[0.18em] text-white/70 hover:text-white">Instagram</a></div></div><div className="mx-auto max-w-7xl border-t border-white/10 px-6 py-5 text-xs text-white/35 lg:px-10">© 2026 Living Water Pool & Spa. Crafted for the Tennessee Valley.</div></footer>
    </main>
  )
}
