import React from 'react';



export default function List(props) {
    const coins = Object.values(props.coins)
    if (coins.length > 0) {
        return (
                            <table className="w-1/3 divide-y divide-gray-200 overflow-y-scroll border-solid border 2 border-grey-500 table-auto h-1/2">
                                <thead className="bg-gray-50">
                                    <tr>
                                        <th scope="col" className="px-6 py-3 text-center text-sm text-gray-500 uppercase ">Id</th>
                                        <th scope="col" className="px-6 py-3 text-center text-sm text-gray-500 uppercase ">Symbol</th>
                                        <th scope="col" className="px-6 py-3 text-center text-sm text-gray-500 uppercase ">Image</th>
                                        <th scope="col" className="px-6 py-3 text-center text-sm text-gray-500 uppercase ">Name</th>
                                    </tr>
                                </thead>
                                    <tbody className="bg-white divide-y divide-gray-200 overflow-y-scroll divide-gray-200 h-inherit">
          
                                    {coins.map(coin => (
                                        <tr key={coin.id} className='w-inherit'>
                                            <td className="px-6 py-4 text-center whitespace-nowrap text-xs font-medium text-gray-900">
                                                {coin.id}
                                            </td>
                                            <td className="px-6 py-4 text-center whitespace-nowrap text-xs font-medium text-gray-900">
                                               {coin.symbol}
                                            </td>
                                            <td className="px-6 py-4 text-center whitespace-nowrap text-xs font-medium text-gray-900">
                                                <img className="h-10" src={coin.image}/>
                                            </td>
                                            <td className="px-6 py-4 text-center whitespace-nowrap text-xs font-medium text-gray-900">
                                                {coin.name}
                                            </td>
                                            
                                        </tr>
                            ))}
                                    </tbody>
                            </table>
                      
        )
    } 
    return ( <div><img src={window.spinner}/></div> )
}