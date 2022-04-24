import { useEffect, useState } from "react"
import sellerService from "../services/sellerService";
import buyerService from "../services/buyerService";
import { useAuth } from "../store/AuthContext";

const AdminDash = (props) => {
    const [sellers, setSellers] = useState([]);
    const [buyers, setBuyers] = useState([]);
    const {currentUser} = useAuth();

    useEffect(() => {
        sellerService.getAllSellers(currentUser.accessToken)
        .then((res) => {
            setSellers(res.data);
        }).catch((err) => console.log(err.message));

        buyerService.getAllBuyers(currentUser.accessToken)
        .then((res) => {
            setBuyers(res.data);
        }).catch((err) => console.log(err.message));
    }, [])

    return (
        <div className="flex flex-col min-h-screen">
            <section className="mx-3 mb-6">
                <h3 className="text-xl font-bold text-center">Sellers to be Approved</h3>
                <div className="flex justify-center">
                    <ul className="bg-white rounded-lg border border-gray-200 w-96 text-gray-900">
                        {sellers.map((seller) => {
                            return (
                                <li key={seller.user_id} className="px-6 py-2 border-b border-gray-200 w-full rounded-t-lg">
                                    <span className="mr-3">{seller.user_name}</span>
                                    <button className="inline-block px-6 py-2 border-2 border-green-500 text-green-500 font-medium text-xs leading-tight uppercase rounded hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out">Approve</button>
                                </li>
                            )
                        } )}
                    </ul>
                </div>
            </section>
            <section className="mx-3">
                <h3 className="text-xl font-bold text-center">Buyer Reviews to be Approved</h3>
                <div className="flex justify-center">
                    <ul className="bg-white rounded-lg border border-gray-200 w-96 text-gray-900">
                        {buyers.map((buyer) => {
                            return (
                                <li key={buyer.user_id} className="px-6 py-2 border-b border-gray-200 w-full rounded-t-lg">
                                    <span className="mr-3">{buyer.user_name}</span>
                                    <button className="inline-block px-6 py-2 border-2 border-green-500 text-green-500 font-medium text-xs leading-tight uppercase rounded hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out">Approve</button>
                                </li>
                            )
                        } )}
                    </ul>
                </div>
            </section>
        </div>
    )
}

export default AdminDash