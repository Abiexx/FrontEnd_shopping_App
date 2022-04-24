import { useEffect, useState } from "react"
import sellerService from "../services/sellerService";
import { useAuth } from "../store/AuthContext";

const AdminDash = (props) => {
    const [sellers, setSellers] = useState([]);
    const {currentUser} = useAuth();

    useEffect(() => {
        sellerService.getAllSellers(currentUser.accessToken)
        .then((res) => {
            console.log(res.data);
            setSellers(res.data);
        });
    }, [])

    return (
        <div>
            <section className="mx-3 mb-6">
                <h3 className="text-xl font-bold text-center">Sellers to be Approved</h3>
                <div className="flex justify-center">
                    <ul className="bg-white rounded-lg border border-gray-200 w-96 text-gray-900">
                        {sellers.map((seller) => {
                            return (
                                <li key={seller.user_id} className="px-6 py-2 border-b border-gray-200 w-full rounded-t-lg">
                                    <span>{seller.f_name} {seller.l_name}</span>
                                    <button>Approve</button>
                                </li>
                            )
                        } )}
                    </ul>
                </div>
            </section>
            <section className="mx-3">
                <h3 className="text-xl font-bold text-center">Reviews to be Approved</h3>
                <div className="flex justify-center">
                    <ul className="bg-white rounded-lg border border-gray-200 w-96 text-gray-900">
                        <li className="px-6 py-2 border-b border-gray-200 w-full rounded-t-lg">Review 1</li>
                        <li className="px-6 py-2 border-b border-gray-200 w-full">Review 2</li>
                        <li className="px-6 py-2 border-b border-gray-200 w-full">Review 3</li>
                        <li className="px-6 py-2 border-b border-gray-200 w-full">Review 4</li>
                    </ul>
                </div>
            </section>
        </div>
    )
}

export default AdminDash