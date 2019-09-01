import React, { Component } from "react";

class DataTable extends Component {
  constructor(props) {
    super(props);
    this.state = {
      body: props.body,
      head: props.head,
      key: props.index
    };
  }

  render() {
    const { head, key, body } = this.state;
    return (
      <React.Fragment>
        <style
          dangerouslySetInnerHTML={{
            __html: `a {
              margin: 0px;
              transition: all 0.4s;
              -webkit-transition: all 0.4s;
              -o-transition: all 0.4s;
              -moz-transition: all 0.4s;
            }
            
            a:focus {
              outline: none !important;
            }
            
            a:hover {
              text-decoration: none;
            }
            
            h1,
            h2,
            h3,
            h4,
            h5,
            h6 {
              margin: 0px;
            }
            
            p {
              margin: 0px;
            }
            
            ul,
            li {
              margin: 0px;
              list-style-type: none;
            }
            
            input {
              display: block;
              outline: none;
              border: none !important;
            }
            
            textarea {
              display: block;
              outline: none;
            }
            
            textarea:focus,
            input:focus {
              border-color: transparent !important;
            }
            
            button {
              outline: none !important;
              border: none;
              background: transparent;
            }
            
            button:hover {
              cursor: pointer;
            }
            
            iframe {
              border: none !important;
            }
            
            .limiter {
              width: 100%;
              margin: 0 auto;
            }
            
            .container-table100 {
              width: 100%;
              min-height: 100vh;
              background: #d1d1d1;
            
              display: -webkit-box;
              display: -webkit-flex;
              display: -moz-box;
              display: -ms-flexbox;
              display: flex;
              align-items: center;
              justify-content: center;
              flex-wrap: wrap;
              padding: 33px 30px;
            }
            
            .wrap-table100 {
              width: 1300px;
            }
           
            table {
              width: 100%;
              background-color: #fff;
            }
            
            th,
            td {
              font-weight: unset;
              padding-right: 10px;
            }
            
            .column100 {
              width: 130px;
              padding-left: 25px;
            }
            
            
            
            .row100.head th {
              padding-top: 24px;
              padding-bottom: 20px;
            }
            
            .row100 td {
              padding-top: 18px;
              padding-bottom: 14px;
            }
         
            .table100.ver4 td {
              font-family: Montserrat-Regular;
              font-size: 14px;
              color: #808080;
              line-height: 1.4;
            }
            
            .table100.ver4 th {
              font-family: Montserrat-Medium;
              font-size: 12px;
              color: #fff;
              line-height: 1.4;
              text-transform: uppercase;
            
              background-color: #fa4251;
            }
            
            .table100.ver4 .row100:hover td {
              color: #fa4251;
            }
            
            .table100.ver4 .hov-column-ver4 {
              background-color: #ffebed;
            }
            
            .table100.ver4 .hov-column-head-ver4 {
              background-color: #f95462 !important;
            }
            
            .table100.ver4 .row100 td:hover {
              background-color: #ffebed;
              color: #fa4251;
            }
            `
          }}
        ></style>

        <div className="table100 ver4 m-b-110">
          <table data-vertable="ver4">
            <thead>
              <tr className="row100 head">
                {head.map((h, index) => {
                  let classText = `column100 column${index}`;
                  return (
                    <th key={h} className={classText}>
                      {h || "Action"}
                    </th>
                  );
                })}
              </tr>
            </thead>
            <tbody>
              {body.map((b, index) => {
                return (
                  <tr className="row100" key={index}>
                    {key.map((k, index) => {
                      if (b.hasOwnProperty(k)) {
                        let classText = `column100 column${index + 1}`;
                        if (typeof b[k] === "function") {
                          return (
                            <td key={k + index} className={classText}>
                              {b[k]()}
                            </td>
                          );
                        } else {
                          return (
                            <td key={k + index} className={classText}>
                              {b[k]}
                            </td>
                          );
                        }
                      }
                    })}
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </React.Fragment>
    );
  }
}

export default DataTable;
