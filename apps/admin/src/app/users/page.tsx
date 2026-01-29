import React from 'react'
import { columns,User } from "./columns"
import { DataTable } from "./data-table"

const getData = async (): Promise<User[]> => {
  // Simulate an async operation (e.g., API cal
  
  return [
    {
    id: "u1",
    avatar: "https://picsum.photos/seed/user1/200/200",
    status: "active",
    fullName: "Atif Shafique",
    email: "atif.shafique@example.com",
  },
  {
    id: "u2",
    avatar: "https://picsum.photos/seed/user2/200/200",
    status: "inactive",
    fullName: "Aisha Khan",
    email: "aisha.khan@example.com",
  },
  {
    id: "u3",
    avatar: "https://picsum.photos/seed/user3/200/200",
    status: "active",
    fullName: "Omar Farooq",
    email: "omar.farooq@example.com",
  },
  {
    id: "u4",
    avatar: "https://picsum.photos/seed/user4/200/200",
    status: "active",
    fullName: "Sarah Ahmed",
    email: "sarah.ahmed@example.com",
  },
  {
    id: "u5",
    avatar: "https://picsum.photos/seed/user5/200/200",
    status: "inactive",
    fullName: "Bilal Hussain",
    email: "bilal.hussain@example.com",
  },
  {
    id: "u6",
    avatar: "https://picsum.photos/seed/user6/200/200",
    status: "active",
    fullName: "Fatima Noor",
    email: "fatima.noor@example.com",
  },
  {
    id: "u7",
    avatar: "https://picsum.photos/seed/user7/200/200",
    status: "active",
    fullName: "Daniel Wong",
    email: "daniel.wong@example.com",
  },
  {
    id: "u8",
    avatar: "https://picsum.photos/seed/user8/200/200",
    status: "inactive",
    fullName: "Li Wei",
    email: "li.wei@example.com",
  },
  {
    id: "u9",
    avatar: "https://picsum.photos/seed/user9/200/200",
    status: "active",
    fullName: "Hassan Raza",
    email: "hassan.raza@example.com",
  },
  {
    id: "u10",
    avatar: "https://picsum.photos/seed/user10/200/200",
    status: "active",
    fullName: "Mariam Ali",
    email: "mariam.ali@example.com",
  },
  {
    id: "u11",
    avatar: "https://picsum.photos/seed/user11/200/200",
    status: "inactive",
    fullName: "James Carter",
    email: "james.carter@example.com",
  },
  {
    id: "u12",
    avatar: "https://picsum.photos/seed/user12/200/200",
    status: "active",
    fullName: "Emily Stone",
    email: "emily.stone@example.com",
  },
  {
    id: "u13",
    avatar: "https://picsum.photos/seed/user13/200/200",
    status: "active",
    fullName: "Yusuf Ibrahim",
    email: "yusuf.ibrahim@example.com",
  },
  {
    id: "u14",
    avatar: "https://picsum.photos/seed/user14/200/200",
    status: "inactive",
    fullName: "Noor Zain",
    email: "noor.zain@example.com",
  },
  {
    id: "u15",
    avatar: "https://picsum.photos/seed/user15/200/200",
    status: "active",
    fullName: "Ahmed Saeed",
    email: "ahmed.saeed@example.com",
  },
  {
    id: "u16",
    avatar: "https://picsum.photos/seed/user16/200/200",
    status: "active",
    fullName: "Sophia Martinez",
    email: "sophia.martinez@example.com",
  },
  {
    id: "u17",
    avatar: "https://picsum.photos/seed/user17/200/200",
    status: "inactive",
    fullName: "Lucas Brown",
    email: "lucas.brown@example.com",
  },
  {
    id: "u18",
    avatar: "https://picsum.photos/seed/user18/200/200",
    status: "active",
    fullName: "Zara Mahmood",
    email: "zara.mahmood@example.com",
  },
  {
    id: "u19",
    avatar: "https://picsum.photos/seed/user19/200/200",
    status: "active",
    fullName: "Adnan Malik",
    email: "adnan.malik@example.com",
  },
  {
    id: "u20",
    avatar: "https://picsum.photos/seed/user20/200/200",
    status: "inactive",
    fullName: "Hina Siddiqui",
    email: "hina.siddiqui@example.com",
  },
  ];
};


const UsersPage = async () => {

    const data = await getData()

  return (
    <div>
      <div className='mb-8 px-4 py-2 bg-secondary rounded-md'>
            <h1 className='font-semibold'>All Users</h1>
      </div>
       <DataTable columns={columns} data={data} />
    </div>
  )
}

export default UsersPage
