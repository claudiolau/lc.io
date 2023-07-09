import Image from 'next/image'
type Size = {
    width: number
    height: number
}

export const ImageComponent = ({ width, height }: Size) => {
    return (
        <div className="my-8 grid grid-cols-2 gap-4 py-4 sm:grid-cols-3 sm:gap-x-8">
            <Image
                src="/1.jpeg"
                width={width}
                height={height}
                className="rounded-lg object-cover"
                alt="Hokkaido Soccer"
            />
            <Image
                src="/2.jpeg"
                width={width}
                height={height}
                className="rounded-lg object-cover"
                alt="Hokkaido Baseball"
            />
            <Image
                src="/3.jpeg"
                width={width}
                height={height}
                className="rounded-lg object-cover"
                alt="Hokkaido Miffy"
            />
            <Image
                src="/4.jpeg"
                width={width}
                height={height}
                className="rounded-lg object-cover"
                alt="Hokkaido Cat"
            />
            <Image
                src="/5.jpeg"
                width={width}
                height={height}
                className="rounded-lg object-cover"
                alt="Hokkaido Cat"
            />
            <Image
                src="/6.jpeg"
                width={width}
                height={height}
                className="rounded-lg object-cover"
                alt="Hokkaido Cat"
            />
        </div>
    )
}
