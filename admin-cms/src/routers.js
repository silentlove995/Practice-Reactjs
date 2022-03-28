import Dashboard from "./views/pages/dashboard/Dashboard";
import {
    DesktopOutlined,
    PieChartOutlined,
    FileOutlined,
    TeamOutlined,
    UserOutlined,
} from '@ant-design/icons';
import Page404 from "./views/pages/page404/Page404";

const routers = [
    {
        path: "/dashboard",
        title: "Dashboard",
        icon: <PieChartOutlined/>,
        component: <Dashboard/>,
        children: [],
    },
    // {
    //     path: "/page404",
    //     title: "Page 404",
    //     icon: <PieChartOutlined/>,
    //     component: <Page404/>,
    //     children: [],
    // },
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
                title: "List Student",
                icon: "",
                component: <div>List Student</div>,
                children: []
            },
        ]
    },
]
export default routers;