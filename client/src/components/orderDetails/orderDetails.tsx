import './orderDetails.scss';

function OrderDetails(props: any) {
    const pid = props.data.id;
    const pName = props.data.name;
    const boughtOn = props.data.date;
    const currentStatus = props.data.currentStatus;
    const category = props.data.category;
    return (
        <div className="order-details">
            <div className="upper">
                <div className="pid">
                    <h3>Id:</h3>
                    {pid}
                </div>
                <div className="p-name">
                    <h3>Name:</h3>
                    {pName}
                </div>
                <div className="bought-date">
                    <h3>Bought on:</h3>
                    {boughtOn}
                </div>
            </div>
            <div className="lower">
                <div className="status">
                    <h3>Status:</h3>
                    {currentStatus}
                </div>
                <div className="ctg">
                    <h3>Category:</h3>
                    {category}
                </div>
                <div className="view-more">
                    <a href="#">View more</a>
                </div>
            </div>
        </div>
    );
}

export default OrderDetails;
