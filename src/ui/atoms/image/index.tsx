import { ImgHTMLAttributes, useRef } from 'react'

const Image = (props: ImgHTMLAttributes<HTMLImageElement>): JSX.Element => {
  const { className, src, alt, ...imgProps } = props
  const ref = useRef<HTMLImageElement>(null)

  return <img ref={ref} src={src} className={className} data-src={src} {...imgProps} alt={alt} />
}
export default Image
