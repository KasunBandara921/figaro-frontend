import Hero from '@/src/components/Hero'
import Products from '@/src/components/Products'
import About from '@/src/components/About'
import Gallery from '@/src/components/Gallery'
import Services from '@/src/components/Services'
import Parallax from '@/src/components/Parallax'
import OpeningHours from '@/src/components/OpeningHours'
import Stylists from '@/src/components/Stylists'
import Book from '@/src/components/Book'
import Locations from '@/src/components/Locations'

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
