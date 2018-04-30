import React from "react";

// import tables

import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table';

class Tables extends React.Component {
    render() {

        let products = [{
            id: 1,
            name: "Product1",
            price: 120
        }, {
            id: 2,
            name: "Product2",
            price: 80
        }, {
            id: 3,
            name: "Product3",
            price: 40
        }, {
            id: 3,
            name: "Product3",
            price: 20
        }];
      

        return (
            <div className="col-sm-9">
            <div className="container">
                <div className="row">
                    <h3 className="text">Tables</h3>
                </div>
                <div className="row bordero">
                    <div className="container mainbox">
                        <BootstrapTable data={ products }>
                            <TableHeaderColumn dataField='id' isKey>Product ID</TableHeaderColumn>
                            <TableHeaderColumn dataField='name'>Product Name</TableHeaderColumn>
                            <TableHeaderColumn dataField='price'>Product Price</TableHeaderColumn>
                        </BootstrapTable>
                    </div>
                </div>
            </div>  
        </div>
        )
    }
}

export default Tables;