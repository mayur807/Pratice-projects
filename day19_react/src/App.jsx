import { useEffect, useState } from 'react'
import Inputbox from './components/inputbox'
import useCurrencyinfo from './hooks/currencyinfo';


function App() {
  const [amount,setamount] = useState(0);
  const [to,setto] = useState('usd')
  const [from,setfrom] = useState('inr')
  const actauldata = useCurrencyinfo(from)
const[ convertedamount ,setconvertedamount] = useState(0)
const currencyOptions = Object.keys(actauldata || {}
)



const convertamount =()=>{
  
  if(!actauldata[to])return;
  const rate = actauldata[to]
  const result = amount * rate
setconvertedamount(result)
}

const swap =()=>{
  setto(from)
  setfrom(to)
}
  return (
    <>
<div className='bg-gray-900 w-full h-12 md:h-15 m-auto flex items-center'>
    <h1 className='text-center text-white text-xl md:text-3xl m-auto font-extrabold'>Currency Converter</h1>
</div>        

<div className='min-h-80 md:h-96 flex flex-col gap-4 md:gap-5 items-center p-4 md:p-10 w-full max-w-sm md:max-w-4xl m-auto bg-gray-900 mt-6 md:mt-10 rounded-2xl md:rounded-3xl'>        
    <div className='flex flex-col md:flex-row gap-4 md:gap-10 w-full'>         
        <div className='w-full md:h-[50%] md:w-[50%] bg-gray-500 rounded-xl md:rounded-2xl capitalize p-3 md:p-0'>           
            <Inputbox           
                amount={amount} 
                currencyOptions={currencyOptions} 
                selectedCurrency={from} 
                onCurrencyChange={setfrom} 
                onAmountChange={setamount} 
                label="From"           
            />         
        </div>         
        <div className='w-full md:h-[50%] md:w-[50%] bg-gray-500 rounded-xl md:rounded-2xl capitalize p-3 md:p-0'>                  
            <Inputbox         
                label='To'         
                amount={convertedamount}         
                currencyOptions={currencyOptions}         
                selectedCurrency={to}         
                onCurrencyChange={setto}         
                disabled={true}         
            />        
        </div>          
    </div>         
    <button className='bg-gray-600 rounded-2xl md:rounded-3xl px-3 py-2 md:px-4 md:py-2 w-full md:w-[50%] text-sm md:text-base' onClick={swap}>Swap</button>         
    <button className='bg-gray-600 rounded-2xl md:rounded-3xl px-3 py-2 md:px-4 md:py-2 w-full md:w-[50%] text-sm md:text-base' onClick={convertamount}>Convert</button>        
</div>
    </>
  )
}

export default App
