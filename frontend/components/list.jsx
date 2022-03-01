import React from 'react';



export default function List(props) {
    const coins = Object.values(props.coins)
    if (coins.length > 0) {
        return (
                            <table className="w-1/2 divide-y divide-gray-200 overflow-y-scroll border-solid border 2 border-grey-500">
                                <thead className="bg-gray-50">
                                    <tr>
                                        <th scope="col" className="px-6 py-3 text-center text-lg font-medium text-gray-500 uppercase ">Id</th>
                                        <th scope="col" className="px-6 py-3 text-center text-lg font-medium text-gray-500 uppercase ">Symbol</th>
                                        <th scope="col" className="px-6 py-3 text-center text-lg font-medium text-gray-500 uppercase ">Image</th>
                                        <th scope="col" className="px-6 py-3 text-center text-lg font-medium text-gray-500 uppercase ">Name</th>
                                    </tr>
                                </thead>
                                    <tbody className="bg-white divide-y divide-gray-200 overflow-y-scroll divide-gray-200 ">
          
                                    {coins.map(coin => (
                                        <tr key={coin.id}>
                                            <td className="px-6 py-4 whitespace-nowrap">
                                                <div className="flex h-inherit justify-center align-center">
                                                    <div className="text-base font-medium text-gray-900">{coin.id}</div>
                                                    </div>
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap">
                                                <div className="flex h-inherit justify-center align-center">
                                                    <div className="flex text-base justify-self-center font-medium text-gray-900">{coin.symbol}</div>
                                                </div>
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap">
                                                <div className="flex h-inherit justify-center align-center">
                                                    <img className="h-10" src={coin.image}></img>
                                                </div>
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap">
                                                <div className="flex h-inherit justify-center align-center">
                                                    <div className="text-base font-medium text-gray-900">{coin.name}</div>
                                                    </div>
                                            </td>
                                            
                                        </tr>
                            ))}
                                    </tbody>
                            </table>
                      
        )
    } 
    return ( <div><img src={window.spinner}/></div> )
}