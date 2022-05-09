
export default function SlideshowThumb({clickHandler, src, className}:{clickHandler:() => void, src:string, className: string}) {

  return <div className={className} ><img src={src} onClick={() => clickHandler()} /></div>
}