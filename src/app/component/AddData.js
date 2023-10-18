"use client"

import Button from "@mui/joy/Button"
import { useState } from "react"
import { useDispatch } from "react-redux"
import { addDrr } from "@/redux/slices/DrrSlices"

import DatePicker from "react-multi-date-picker";
import { checkCustomRoutes } from "next/dist/lib/load-custom-routes"

const AddData = ({ showAddBox }) => {

    const [startDate, setStartDate] = useState(new Date())
    const [endDate, setEndDate] = useState(new Date())
    const [excludedDates, setExcludedDates] = useState([])
    const [leadCount, setLeadCount] = useState(0)

    const dispatch = useDispatch();


    const handleStartDate = (date) => {
        setStartDate(date.toDate());
        if (date > endDate) {
            setEndDate(date.toDate())
        }
    }


    const save = () => {
        // storing the data in redux store......
        const time = new Date();
        dispatch(addDrr({
            startDate,
            endDate,
            excludedDates,
            leadCount,
            numberOfDays,
            expectedDrr,
            time: time.toLocaleString([], { hour12: true })
        }))

        // clearing the input field after saving
        setStartDate(new Date()),
            setEndDate(new Date()),
            setExcludedDates([]),
            setLeadCount("")
    }

    const month = startDate.getMonth()
    const year = startDate.getFullYear()
    const range = Math.floor((endDate.getTime() - startDate.getTime()) / (1000 * 60 * 60 * 24));
    const numberOfDays = range - excludedDates.length;
    const number = (leadCount / numberOfDays);
    const expectedDrr = number % 1 === 0 ? number : number.toFixed(2);


    return (
        <>

            <tr className="bg-gray-200   ">
                <td>N/A</td>
                <td>N/A</td>

                <td>
                    <DatePicker value={startDate} onChange={handleStartDate}
                    />

                </td>
                <td>
                    <DatePicker value={endDate} minDate={startDate} onChange={(date) => setEndDate(date.toDate())} />
                </td>

                <td> {month + 1}, {year} </td>

                <td>
                    <DatePicker value={excludedDates} multiple={true} minDate={startDate} maxDate={endDate} onChange={(dates) => setExcludedDates(dates.map(date => date.toDate()))} />
                </td>

                <td> {numberOfDays} </td>

                <td className="w-min">
                    <input className="w-[50px] p-1 " type="number" min={0} id="leadCount" name="leadCount" value={leadCount} onChange={(e) => setLeadCount(e.target.value)} />
                </td>
                <td> {expectedDrr} </td>
                <td className="flex justify-around">
                    <Button type="submit" className="btn" color="success" onClick={() => save()} size="sm" variant="solid">Save </Button>
                    <Button className="btn" color="danger" onClick={() => showAddBox(false)} size="sm" variant="solid">Cancel </Button>
                </td>
            </tr>
        </>
    )
}

export default AddData