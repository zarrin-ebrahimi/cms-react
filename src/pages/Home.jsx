import React from 'react' 
import Chart from '../components/rechart/chart'
import { xAxisData } from '../components/rechart/datas'
import * as Icon from '@mui/icons-material'
import BoxFeatures from '../components/BoxFeatures'
import WidgetSm from '../components/users/WidgetSm'
import WidgetLg from '../components/transActions/WidgetLg'
export default function Home() {
  return (
    <div >
      
      <div className=' grid xl:grid-cols-3 gap-x-3 md:grid-cols-2  grid-cols-1'>
      <BoxFeatures>
        <h2 className='text-xl'>Sales</h2>
        <h2 className='text-2xl font-bold'>
          <Icon.CurrencyExchange fontSize='small' className='mr-2 '/>
          2,415
          <Icon.South fontSize='small' className=' text-red-600 ml-2 '/>
          <span className='text-xs text-gray-600'>-11.4</span>
        </h2>
      </BoxFeatures>
      <BoxFeatures>
      <h2 className='text-xl'>Revanue</h2>
      <h2 className='text-2xl font-bold'>
          <Icon.CurrencyExchange fontSize='small' className='mr-2'/>
          3.445
          <Icon.North fontSize='small' className=' text-green-600 ml-2 '/>
          <span className='text-xs text-gray-600'>+31.4</span>
        </h2>
      </BoxFeatures>
      <BoxFeatures>
      <h2 className='text-xl'>Cost</h2>
      <h2 className='text-2xl font-bold'>
          <Icon.CurrencyExchange fontSize='small' className='mr-2'/>
          61,234
        </h2>
      </BoxFeatures>
      </div>
      <div  className='rounded-sm shadow-md'>
      <Chart grid  title='Month Sale' data={xAxisData} dataKey="Sale" ></Chart>
      </div>
      <div  className='grid grid-cols-8 gap-3 '>
        <div  className='col-span-3 '>
        <WidgetSm />
        </div>
        <div  className='col-span-5'>
        <WidgetLg/>
        </div>
      </div>
    </div>
  )
}
