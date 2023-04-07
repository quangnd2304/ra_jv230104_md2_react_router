import logo from './logo.svg';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import { Link, NavLink } from 'react-router-dom';
import Home from './components/Home';
import Abouts from './components/Abouts';
import Courses from './components/Courses';
import RikkeiSoft from './components/RikkeiSoft';
import RikkeiAcademy from './components/RikkeiAcademy';
import AboutIndex from './components/AboutIndex';
import NotFound from './components/NotFound';
import Checkout from './components/Checkout';
import Login from './components/Login';
import CourseDetail from './components/CourseDetail';
import CourseDetailByTypeAndId from './components/CourseDetailByTypeAndId';
import Personal from './components/Personal';
import Account from './components/Account';
import PrivateRouter from './components/PrivateRouter';

function App() {
  // Style cho menu đang được active
  //-menu active: màu chữ là đen, nền là đỏ
  //-menu không active: màu chữ là đỏ, nền là đen
  const activeStyleMenu = ({ isActive }) => ({
    color: isActive ? 'black' : 'red',
    backgroundColor: isActive ? 'red' : 'black'
  })
  return (
    <div>
      {/* Tạo menu ứng dụng web */}
      <nav>
        <ul>
          <li><NavLink style={activeStyleMenu} to='/'>Trang chủ</NavLink></li>
          <li><NavLink style={activeStyleMenu} to='/abouts'>Giới thiệu</NavLink>
            <ul>
              <li><Link to={'abouts/rikkeisoft'}>Về Rikkeisoft</Link></li>
              <li><Link to={'abouts/rikkeiacademy'}>Về RikkeiAcademy</Link></li>
            </ul>
          </li>
          <li><NavLink style={activeStyleMenu} to='/courses'>Khóa học</NavLink></li>
        </ul>
      </nav>
      {/* Định nghĩa các router để ánh xạ 1 URL với 1 Component */}
      <Routes>
        {/* Ánh xạ đường dẫn gôc localhost:3000 với component Home.jsx */}
        <Route path='/' element={<Home />} />
        <Route path='/abouts' element={<Abouts />}>
          {/* Route index */}
          <Route index element={<AboutIndex />} />
          {/* Nested Route */}
          <Route path='rikkeisoft' element={<RikkeiSoft />} />
          <Route path='rikkeiacademy' element={<RikkeiAcademy />} />
        </Route>
        <Route path='/courses' element={<Courses />} />
        <Route path='/checkOut' element={<Checkout />} />
        <Route path='/login' element={<Login />} />
        <Route path='/course/:courseId' element={<CourseDetail />} />
        <Route path='/course/:courseType/:courseId' element={<CourseDetailByTypeAndId />} />
        <Route element={<PrivateRouter />}>
          <Route path='/personal' element={<Personal />} />
          <Route path='/account' element={<Account />} />
        </Route>
        <Route path='*' element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
