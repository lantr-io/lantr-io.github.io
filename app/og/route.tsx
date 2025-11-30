import { ImageResponse } from 'next/og'

export function GET(request: Request) {
  let url = new URL(request.url)
  let title = url.searchParams.get('title') || 'Lantr Engineering'

  return new ImageResponse(
    (
      <div tw="flex flex-col w-full h-full items-center justify-center bg-black">
        <div tw="flex flex-col w-full py-12 px-16 items-center justify-center">
          <h2 tw="flex flex-col text-6xl font-bold tracking-tight text-white text-center mb-4">
            {title}
          </h2>
          <p tw="text-2xl text-gray-400">Lantr Engineering</p>
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
    }
  )
}
