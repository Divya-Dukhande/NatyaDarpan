// import { Outlet } from "react-router-dom";
// import AdminHeader from "./Header";


// function AuthLayout() {
//     return (
//         <div className="flex min-h-screen w-full">
//             <div className="hidden lg-flex items-center justify-center bg-gradient-to-r from-yellow-300 via-yellow-400 to-yellow-300 w-1/2 px-12 ">
//                 <div className="max-w-md space-y-6 text-center text-primary-foreground">
//                     <h1 className="text-4xl-font-extrabold tracking-tight">
//                         Welcome to Ecommerce shopping
//                     </h1>
//                 </div>
//             </div>
//             <div className="flex flex-1 items-center justify-center px-4 py-12 sm:px-6-1 lg:px-8">
//                 <Outlet />
//             </div>
//         </div>
//     );

// }

// export default AuthLayout;


 
function AdminLayout() {
    return (
        <div className="flex min-h-screen w-full">
            {/*admin sidebar*/}
            <AdminSideBar />
            <div className="flex flex-1 flex-col">
                {/* admin Header*/}
                <AdminHeader />
                <main className="flex flex-1 bg-muted/40 p-4 md:6">
                    <outlet />
                </main>
            </div>
        </div>
    );
}

export default AdminLayout;