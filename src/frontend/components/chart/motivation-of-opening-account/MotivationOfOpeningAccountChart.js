import React, { useEffect, useState } from 'react'
import cn from 'classnames'
import styles from './MotivationOfOpeningAccountChart.module.scss'
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts'

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
            <tspan x={props.x} dy='0.355em'>{props.payload.value}</tspan>
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

const MotivationOfOpeningAccountChart = (props) => {
    const { data } = props

    const renderTooltip = (props) => {
        if (props.active && props.payload && props.payload.length) {
            return (
                <div className={cn(props.className, styles.chartTooltip)} style={props.style}>
                    <div className={styles.title}>
                        {props.payload[0].payload.name}
                    </div>
                    <div style={{ color: props.payload[0].color }}>
                        Total: {props.payload[0].value}
                    </div>
                </div>
            )
        }
    
        return null
    }

    const renderLabel = (props) => {
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
                    Reasons of Why People Want USD Account
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
                        <YAxis type='category' width={115} dataKey='name' axisLine={false} tickLine={false} tick={CustomizedYAxisTick} />
                        <XAxis type='number' axisLine={false} tickLine={false} tick={false} />

                        <Tooltip
                            cursor={{ fill: '#f7f7f7' }}
                            content={renderTooltip}
                        />

                        <Bar dataKey='total' fill='#17ccb7' barSize={20} radius={5} label={renderLabel} />
                    </BarChart>
                </ResponsiveContainer>
            </div>
        </div>
	)
}

MotivationOfOpeningAccountChart.defaultProps = {
}

export default MotivationOfOpeningAccountChart
