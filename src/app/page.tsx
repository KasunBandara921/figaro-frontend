import Hero from '@/components/Hero'
import Products from '@/components/Products'
import About from '@/components/About'
import Gallery from '@/components/Gallery'
import Services from '@/components/Services'
import Parallax from '@/components/Parallax'
import OpeningHours from '@/components/OpeningHours'
import Stylists from '@/components/Stylists'
import Book from '@/components/Book'
import Locations from '@/components/Locations'

export default function Home() {
  return (
    <main>
      <Hero />
      <Products />
      <About />
      <Gallery />
      <Services />
      <Parallax />
      <OpeningHours />
      <Stylists />
      <Book />
      <Locations />
    </main>
  )
}
