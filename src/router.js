import { DONG_AM, DONG_NGHIA, TRAI_NGHIA } from "constant/common"
import MainLayout from "layout"
import ContentComponent from "pages/contentPage"
import { createBrowserRouter } from "react-router-dom"

export const router = createBrowserRouter([
    {
        path: "",
        element: <MainLayout/>,
        children: [
            {
                path:DONG_AM,
                element: <ContentComponent type="sl" />
            },
            {
                path:DONG_NGHIA,
                element: <ContentComponent type="ml" />
            },
            {
                path:TRAI_NGHIA,
                element: <ContentComponent type="sl" />
            },
        ]
    }
])