import React from 'react';
import { useLocation, useSearchParams } from 'react-router-dom';

export default function Courses() {
    // Lấy dữ liệu từ navigate chuyển sang từ trang home
    let dataRecieve = useLocation();
    //Khai báo các searchParam
    let [searchParams, setSearchParams] = useSearchParams();

    return (
        <div>
            <h2>Courses - {dataRecieve.state ? dataRecieve.state.company : ''} - {dataRecieve.state ? dataRecieve.state.courseType : ''}</h2>
            <table border='1'>
                <thead>
                    <tr>
                        <th>STT</th>
                        <th>Course Name</th>
                        <th>Time</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>1</td>
                        <td>Java Fullstack</td>
                        <td>1200</td>
                        <td>
                            <button onClick={() => setSearchParams({ courseName: 'Java Fullstack', time: 1200 })}>Detail</button>
                        </td>
                    </tr>
                    <tr>
                        <td>2</td>
                        <td>Javascript Fullstack</td>
                        <td>1000</td>
                        <td>
                            <button onClick={() => setSearchParams({ courseName: 'Javascript Fullstack', time: 1000 })}>Detail</button>
                        </td>
                    </tr>
                </tbody>
            </table>
            <h3>Chi tiết khóa học</h3>
            <p>
                Tên khóa học: {searchParams.get('courseName')} - Thời gian học: {searchParams.get('time')}
            </p>
        </div>
    )
}
