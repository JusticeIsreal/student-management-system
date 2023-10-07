import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/admin/Home";
import AddStudents from "./pages/admin/AddStudents";
import Students from "./pages/admin/Students";
import SendMail from "./pages/admin/SendMail";
import AdminApp from "./components/admin/AdminApp";
import TeacherApp from "./components/teachers/TeacherApp";
import TeacherHome from "./pages/teachers/TeacherHome";
import "./styles/style.css";
import "./styles/teacher.css";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<AdminApp />}>
            <Route path="/" index element={<Home />}></Route>
            <Route path="/admin/add-student" element={<AddStudents />}></Route>
            <Route path="/admin/students" element={<Students />}></Route>
            <Route path="/admin/send-mail" element={<SendMail />}></Route>
          </Route>

          <Route path="/teacher" element={<TeacherApp />}>
            <Route path="/teacher" index element={<TeacherHome />}></Route>
          </Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
