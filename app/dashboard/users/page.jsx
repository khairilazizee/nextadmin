import Button from '@/app/ui/button/button'
import Search from '@/app/ui/search/search'
import { supabase } from '@/supabase'
import React from 'react'

const formatDate = (timestamp) => {
    const date = new Date(timestamp);
    // Use Intl.DateTimeFormat to format the date
    const formattedDate = new Intl.DateTimeFormat('en-UK', {
        year: 'numeric',
        month: 'numeric',
        day: 'numeric',
    }).format(date);

    return formattedDate;
};


async function getTeachers() {

    let { data: teachers } = await supabase
        .from('teachers')
        .select('*')

    return teachers
}

const Users = async () => {

    const dataTeachers = await getTeachers();

    // console.log(data)

    return (
        <div className="flex gap-5 mt-5">
            <div className="bg-[color:var(--bgSoft)] p-5 rounded-xl w-full">
                <div className="flex items-center justify-between">
                    <Search placeholder="Search for a user" />
                    <Button title="Add Teacher" />
                </div>
                <table>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>ID No.</th>
                            <th>Email</th>
                            <th>Created At</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {dataTeachers.map((teach, index) => (
                            <tr key={index}>
                                <td>{teach.name}</td>
                                <td>{teach.ic_no}</td>
                                <td>{teach.email}</td>
                                <td>{formatDate(teach.created_at)}</td>
                                <td></td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    )
}


export default Users