import "./orderDetails.scss";

function OrderDetails(props : any) {
    const pid=props.data.id;
    const pName = props.data.name;
    const boughtOn= props.data.date;
    const currentStatus = props.data.currentStatus;
    const category = props.data.category;
  return (
    <div className="order-details">
        <div className="upper">
            <div className="pid">
                <h3>
                    Id: {pid}
                </h3>
            </div>   
            <div className="p-name">
                <h3>
                    Name: {pName}
                </h3>
            </div> 
            <div className="bought-date">
                <h3>
                    Bought on: {boughtOn}
                </h3>    
                
            </div>
        </div>
        <div className="lower">
        <div className="status">
                <h3>
                    Status: pending
                </h3>
                
            </div>   
            <div className="ctg">
                <h3>
                    Category: {category}
                </h3>
                
            </div> 
            <div className="view-more">
                <a href="#">View more</a>
            </div>
        </div>
    </div>
  )
}

export default OrderDetails;