"use client"

import { Button } from "@mui/joy"
import { useDispatch, useSelector } from "react-redux"
import { remove } from "@/redux/slices/DrrSlices"

const ShowData = ({ data, ind }) => {

    const dispatch = useDispatch();
    //object destructuring
    const { startDate, endDate, excludedDates, leadCount, numberOfDays, expectedDrr, time } = data;

    const date = new Date(startDate);
    const end = new Date(endDate);
    const excluded = excludedDates.map(date => date.toLocaleDateString());

    const month = startDate.getMonth();
    const year = startDate.getFullYear();

    const removeData = () => {
        dispatch(remove(ind))
    }

    return (
        <>
            <tr className="dataShown">
                <td>
                    <Button className="btn" color="danger" onClick={() => removeData()} size="md" variant="solid">Delete </Button>
                </td>
                <td>{ind + 1}</td>
                <td> {date.toLocaleDateString()} </td>
                <td>{end.toLocaleDateString()}</td>
                <td> {month + 1}, {year} </td>
                <td className="text-red-600">{excluded.join(", ")}</td>
                <td>{numberOfDays}</td>
                <td>{leadCount}</td>
                <td>{expectedDrr}</td>
                <td>{time}</td>
            </tr>
        </>
    )
}
export default ShowData