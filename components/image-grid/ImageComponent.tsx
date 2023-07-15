import Image from 'next/image'
import { useEffect, useState } from 'react'

type Size = {
    width: number
    height: number
}
export default function BlurImage({
    image,
    width,
    height,
}: Size & { image: string }) {
    const [isLoading, setLoading] = useState(false)
    const classNameBlur = `duration-700 ease-in-out group-hover:opacity-75
    ${
        isLoading
            ? 'scale-100 blur-0 grayscale-0'
            : 'scale-110 blur-2xl grayscale'
    })`

    return (
        <div className="w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-9 xl:aspect-w-7">
            <Image
                alt=""
                src={image}
                className={classNameBlur}
                onLoadingComplete={() => setLoading(true)}
                width={width}
                height={height}
            />
        </div>
    )
}
export const ImageComponent = ({ width, height }: Size) => {
    return (
        <div className="my-8 grid grid-cols-3 gap-4 sm:grid-cols-3 sm:gap-x-8">
            <BlurImage image={'/1.jpeg'} width={width} height={height} />
            <BlurImage image={'/2.jpeg'} width={width} height={height} />
            <BlurImage image={'/3.jpeg'} width={width} height={height} />
            <BlurImage image={'/4.jpeg'} width={width} height={height} />
            <BlurImage image={'/5.jpeg'} width={width} height={height} />
            <BlurImage image={'/6.jpeg'} width={width} height={height} />
        </div>
    )
}
