import React from "react";
//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";


function CardBox() {
    return (
        <div className="card" style={{ width: "18rem" }}>
            <img src={rigoImage} className="card-img-top" alt="..." />
            <div className="card-body text-center">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam quas eos, delectus quisquam obcaecati.</p>
            </div>
            <div className="card-footer text-center">
                <a href="#" className="btn btn-primary">Find Out More!</a>
            </div>
        </div>
    )
};

export default CardBox;