const Cardleft = () => {
    return <>
    <div className="bg-white border-2 max-w-60 mt-5 pl-10 ml-10 pb-10 rounded-lg">
    <fieldset>
            <legend className="text-lg font-medium text-gray-900">
                Sắp xếp
            </legend>

            <div className="mt-4 space-y-2">
                <label
                    htmlFor="Option1"
                    className="flex cursor-pointer items-start gap-4"
                >
                    <div className="flex items-center">
                        <input
                            type="checkbox"
                            className="size-4 rounded border-gray-300"
                            id="Option1"
                        />
                    </div>
                    <div>
                        <strong className="font-medium text-gray-900"> Mặc định </strong>
                    </div>
                </label>
                <label
                    htmlFor="Option2"
                    className="flex cursor-pointer items-start gap-4"
                >
                    <div className="flex items-center">
                        <input
                            type="checkbox"
                            className="size-4 rounded border-gray-300"
                            id="Option2"
                        />
                    </div>
                    <div>
                        <strong className="font-medium text-gray-900"> Giờ đi sớm nhất </strong>
                    </div>
                </label>
                <label
                    htmlFor="Option3"
                    className="flex cursor-pointer items-start gap-4"
                >
                    <div className="flex items-center">
                        <input
                            type="checkbox"
                            className="size-4 rounded border-gray-300"
                            id="Option3"
                        />
                    </div>
                    <div>
                        <strong className="font-medium text-gray-900"> Giờ đi muộn nhất </strong>
                    </div>
                </label>
                <label
                    htmlFor="Option3"
                    className="flex cursor-pointer items-start gap-4"
                >
                    <div className="flex items-center">
                        <input
                            type="checkbox"
                            className="size-4 rounded border-gray-300"
                            id="Option3"
                        />
                    </div>
                    <div>
                        <strong className="font-medium text-gray-900"> Đánh giá cao nhất </strong>
                    </div>
                </label>
                <label
                    htmlFor="Option3"
                    className="flex cursor-pointer items-start gap-4"
                >
                    <div className="flex items-center">
                        <input
                            type="checkbox"
                            className="size-4 rounded border-gray-300"
                            id="Option3"
                        />
                    </div>
                    <div>
                        <strong className="font-medium text-gray-900"> Giá tăng dần </strong>
                    </div>
                </label>
                <label
                    htmlFor="Option3"
                    className="flex cursor-pointer items-start gap-4"
                >
                    <div className="flex items-center">
                        <input
                            type="checkbox"
                            className="size-4 rounded border-gray-300"
                            id="Option3"
                        />
                    </div>
                    <div>
                        <strong className="font-medium text-gray-900"> Giá giảm dần </strong>
                    </div>
                </label>
            </div>
        </fieldset>
    </div>
       
    </>

}
export default Cardleft