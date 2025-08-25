'use client'

export default function WorldMap() {
  return (
    <div className="rounded-xl2 border overflow-hidden">
      <svg
        viewBox="0 0 1000 500"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        className="w-full h-auto"
      >
        <rect width="100%" height="100%" fill="#E8F7E8" />
        <a xlinkHref="/guides/north-america">
          <polygon
            points="80,120 260,80 320,120 280,200 140,220"
            fill="#C6E7C6"
            className="cursor-pointer"
            tabIndex={0}
            role="link"
            aria-label="North America"
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault()
                window.location.href = '/guides/north-america'
              }
            }}
          />
        </a>
        <a xlinkHref="/guides/south-america">
          <polygon
            points="300,220 360,240 340,320 320,400 300,450 260,360 280,300"
            fill="#CDECCB"
            className="cursor-pointer"
            tabIndex={0}
            role="link"
            aria-label="South America"
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault()
                window.location.href = '/guides/south-america'
              }
            }}
          />
        </a>
        <a xlinkHref="/guides/europe">
          <polygon
            points="480,120 560,120 580,160 520,170 500,150"
            fill="#C6E7C6"
            className="cursor-pointer"
            tabIndex={0}
            role="link"
            aria-label="Europe"
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault()
                window.location.href = '/guides/europe'
              }
            }}
          />
        </a>
        <a xlinkHref="/guides/africa">
          <polygon
            points="520,180 580,180 620,260 600,340 520,320 500,240"
            fill="#BFE4BD"
            className="cursor-pointer"
            tabIndex={0}
            role="link"
            aria-label="Africa"
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault()
                window.location.href = '/guides/africa'
              }
            }}
          />
        </a>
        <a xlinkHref="/guides/asia">
          <polygon
            points="600,120 760,140 820,220 700,260 620,200"
            fill="#CDECCB"
            className="cursor-pointer"
            tabIndex={0}
            role="link"
            aria-label="Asia"
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault()
                window.location.href = '/guides/asia'
              }
            }}
          />
        </a>
        <title>Click a continent</title>
      </svg>
    </div>
  )
}

