import React, { useEffect, useState } from 'react'
import cn from 'classnames'
import styles from './TotalResponseChart.module.scss'
import { BarChart, Bar, Cell, XAxis, YAxis, LabelList, Tooltip, Legend, ResponsiveContainer } from 'recharts'

const CustomizedYAxisTick = (props) => {
    return (
        <text
            height={props.height}
            width={props.width}
            orientation={props.orientation}
            x={props.x}
            y={props.y}
            textAnchor={props.textAnchor}
            className={cn(styles.tick, props.className)}
        >
            <tspan x={props.x} dy='-0.8em'>{props.payload.value}</tspan>
        </text>
    )
}

const CustomizedXAxisTick = (props) => {
    return (
        <text
            height={props.height}
            {...props}
            className={cn(styles.tick, props.className)}
        >
            {props.payload.value}
        </text>
    )
}

const TotalResponseChart = (props) => {
    const { data } = props

    const renderLegend = (props) => {
        const { payload } = props
      
        return (
            <ul className={styles.legendList}>
                {payload.map((entry, index) => (
                    <li key={index}>
                        <div className={styles.legendIndicator} style={{ backgroundColor: entry.color }} />
                        <div>{entry.value}</div>
                    </li>
                ))}
            </ul>
        )
    }

    const renderTooltip = (props) => {
        if (props.active && props.payload && props.payload.length) {
            return (
                <div className={cn(props.className, styles.chartTooltip)} style={props.style}>
                    <div className={styles.title}>
                        {props.payload[0].payload.name}
                    </div>
                    <div style={{ color: props.payload[0].color }}>
                        Target: {props.payload[0].value}
                    </div>
                    <div style={{ color: props.payload[1].color }}>
                        Actual: {props.payload[1].value}
                    </div>
                </div>
            )
        }
    
        return null
    }

    const renderLabel1 = (props) => {
        const { x, y, fill, value, width } = props

        if (value === 0) return <div />

        return (
            <text
                x={width / 2 + x}
                y={y + 15}
                fontSize='14'
                className='font-semibold'
                fill='white'
                textAnchor='middle'
            >
                {value}
            </text>
        )
    }

    const renderLabel2 = (props) => {
        const { x, y, fill, value, width } = props

        if (value === 0) return <div />

        return (
            <text
                x={width / 2 + x}
                y={y + 15}
                fontSize='14'
                className='font-semibold'
                fill='white'
                textAnchor='middle'
            >
                {value}
            </text>
        )
    }

	return (
		<div className={cn(styles.wrapper, props.className)} style={props.style}>
            <div>
                <h2>
                    Total Responses
                </h2>
            </div>

            <div className={styles.chartWrapper}>
                <ResponsiveContainer>
                    <BarChart
                        layout='vertical'
                        data={data}
                        margin={{
                            left: 0,
                            bottom: 0,
                            right: 0
                        }}
                    >
                        <Legend verticalAlign='top' wrapperStyle={{ left: 0, top: 0, paddingBottom: 15 }} align='center' content={renderLegend} />

                        <YAxis type='category' dataKey='name' axisLine={false} tickLine={false} tick={CustomizedYAxisTick} />
                        <XAxis type='number' axisLine={false} tickLine={false} tick={false} />

                        <Tooltip
                            cursor={{ fill: '#f7f7f7' }}
                            content={renderTooltip}
                        />

                        <Bar dataKey='target' fill='#36b3d0' barSize={20} label={renderLabel1}>
                            {data.map((entry, index) => {
                                const { target, actual } = entry
                                let radius = [5, 5, 5, 5]

                                if (actual === 0) {
                                    radius = [5, 5, 5, 5]
                                }

                                return (
                                    <Cell key={index} radius={radius} />
                                )
                            })}
                        </Bar>
                        <Bar dataKey='actual' fill='#17ccb7' barSize={20} radius={[5, 5, 5, 5]} label={renderLabel2} />
                    </BarChart>
                </ResponsiveContainer>
            </div>
        </div>
	)
}

TotalResponseChart.defaultProps = {
}

export default TotalResponseChart
