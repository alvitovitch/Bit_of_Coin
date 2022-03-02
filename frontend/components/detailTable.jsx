import React from 'react';

export default function DetailTable(props){
    const coins = Object.values(props.coins)
    if (coins.length > 0) {
        return (
            
                            <table className="w-2 divide-y divide-gray-200 overflow-y-scroll border-solid border 2 border-grey-500 table">
                                <thead className="bg-gray-50">
                                    <tr>
                                        <th scope="col" className="px-3 py-3 text-center text-sm text-gray-500 uppercase ">Rank</th>
                                        <th scope="col" className="px-3 py-3 text-center text-sm text-gray-500 uppercase ">Id</th>
                                        <th scope="col" className="px-3 py-3 text-center text-sm text-gray-500 uppercase ">Symbol</th>
                                        <th scope="col" className="px-3 py-3 whitespace-nowrap text-center text-sm text-gray-500 uppercase ">Image</th>
                                        <th scope="col" className="px-3 py-3 whitespace-nowrap text-center text-sm text-gray-500 uppercase ">Name</th>
                                        <th scope="col" className="px-3 py-3 whitespace-nowrap text-center text-sm text-gray-500 uppercase ">Market Cap</th>
                                        <th scope="col" className="px-3 py-3 whitespace-nowrap text-center text-sm text-gray-500 uppercase ">Current Price</th>
                                        <th scope="col" className="px-3 py-3 text-center text-sm text-gray-500 uppercase ">ATL</th>
                                        <th scope="col" className="px-3 py-3 text-center text-sm text-gray-500 uppercase ">ATH</th>
                                    </tr>
                                </thead>
                                <tbody className="bg-white  divide-y divide-gray-200 h-100">
                                    {coins.map(coin => (
                                        <tr key={coin.id}>
                                            <td className="px-3 py-3 text-center whitespace-nowrap text-xs font-medium text-gray-900">
                                                    {coin.market_cap_rank}
                                            </td>
                                            <td className="px-3 py-3 text-center whitespace-nowrap text-xs font-medium text-gray-900">
                                                    {coin.id}
                                            </td>
                                            <td className="px-3 py-3 text-center whitespace-nowrap text-xs font-medium text-gray-900">
                                                    {coin.symbol}
                                            </td>
                                            <td className="px-3 py-3 text-center whitespace-nowrap text-xs font-medium text-gray-900">
                                                    <img className="h-10" src={coin.image}></img>
                                            </td>
                                            <td className="px-3 py-3 text-center whitespace-nowrap text-xs font-medium text-gray-900">
                                                    {coin.name}
                                            </td>
                                            <td className="px-3 py-3 text-center whitespace-nowrap text-xs font-medium text-gray-900">
                                                   {coin.market_cap}
                                            </td>
                                                {coin.current_price/coin.ath > 0.5 ? 
                                                    <td className="px-3 py-3 text-center whitespace-nowrap text-xs font-medium text-blue-400">{coin.current_price}</td>
                                                    :
                                                    <td className="px-3 py-3 text-center whitespace-nowrap text-xs font-medium text-yellow-500">{coin.current_price}</td>
                                                }
                                            <td className="px-3 py-3 text-center whitespace-nowrap text-xs font-medium text-orange-500">
                                                {coin.atl}
                                            </td>
                                            <td className="px-3 py-3 text-center whitespace-nowrap text-xs font-medium text-gray-900">
                                                {coin.ath}
                                            </td>
                                            
                                        </tr>
                            ))}
                                    </tbody>
                            </table>
                      
        )
    } 
    return ( null )
}
