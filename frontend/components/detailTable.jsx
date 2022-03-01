import React from 'react';

export default function DetailTable(props){
    const coins = Object.values(props.coins)
    if (coins.length > 0) {
        return (
            
                            <table className="w-2 divide-y divide-gray-200 overflow-y-scroll border-solid border 2 border-grey-500">
                                <thead className="bg-gray-50">
                                    <tr>
                                        <th scope="col" className="px-3 py-3 text-center text-sm font-medium text-gray-500 uppercase ">Rank</th>
                                        <th scope="col" className="px-3 py-3 text-center text-sm font-medium text-gray-500 uppercase ">Id</th>
                                        <th scope="col" className="px-3 py-3 text-center text-sm font-medium text-gray-500 uppercase ">Symbol</th>
                                        <th scope="col" className="px-3 py-3 whitespace-nowrap text-center text-sm font-medium text-gray-500 uppercase ">Image</th>
                                        <th scope="col" className="px-3 py-3 whitespace-nowrap text-center text-sm font-medium text-gray-500 uppercase ">Name</th>
                                        <th scope="col" className="px-3 py-3 whitespace-nowrap text-center text-sm font-medium text-gray-500 uppercase ">Market Cap</th>
                                        <th scope="col" className="px-3 py-3 whitespace-nowrap text-center text-sm font-medium text-gray-500 uppercase ">Current Price</th>
                                        <th scope="col" className="px-3 py-3 text-center text-sm font-medium text-gray-500 uppercase ">ATL</th>
                                        <th scope="col" className="px-3 py-3 text-center text-sm font-medium text-gray-500 uppercase ">ATH</th>
                                    </tr>
                                </thead>
                                <tbody className="bg-white  divide-y divide-gray-200 h-100">
                                    {coins.map(coin => (
                                        <tr key={coin.id}>
                                            <td className="px-3 py-4 whitespace-nowrap">
                                                <div className="flex h-inherit justify-center align-center">
                                                    <div className="text-xs font-medium text-gray-900">{coin.market_cap_rank}</div>
                                                    </div>
                                            </td>
                                            <td className="px-3 py-4 whitespace-nowrap">
                                                <div className="flex h-inherit justify-center align-center">
                                                    <div className="text-xs font-medium text-gray-900">{coin.id}</div>
                                                    </div>
                                            </td>
                                            <td className="px-3 py-4 whitespace-nowrap">
                                                <div className="flex h-inherit justify-center align-center">
                                                    <div className="flex text-xs justify-self-center font-medium text-gray-900">{coin.symbol}</div>
                                                </div>
                                            </td>
                                            <td className="px-3 py-4 whitespace-nowrap">
                                                <div className="flex h-inherit justify-center align-center">
                                                    <img className="h-10" src={coin.image}></img>
                                                </div>
                                            </td>
                                            <td className="px-3 py-4 whitespace-nowrap">
                                                <div className="flex h-inherit justify-center align-center">
                                                    <div className="text-xs font-medium text-gray-900">{coin.name}</div>
                                                </div>
                                            </td>
                                            <td className="px-3 py-4 whitespace-nowrap">
                                                <div className="flex h-inherit justify-center align-center">
                                                    <div className="text-xs font-medium text-gray-900">{coin.market_cap}</div>
                                                </div>
                                            </td>
                                            <td className="px-3 py-4 whitespace-nowrap">
                                                <div className="flex h-inherit justify-center align-center">
                                                    {coin.current_price/coin.ath > 0.5 ? 
                                                    <div className="text-xs font-medium text-blue-400">{coin.current_price}</div>
                                                    :
                                                    <div className="text-xs font-medium text-yellow-500">{coin.current_price}</div>
                                                    
                                                    }
                                                </div>
                                            </td>
                                            <td className="px-3 py-4 whitespace-nowrap">
                                                <div className="flex h-inherit justify-center align-center">
                                                    <div className="text-xs font-medium text-orange-500">{coin.atl}</div>
                                                </div>
                                            </td>
                                            <td className="px-3 py-4 whitespace-nowrap">
                                                <div className="flex h-inherit justify-center align-center">
                                                    <div className="text-xs font-medium text-green-600">{coin.ath}</div>
                                                </div>
                                            </td>
                                            
                                        </tr>
                            ))}
                                    </tbody>
                            </table>
                      
        )
    } 
    return ( null )
}
