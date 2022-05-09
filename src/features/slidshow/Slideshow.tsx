import { useState, useEffect } from 'react'
import SlideshowThumb from './SlideshowThumb'

import img1 from '../../assets/images/1.jpg'
import img2 from '../../assets/images/2.jpg'
import img3 from '../../assets/images/3.jpg'
import img4 from '../../assets/images/4.jpg'
import img5 from '../../assets/images/5.jpg'
import img6 from '../../assets/images/6.jpg'
import img7 from '../../assets/images/7.jpg'
import img8 from '../../assets/images/8.jpg'
import img9 from '../../assets/images/9.jpg'


const imgs = [img1, img2, img3, img4, img5, img6, img7, img8, img9]

export default function Slideshow() {
  const [index, setIndex] = useState(0)
  const [autoplay, setAutoplay] = useState(false)

  const prev = () => {
    return index-1 > 0 ? index-1 : imgs.length -1 
  }
  const next = () => {
    return index+1 < imgs.length ? index+1 : 0
  }

  useEffect(() => {
    let timeout: number
    if(autoplay) {
      timeout = window.setTimeout(() => setIndex(next()),3000);
    }
    
    return () => {
      clearTimeout(timeout);
    };
  },[autoplay, index])


  return <div className='container mx-auto'>
    
      <div className='aspect-[2/1] max-w-[900px] mx-auto my-10'>
        <img src={imgs[index]} className="object-cover object-center w-full h-full"  />
      </div>
      
      <nav className='flex gap-4 justify-between items-center w-full'>
        <button onClick={() => setIndex(prev())}>Prev</button>
        { imgs.map((img, ndx) => <SlideshowThumb key={ndx} className={`basis-1/12 grow-0 shrink cursor-pointer ${(ndx == index) && 'border border-red-500 border-2'}`} clickHandler={() => setIndex(ndx)} src={img} />) }
        <button onClick={() => setIndex(next())}>Next</button>
      </nav>

      <label className='cursor-pointer mt-10'><input type="checkbox" onChange={(ev) => setAutoplay(ev.target.checked)} /> Autoplay</label>

  </div>
}