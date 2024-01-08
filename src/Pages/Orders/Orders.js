import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';
import OrderRow from './OrderRow';

const Orders = () => {
    const { user } = useContext(AuthContext)

    const [orders, setOrders] = useState([])
    console.log(orders)


    useEffect(() => {
        fetch(`http://localhost:5000/orders?email=${user?.email}`)
            .then(res => res.json())
            .then(data => setOrders(data))
    }, [user?.email])

    const handleDelete = id => {
        const proceed = window.confirm('Are you sure to delete this service?');
        if (proceed) {
            fetch(`http://localhost:5000/orders/${id}`, {
                method: 'DELETE'
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
            <h2>{orders.length}</h2>
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