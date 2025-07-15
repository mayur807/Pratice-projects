import React from 'react'

function Inputbox(
    {
        label,
        amount,
        to,
        from,
        currencyOptions = [],
        onAmountChange,
        selectedCurrency,
        onCurrencyChange,
        disabled
    }
) 


{
    return (
        <div className='flex flex-col gap-10 items-center'>
            <label >{label}</label>
            <input   className="w-full px-4 py-2 rounded-lg outline-none bg-white text-black focus:ring-2 focus:ring-blue-500" type="text"
                value={amount}
                onChange={(e) => onAmountChange && onAmountChange(Number(e.target.value))}
                disabled={disabled}
            />
            <select 
              className="w-full px-3 py-2 rounded-lg bg-gray-100 text-black outline-none cursor-pointer"
               value={selectedCurrency}
                onChange={(e) => onCurrencyChange && onCurrencyChange(e.target.value)}
            >
                {currencyOptions.map((currency) =>
                    <option className='capitalize' key={currency}
                    
                    >
                        
                        {
                        
                        currency}

                    </option>

                )

                }

            </select>
        </div>
    )
}

export default Inputbox