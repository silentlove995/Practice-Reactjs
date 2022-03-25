import Dashboard from "./views/pages/dashboard/Dashboard";
import {
    DesktopOutlined,
    PieChartOutlined,
    FileOutlined,
    TeamOutlined,
    UserOutlined,
} from '@ant-design/icons';

const routers = [
    {
        path: "/dashboard",
        title: "Dashboard",
        icon: <PieChartOutlined/>,
        component: <Dashboard/>,
        children: [],
    },
    {
        path: "/student",
        title: "Students",
        icon: <UserOutlined/>,
        component: "",
        children: [
            {
                path: "/create-student",
                title: "Create Student",
                icon: "",
                component: <div>Create Student</div>,
                children: []
            },
            {
                path: "/students",
                title: "Create Student",
                icon: "",
                component: <div>List Student</div>,
                children: []
            },
        ]
    },
]
export default routers;