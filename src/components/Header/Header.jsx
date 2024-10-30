import { FaUserCircle } from "react-icons/fa";

const Header = () => {
    return (
        <div className="flex justify-between items-center max-w-7xl mx-auto p-4 border-b-2 border-red-100">
            <h1 className="text-2xl font-medium text-red-700">Autum</h1>
            <p className="text-2xl"><FaUserCircle /></p>
        </div>
    );
};

export default Header;