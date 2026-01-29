import React from 'react'
import { columns, Payment } from "./columns"
import { DataTable } from "./data-table"

const getData = async (): Promise<Payment[]> => {
  // Simulate an async operation (e.g., API cal
  
  return [
    {
      id: "1",
      amount: 250.00,
      status: "success",
      fullName: "john.doe",
      email: "john.doe@example.com",
      userId: "xy-12312312"
    },
    {
      id: "2",
      amount: 150.50,
      status: "pending",
      fullName: "jane.smith",
      email: "jane.smith@example.com",
      userId: "xy-2312"
    },
    {
      id: "3",
      amount: 75.25,
      status: "failed",
      fullName: "alex.jones",
      email: "alex.jones@example.com",
      userId: "xy-23232"
    },
    {
      id: "4",
      amount: 500.00,
      status: "success",
      fullName: "emily.davis",
      email: "emily.davis@example.com",
      userId: "xy-231"
    },
    {
      id: "5",
      amount: 320.75,
      status: "processing",
      fullName: "mike.wilson",
      email: "mike.wilson@example.com",
      userId: "xy-1023"
    },
  ];
};


const PaymentPage = async () => {

    const data = await getData()

  return (
    <div>
      <div className='mb-8 px-4 py-2 bg-secondary rounded-md'>
            <h1 className='font-semibold'>All Payments</h1>
      </div>
       <DataTable columns={columns} data={data} />
    </div>
  )
}

export default PaymentPage
