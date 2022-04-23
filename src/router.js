import Vacancy from "./pages/Vacancy";
import VacanciesView from "./pages/VacanciesView";


const routes = () => [
    {
        path: '/',
        element: <VacanciesView />,
        children: [
            { path: '/vacancy/:id', element: <Vacancy /> },
            { path: '/vacancy/create', element: <Vacancy /> },
        ],
    },
]

export default routes;