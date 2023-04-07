import React from 'react';
import { useParams } from 'react-router-dom';

export default function CourseDetailByTypeAndId() {
    let params = useParams();
    return (
        <div>
            <h2>Xem chi tiết khóa học theo loại khóa học và mã khóa học</h2>
            <p>Mã loại khóa học: {params.courseType} - Mã khóa học: {params.courseId}</p>
        </div>
    )
}
