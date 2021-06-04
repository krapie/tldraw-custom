import useHandleEvents from 'hooks/useBoundsHandleEvents'
import styled from 'styles'
import { Bounds } from 'types'

export default function Rotate({
  bounds,
  size,
}: {
  bounds: Bounds
  size: number
}) {
  const events = useHandleEvents('rotate')

  return (
    <g cursor="grab" {...events}>
      <circle
        cx={bounds.width / 2}
        cy={size * -2}
        r={size * 2}
        fill="transparent"
        stroke="none"
      />
      <StyledRotateHandle
        cx={bounds.width / 2}
        cy={size * -2}
        r={size / 2}
        pointerEvents="none"
      />
    </g>
  )
}

const StyledRotateHandle = styled('circle', {
  stroke: '$bounds',
  fill: '#fff',
  zStrokeWidth: 2,
  cursor: 'grab',
})