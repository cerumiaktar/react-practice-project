

const Bookmark = ({bookmark}) => {
    const {title} = bookmark;
    return (
        <div>
            <h3 className="bg-white mb-4 p-2 rounded">{title}</h3>
        </div>
    );
};

export default Bookmark;