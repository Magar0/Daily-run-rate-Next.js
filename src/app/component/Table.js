"use client"

import { useState } from 'react'
import AddData from './AddData'
import ShowData from './ShowData'
import { useDispatch, useSelector } from "react-redux"
import { Button } from '@mui/joy'
import { deleteAllDrr } from '@/redux/slices/DrrSlices'
import { AiOutlineStop } from "react-icons/ai";


const Table = () => {

    const [showAddBox, setShowAddBox] = useState(false)
    const dispatch = useDispatch()
    const data = useSelector((state) => {
        return state.drr
    })

    return (
        <>
            <div className='mb-[30px]'>
                <Button className="btn m-5" color="success" onClick={() => setShowAddBox(!showAddBox)} variant="solid">Add New + </Button>

                <table className='table-auto w-full px-4 bg-green-100  '>
                    <thead >
                        <tr className='border  border-black'>
                            <th>Action</th>
                            <th>ID</th>
                            <th>Start Date</th>
                            <th>End Date</th>
                            <th>Month, Year</th>
                            <th>Dates Excluded</th>
                            <th>No. Of Days</th>
                            <th>Lead Count</th>
                            <th>Expected DRR</th>
                            <th>Last Updated</th>
                        </tr>
                    </thead>

                    <tbody>
                        {showAddBox && <AddData showAddBox={setShowAddBox} />}

                        {data.map((ele, ind) => {
                            return <ShowData key={ind} data={ele} ind={ind} />
                        })
                        }

                    </tbody>
                </table>
                <Button className="btn m-5 float-right" color="danger" onClick={() => dispatch(deleteAllDrr())} variant="solid"> <AiOutlineStop />  Delete All </Button>
            </div>
        </>
    )
}

export default Table;