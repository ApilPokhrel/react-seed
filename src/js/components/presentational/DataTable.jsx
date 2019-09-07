import React, { Component } from "react";
import PropTypes from "prop-types";
import Axios from "axios";
class DataTable extends Component {
  constructor(props) {
    super(props);
    this.state = {
      body: props.body,
      head: props.head,
      key: props.index,
      page: 1,
      threshold: props.threshold,
      start: 0,
      end: props.threshold,
      server: props.server,
      url: props.url,
      header: props.header,
      total: props.total
    };
    this.serverLoad = this.serverLoad.bind(this);
  }

  showPagination() {
    let quotient = parseInt(this.state.total / this.state.threshold);
    let reminder = this.state.total - this.state.threshold * quotient;
    // alert(quotient);
    let len = quotient + 1 + 1;
    if (len > 0) len = len - 1;
    if (len <= 20) {
      return (
        <React.Fragment>
          {Array(len)
            .fill(null)
            .map((e, index) => {
              if (index == this.state.page - 1)
                return (
                  <button key={index} className="active">
                    {index + 1}
                  </button>
                );
              else
                return (
                  <button key={index} onClick={() => this.thisPage(index + 1)}>
                    {index + 1}
                  </button>
                );
            })}
        </React.Fragment>
      );
    } else {
      return (
        <React.Fragment>
          {Array(len)
            .fill(null)
            .map((e, index) => {
              if (index == this.state.page - 1)
                return (
                  <button key={index} className="active">
                    {index + 1}
                  </button>
                );
              else
                return (
                  <button key={index} onClick={() => this.thisPage(index + 1)}>
                    {index + 1}
                  </button>
                );
            })}
        </React.Fragment>
      );
    }
  }

  async serverLoad(limit, start) {
    if (this.state.server) {
      this.setState({
        body: []
      });
      let res = await Axios({
        url: this.state.url + "?start=" + start + "&limit=" + limit,
        method: "get",
        headers: {
          "Access-Control-Allow-Origin": "http://localhost:5000/"
        }
      });
      this.setState({
        total: res.data.total,
        body: res.data.data
      });
    }
  }

  async componentWillMount() {
    if (this.state.start < 1) this.serverLoad(this.state.threshold, 0);
  }

  async nextPage() {
    let quotient = parseInt(this.state.total / this.state.threshold);
    let reminder = this.state.total - this.state.threshold * quotient;
    let page = this.state.page + 1;
    let start = this.state.start + this.state.threshold;
    let end = this.state.end + this.state.threshold;
    if (start + reminder <= this.state.total) {
      this.setState({ page, start, end });
      await this.serverLoad(this.state.threshold, start);
    } else {
      this.setState({ page: 1, start: 0, end: this.state.threshold });
      await this.serverLoad(this.state.threshold, 0);
    }
  }

  async thisPage(page) {
    let start = page * this.state.threshold - this.state.threshold;
    let end = start + this.state.threshold;
    // alert(`${page}, ${start}, ${end}`);
    this.setState({ page, start, end });
    await this.serverLoad(this.state.threshold, start);
  }

  previousPage() {
    let page = this.state.page - 1;
    let start = this.state.start - this.state.threshold;
    let end = this.state.end - this.state.threshold;
    if (start <= this.state.threshold) {
      this.setState({ page: 1, start: 0, end: this.state.threshold });
    } else {
      this.setState({ page, start, end });
      this.serverLoad(this.state.threshold, start);
    }
  }

  render() {
    const { head, key, body, start, end, threshold } = this.state;

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
              {body && body.length ? (
                Array.apply(0, Array(threshold)).map((e, i) => {
                  return (
                    <tr className="row100" key={`body_${i}`}>
                      {key.map((k, index) => {
                        if (body[i] && body[i].hasOwnProperty(k)) {
                          let classText = `column100 column${index + 1}`;
                          if (typeof body[i][k] === "function") {
                            return (
                              <td key={"fun" + index + i} className={classText}>
                                {body[i][k]()}
                              </td>
                            );
                          } else {
                            return (
                              <td key={k + index + i} className={classText}>
                                {body[i][k]}
                              </td>
                            );
                          }
                        }
                      })}
                    </tr>
                  );
                })
              ) : (
                <tr>
                  <td>Loading.......</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
        <br />
        <div>
          <style
            dangerouslySetInnerHTML={{
              __html: `.pagination {
  display: inline-block;
  width: 100%
}

.pagination button{
  color: black;
  float: left;
  padding: 5px 16px;
  text-decoration: none;
}

.pagination button.active {
  background-color: #fa4251;
  color: white;
}

.pagination button:hover:not(.active) {background-color: #ddd;}`
            }}
          ></style>
          <div style={{}} className="pagination">
            <button onClick={() => this.previousPage()}>&laquo;</button>
            {this.showPagination()}
            <button onClick={() => this.nextPage()}>&raquo;</button>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

DataTable.propTypes = {
  // body: PropTypes.isRequired,
  // head: PropTypes.isRequired,
  // index: PropTypes.isRequired,
  // limit: PropTypes.number.isRequired
};

export default DataTable;
