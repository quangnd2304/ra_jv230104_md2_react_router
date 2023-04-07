import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function Home() {
    const navigate = useNavigate();
    return (
        <div>
            Home
            {/* Cách 1: useNavigate(link): chuyển đến 1 trang khác */}
            <button onClick={() => navigate('courses')}>Go to Course</button>
            {/* Cách 2: Sử dụng history của html5 */}
            <button onClick={() => navigate(-1)}>Back 1 page</button>
            <button onClick={() => navigate(-2)}>Back 2 pages</button>
            <button onClick={() => navigate(1)}>Forward 1 page</button>
            <button onClick={() => navigate(2)}>Forward 2 page</button>
            {/* Cách 3: sử dụng thuộc tính replace = true */}
            <button onClick={() => navigate('courses', { replace: true })}>Go to Course với replace=true</button>
            {/* Cách 4: Chuyển sang URL mới với dữ liệu kèm theo */}
            <button onClick={() => navigate('courses', { state: { courseType: 'Partime', company: 'Rikkei Academy' } })}>Go to Course with data</button>
        </div>
    )
}
