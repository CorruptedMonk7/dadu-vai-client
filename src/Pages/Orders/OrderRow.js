import React, { useEffect, useState } from 'react';

const OrderRow = ({ order, handleDelete }) => {
    const { _id, serviceName, price, customer, phone, email, service } = order;
    const [orderService, setOrderService] = useState({})
    useEffect(() => {
        fetch(`https://dadu-vai-server.vercel.app/services/${service}`)
            .then(res => res.json())
            .then(data => setOrderService(data))
    }, [service])




    return (

        <tr>
            <th>
                <label>
                    <button onClick={() => handleDelete(_id)} className="btn btn-circle">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
                    </button>
                </label>
            </th>
            <td>
                <div className="flex items-center gap-3">


                    <div className="avatar">
                        <div className="mask mask-squircle w-24 h-24">
                            {
                                orderService?.img &&
                                <img src={orderService.img} alt="Avatar Tailwind CSS Component" />
                            }
                        </div>
                    </div>
                    <div>
                        <div className="font-bold">{customer}</div>
                        <div className="text-sm opacity-50">{phone}</div>
                    </div>
                </div>
            </td>
            <td>
                {serviceName}
                <br />
                <span className="badge badge-ghost badge-sm">{email}</span>
            </td>
            <td>{price}$</td>

        </tr>

    );
};

export default OrderRow;