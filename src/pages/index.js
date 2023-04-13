import DesiredSavingAmountChart from '@/frontend/components/chart/desired-saving-amount/DesiredSavingAmountChart'
import MotivationOfOpeningAccountChart from '@/frontend/components/chart/motivation-of-opening-account/MotivationOfOpeningAccountChart'
import TotalResponseChart from '@/frontend/components/chart/total-response/TotalResponseChart'
import React, { useMemo } from 'react'

const HomePage = (props) => {
    const totalResponseChartData = useMemo(() => {
        const data = [
            {
                name: 'Week 1',
                target: 15,
                actual: 18
            },
            {
                name: 'Week 2',
                target: 30,
                actual: 0
            },
            {
                name: 'Week 3',
                target: 60,
                actual: 0
            },
            {
                name: 'Week 4',
                target: 100,
                actual: 0
            }
        ]
        return data
    }, [])

    const motivationOpeningAccountChartData = useMemo(() => {
        const data = [
            {
                name: 'Trade & Invest',
                total: 6
            },
            {
                name: 'Save',
                total: 4
            },
            {
                name: 'Get Paid in USD',
                total: 6
            },
            {
                name: 'Access to Loan',
                total: 2
            }
        ]
        return data
    }, [])

    const desiredSavingAmountChartData = useMemo(() => {
        const data = [
            { name: '$1,000 - $4,999', value: 3 },
            { name: '$5,000 - $9,999', value: 6 },
            { name: '$10,000 - $14,999', value: 2 },
            { name: '$20,000 - $30,000', value: 3 },
            { name: 'Other', value: 4 }
        ]

        return data
    }, [])

    return (
        <div className='p-5 flex gap-5 flex-wrap'>
            <TotalResponseChart data={totalResponseChartData} />
            <MotivationOfOpeningAccountChart data={motivationOpeningAccountChartData} />
            <DesiredSavingAmountChart data={desiredSavingAmountChartData} />
        </div>
    )
}

export default HomePage
