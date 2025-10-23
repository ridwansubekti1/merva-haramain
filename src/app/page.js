import Hero from '@/components/Hero'
import Keunggulan from '@/components/Keunggulan'
import BlogCard from '@/components/BlogCard'
// import PaketCard from '@/components/PaketCard'
import Galeri from '@/components/Galeri'
import Mitra from '@/components/Mitra'
import Testimoni from '@/components/Testimoni'
import ScrollToTop from '@/components/ScrollToTop'


export default function Home() {
  return (
    <>
    <Hero/>
    <Keunggulan/>
    <BlogCard/>
    {/* <PaketCard/> */}
    <Galeri/>
    <Mitra/>
    <Testimoni/>
    <ScrollToTop/>
    </>
  );
}
