import React from 'react';
import { useParams } from 'react-router-dom';

export default function CourseDetail() {
    let params = useParams();
    return (
        <div>Chi tiết khóa học theo mã khóa học - {params.courseId} </div>
    )
}
