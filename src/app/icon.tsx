import { ImageResponse } from 'next/og'
import { readFileSync } from 'fs'
import { join } from 'path'

// Image metadata
export const size = {
    width: 32,
    height: 32,
}
export const contentType = 'image/png'

// Image generation
export default function Icon() {
    const imgPath = join(process.cwd(), 'public', 'avatar.png')
    const imgData = readFileSync(imgPath)
    const base64Img = `data:image/png;base64,${imgData.toString('base64')}`

    return new ImageResponse(
        (
            <div
                style={{
                    width: '100%',
                    height: '100%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    borderRadius: '50%',
                    overflow: 'hidden',
                    background: 'transparent',
                }}
            >

                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                    src={base64Img}
                    alt="Avatar"
                    style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                    }}
                />
            </div>
        ),
        {
            ...size,
        }
    )
}
