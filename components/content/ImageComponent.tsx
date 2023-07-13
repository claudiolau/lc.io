import Image from 'next/image'
import { useState } from 'react'

type Size = {
    width: number
    height: number
}
export default function BlurImage({ image, width, height }: any) {
    const [isLoading, setLoading] = useState(true)
    const classNameBlur = `duration-700 ease-in-out group-hover:opacity-75
    ${
        isLoading
            ? 'scale-110 blur-2xl grayscale'
            : 'scale-100 blur-0 grayscale-0'
    })`
    return (
        <a href={image.href} className="group">
            <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
                <Image
                    alt=""
                    src={image}
                    className={classNameBlur}
                    onLoadingComplete={() => setLoading(false)}
                    width={width}
                    height={height}
                />
            </div>
        </a>
    )
}
export const ImageComponent = ({ width, height }: Size) => {
    return (
        <div className="my-8 grid columns-2 gap-4 sm:grid-cols-3 sm:gap-x-8">
            <BlurImage image={'/1.jpeg'} width={width} height={height} />
            <BlurImage image={'/2.jpeg'} width={width} height={height} />
            <BlurImage image={'/3.jpeg'} width={width} height={height} />
            <BlurImage image={'/4.jpeg'} width={width} height={height} />
            <BlurImage image={'/5.jpeg'} width={width} height={height} />
            <BlurImage image={'/6.jpeg'} width={width} height={height} />
        </div>
    )
}
