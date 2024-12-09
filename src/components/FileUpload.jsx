import { useState } from "react";
import { IoDocuments } from "react-icons/io5";
import { CiFileOn } from "react-icons/ci";

const FileUpload = ({data,info}) => {
    const [dragActive, setDragActive] = useState(false);
    const [file, setFile] = useState(null);

    const handleDrag = (e) => {
        e.preventDefault();
        e.stopPropagation();
        if (e.type === "dragenter" || e.type === "dragover") {
          setDragActive(true);
        } else if (e.type === "dragleave") {
          setDragActive(false);
        }
      };
    
      const handleDrop = (e) => {
        e.preventDefault();
        e.stopPropagation();
        const uploadedFile = e.dataTransfer.files[0];
        if (uploadedFile) {
          setFile(uploadedFile);
        }
      };
      const handleFileChange = (e) => {
        const selectedFile = e.target.files[0];
        if (selectedFile) {
          setFile(selectedFile);
        }
      };
      const fileremoveHandler = () => {
        setFile(null)
        setDragActive(false)
      }
    return (
        <div className="col-span-2">
              <label className="block text-sm font-medium text-gray-700 mb-[6px]">
                {data}
                <span className="text-red-500">*</span>
              </label>
              <p className="text-[13px] text-gray-500 mb-4">
                {info}
              </p>
              <div
                className={`relative border-2 border-dashed rounded-lg p-6 text-center transition h-52 flex flex-col items-center justify-center ${
                  dragActive
                    ? "border-indigo-200 bg-indigo-50"
                    : "border-gray-200 bg-white"
                }`}
                onDragEnter={handleDrag}
                onDragOver={handleDrag}
                onDragLeave={handleDrag}
                onDrop={handleDrop}
              >
                {file ? (
                  <div className="mt-2 relative text-sm text-gray-700 flex flex-col items-center gap-2">
                    <button
                      onClick={fileremoveHandler}
                      className="absolute top-[-2px] left-[2px] flex items-center justify-center w-4 h-4 bg-gray-800 text-white rounded-full cursor-pointer hover:bg-gray-600"
                    >
                      <span className="text-xs">X</span>
                    </button>

                      <CiFileOn size={48} className="text-gray-600" />

                      <p className="text-gray-700 font-semibold absolute top-16">{file.name}</p>

                  </div>
                ) : (
                  <>
                    {" "}
                    <span className="h-12 w-12 bg-gray-100 rounded-full flex items-center justify-center">
                      <IoDocuments size={24} />
                    </span>
                    <div className="flex items-center gap-2 mt-4">
                      <label
                        htmlFor="incorporate"
                        className="cursor-pointer underline"
                      >
                        Click to upload
                      </label>
                      <span className="text-gray-500">or drag and drop</span>
                    </div>
                    <p className="text-gray-500">Maximum file size 50 MB</p>
                    <input
                      type="file"
                      id="incorporate"
                      className="opacity-0"
                      onChange={handleFileChange}
                    />
                  </>
                )}
              </div>
            </div>
    )
}

export default FileUpload;