import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';
import OrderRow from './OrderRow';

const Orders = () => {
    const { user, logOut } = useContext(AuthContext)

    const [orders, setOrders] = useState([])
    console.log(orders)


    useEffect(() => {
        fetch(`https://dadu-vai-server.vercel.app/orders?email=${user?.email}`, {
            headers: {
                authorization: `Bearer ${localStorage.getItem('token')}`
            }
        })
            .then(res => {
                if (res.status === 401 || res.status === 403) {
                    logOut()
                }
                return res.json()
            })
            .then(data => {
                setOrders(data)
            })
    }, [user?.email])

    const handleDelete = id => {
        const proceed = window.confirm('Are you sure to delete this service?');
        if (proceed) {
            fetch(`https://dadu-vai-server.vercel.app/orders/${id}`, {
                method: 'DELETE',
                headers: {
                    authorization: `Bearer ${localStorage.getItem('token')}`
                }
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data)
                    if (data.deletedCount > 0) {
                        alert('Successfully Deleted')
                        const remaining = orders.filter(odr => odr._id !== id);
                        setOrders(remaining)
                    }
                })
        }
    }
    return (
        <div>
            <h2 className='text-red-400'>You have {orders.length} orders</h2>
            <div className="overflow-x-auto">
                <div className="overflow-x-auto">
                    <table className="table">
                        {/* head */}

                        <thead>
                            <tr>
                                <th>
                                    <label>
                                        <input type="checkbox" className="checkbox" />
                                    </label>
                                </th>

                                <th>Name</th>
                                <th>Service Name</th>
                                <th>Price</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                orders.map(order => <OrderRow
                                    key={order._id}
                                    order={order}
                                    handleDelete={handleDelete}
                                ></OrderRow>)
                            }
                        </tbody>


                    </table>
                </div>
            </div>
        </div>
    );
};

export default Orders;