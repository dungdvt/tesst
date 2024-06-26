import { Link, Outlet } from "react-router-dom"

const AdminLayout = () => {
    return <div>
        <header>
            <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
                <div className="sm:flex sm:items-center sm:justify-between">
                    <div className="flex text-center sm:text-left">
                        <img className="" src="/Rectangle 28.png" alt="" />

                        <h1 className="text-3xl">Vexere</h1>
                    </div>
                    <div>
                        <input className="border-2 rounded-md w-80 h-10 " type="text" placeholder="search"/>
                    </div>
                    <div className="mt-4 flex flex-col gap-4 sm:mt-0 sm:flex-row sm:items-center">
                        <button
                            className="inline-flex items-center justify-center gap-1.5 rounded-lg border border-gray-200 px-5 py-3 text-gray-500 transition hover:bg-gray-50 hover:text-gray-700 focus:outline-none focus:ring"
                            type="button"
                        >
                            <span className="text-sm font-medium"> View Website </span>

                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-4 w-4"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                stroke-width="2"
                            >
                                <path
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                                />
                            </svg>
                        </button>

                        <button
                            className="block rounded-lg bg-indigo-600 px-5 py-3 text-sm font-medium text-white transition hover:bg-indigo-700 focus:outline-none focus:ring"
                            type="button"
                        >
                            Logout
                        </button>
                    </div>
                </div>
            </div>
        </header>
        {/* Sidebar */}
        <div className="flex gap-4">
            <div className="flex h-screen flex-col justify-between border-e bg-white">
                <div className="px-4 py-6">
                    <ul className="mt-6 space-y-1">
                        <li>
                            <a
                                href="#"
                                className="block rounded-lg bg-gray-100 px-4 py-2 text-sm font-medium text-gray-700"
                            >
                                Dashboard
                            </a>
                        </li>


                        <li>
                            <a
                                href="#"
                                className="block rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700"
                            >
                                Lịch sử chuyến xe
                            </a>
                        </li>

                        <li>
                            <Link
                                to="/admin"
                                className="block rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700"
                            >
                                Chuyến xe
                            </Link>
                        </li>
                        <li>
                            <a
                                href="#"
                                className="block rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700"
                            >
                                Nhà xe
                            </a>
                        </li>
                    </ul>
                </div>

                
            </div>
            <div className="grow">
                {/* <h1 className="text-2xl">Dashboard</h1> */}
                <Outlet />
            </div>
        </div>

    </div>
}

export default AdminLayout