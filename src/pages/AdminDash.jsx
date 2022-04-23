const AdminDash = (props) => {
    return (
        <div>
            <section className="mx-3 mb-6">
                <h3 className="text-xl font-bold text-center">Sellers to be Approved</h3>
                <div className="flex justify-center">
                    <ul className="bg-white rounded-lg border border-gray-200 w-96 text-gray-900">
                        <li className="px-6 py-2 border-b border-gray-200 w-full rounded-t-lg">An item</li>
                        <li className="px-6 py-2 border-b border-gray-200 w-full">A second item</li>
                        <li className="px-6 py-2 border-b border-gray-200 w-full">A third item</li>
                        <li className="px-6 py-2 border-b border-gray-200 w-full">A fourth item</li>
                        <li className="px-6 py-2 w-full rounded-b-lg">And a fifth one</li>
                    </ul>
                </div>
            </section>
            <section className="mx-3">
                <h3 className="text-xl font-bold text-center">Reviews to be Approved</h3>
                <div className="flex justify-center">
                    <ul className="bg-white rounded-lg border border-gray-200 w-96 text-gray-900">
                        <li className="px-6 py-2 border-b border-gray-200 w-full rounded-t-lg">An item</li>
                        <li className="px-6 py-2 border-b border-gray-200 w-full">A second item</li>
                        <li className="px-6 py-2 border-b border-gray-200 w-full">A third item</li>
                        <li className="px-6 py-2 border-b border-gray-200 w-full">A fourth item</li>
                        <li className="px-6 py-2 w-full rounded-b-lg">And a fifth one</li>
                    </ul>
                </div>
            </section>
        </div>
    )
}

export default AdminDash