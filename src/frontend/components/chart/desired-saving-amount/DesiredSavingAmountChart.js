import React, { useEffect, useState } from 'react'
import cn from 'classnames'
import styles from './DesiredSavingAmountChart.module.scss'
import { PieChart, Pie, Sector, ResponsiveContainer, Cell } from 'recharts'

const DesiredSavingAmountChart = (props) => {
    const { data } = props
    const colors = ['#17ccb7', '#36b3d0', '#fba116', '#FF8042', '#CC5C5C']
    const [activeIndex, setActiveIndex] = useState(0)

    const onPieEnter = (_, index) => {
        setActiveIndex(index)
    }

    const renderActiveShape = (props) => {
        const RADIAN = Math.PI / 180
        const {
            cx,
            cy,
            midAngle,
            innerRadius,
            outerRadius,
            startAngle,
            endAngle,
            fill,
            payload,
            percent,
            value
        } = props
        const sin = Math.sin(-RADIAN * midAngle)
        const cos = Math.cos(-RADIAN * midAngle)
        const sx = cx + (outerRadius + 10) * cos
        const sy = cy + (outerRadius + 10) * sin
        const mx = cx + (outerRadius + 30) * cos
        const my = cy + (outerRadius + 30) * sin
        const ex = mx + (cos >= 0 ? 1 : -1) * 22
        const ey = my
        const textAnchor = cos >= 0 ? 'start' : 'end'

        return (
            <g>
                {/* <text x={cx} y={cy} dy={8} textAnchor='middle' className='font-semibold' fill='grey'>
                    <tspan>{payload.name}</tspan>
                </text> */}

                <Sector
                    cx={cx}
                    cy={cy}
                    innerRadius={innerRadius}
                    outerRadius={outerRadius}
                    startAngle={startAngle}
                    endAngle={endAngle}
                    fill={fill}
                />

                <Sector
                    cx={cx}
                    cy={cy}
                    startAngle={startAngle}
                    endAngle={endAngle}
                    innerRadius={outerRadius + 6}
                    outerRadius={outerRadius + 10}
                    fill={fill}
                />

                <path
                    d={`M${sx},${sy}L${mx},${my}L${ex},${ey}`}
                    stroke={fill}
                    fill='none'
                />

                <circle cx={ex} cy={ey} r={2} fill={fill} stroke='none' />

                <text
                    x={ex + (cos >= 0 ? 1 : -1) * 12}
                    y={ey}
                    textAnchor={textAnchor}
                    fill='#14141F'
                    className='font-semibold'
                >
                    {payload.name}
                </text>

                <text
                    x={ex + (cos >= 0 ? 1 : -1) * 12}
                    y={ey + 5}
                    dy={18}
                    textAnchor={textAnchor}
                    fill='grey'
                    className='font-semibold'
                >
                    {`${(percent * 100).toFixed(2)}%`}
                </text>
            </g>
        )
    }

    return (
        <div className={cn(styles.wrapper, props.className)} style={props.style}>
            <div>
                <h2>
                    Desired Saving Amount
                </h2>
            </div>

            <div className={styles.chartWrapper}>
                <ResponsiveContainer>
                    <PieChart>
                        <Pie
                            activeIndex={activeIndex}
                            activeShape={renderActiveShape}
                            inactiveShape={renderActiveShape}
                            data={data}
                            innerRadius={70}
                            outerRadius={90}
                            fill='#17ccb7'
                            dataKey='value'
                            paddingAngle={2}
                            onMouseEnter={onPieEnter}
                        >
                            {data.map((entry, index) => (
                                <Cell key={index} fill={colors[index % colors.length]} />
                            ))}
                        </Pie>
                    </PieChart>
                </ResponsiveContainer>
            </div>
        </div>
    )
}

DesiredSavingAmountChart.defaultProps = {
}

export default DesiredSavingAmountChart
