import { SVGProps } from 'react'

type HamburgerProps = {
    /**
     * If not defined, set to the height
     * If a string, strokeLinecap = 'round' is not visible to user and looks like strokeLinecap = 'butt'
     */
    width: SVGProps<SVGSVGElement>['width']
    height: number
    strokeWidth: number
    stroke?: SVGProps<SVGSVGElement>['stroke']
}

export const Hamburger = ({ width, height, strokeWidth, stroke = 'black' }: HamburgerProps) => {
    if (!width) {
        width = height
    }
    const x1 = typeof width === 'number' ? strokeWidth : 0
    const x2 = typeof width === 'number' ? width - strokeWidth : width
    const y1 = strokeWidth
    const y2 = height / 2
    const y3 = height - strokeWidth
    return (
        <svg width={width} height={height} viewBox={`0 0 ${width} ${height}`}>
            <line x1={x1} y1={y1} x2={x2} y2={y1} stroke={stroke} strokeWidth={strokeWidth} strokeLinecap={'round'}/>
            <line x1={x1} y1={y2} x2={x2} y2={y2} stroke={stroke} strokeWidth={strokeWidth} strokeLinecap={'round'}/>
            <line x1={x1} y1={y3} x2={x2} y2={y3} stroke={stroke} strokeWidth={strokeWidth} strokeLinecap={'round'}/>
        </svg>
    )
}