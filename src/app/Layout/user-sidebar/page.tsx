import React from "react";

const AddSectionModal = () => {
    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
            <div className="bg-white rounded-2xl p-6 w-[800px]">

                <div className="flex justify-between items-center mb-6">
                    <h2 className="text-2xl font-bold">Add a new section</h2>
                    <button className="text-gray-500 text-xl">&times;</button>
                </div>

                <p className="text-gray-600 mb-6">Click on a section to add it to your resume</p>

                <div className="flex space-x-4">
                    {/* Summary Card */}
                    <div className="group hover:bg-gray-600 relative w-64 h-40 bg-gray-200 rounded-xl p-4 flex flex-col justify-between hover:bg-opacity-80 transition-all cursor-pointer">
                        <div>
                            <h3 className="font-bold">SUMMARY</h3>
                            <p className="text-sm text-gray-600 mt-2">When I was 21, I climbed Mount Everest. Not metaphorically, I literally climbed the highest mountain on Earth...</p>
                        </div>
                        <button className="absolute inset-12 bg-purple-700 bg-opacity-80 text-white text-center py-2 rounded-xl opacity-0 group-hover:opacity-100 transition-all">Add to resume</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AddSectionModal;