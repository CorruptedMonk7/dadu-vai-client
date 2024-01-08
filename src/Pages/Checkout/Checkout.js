import React, { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';

const Checkout = () => {
    const { _id, name, price } = useLoaderData();
    const { user } = useContext(AuthContext)

    const handlePlaceOrder = event => {
        event.preventDefault();
        const form = event.target;
        const name2 = `${form.firstName.value} ${form.lastName.value}`;
        const email = user?.email || 'unregistered';
        const phone = form.phone.value;

        const order = {
            service: _id,
            serviceName: name,
            price,
            customer: name2,
            phone,
            email

        }

        // if(phone.length > 10){
        //     alert('Phone number should be 10 characters')
        // }

        fetch('http://localhost:5000/orders', {
            method: "POST",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(order)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.acknowledged) {
                    alert('Order Placed')
                    form.reset();

                }
            })
            .catch(err => console.error(err))
    }

    return (
        <form onSubmit={handlePlaceOrder}>
            <h2 className='text-4xl'>You are about to order:{name}</h2>
            <h4 className='text-2xl text-red-400'>Price: {price}</h4>
            <div className='grid grid-cols-1 lg:grid-cols-2 gap-4 m-4'>
                <input name="firstName" type="text" placeholder="First Name" className="input input-bordered w-full" />
                <input name="lastName" type="text" placeholder="Last Name" className="input input-bordered w-full" />
                <input name="phone" type="text" placeholder="Phone Number" className="input input-bordered w-full" />
                <input name="email" type="text" placeholder="Email" defaultValue={user?.email} readOnly className="input input-bordered w-full" />
            </div>
            <input className='btn mx-auto m-4' type="submit" value="Place your order" />
        </form>
    );
};

export default Checkout;