import React, { Component } from "react";

function TableFiller() {
  return (
    <tr>
      <td colSpan="3" className="filler">
        اذهب لقائمة إدارة المرشحين بالضغط على القائمة بالأعلى ثم أضف مرشحيك
      </td>
    </tr>
  );
}

function TotalVotesRow(props) {
  return (
    <tr>
      <td className="col-center">0</td>
      <td>العدد الكلي</td>
      <td className="col-counter">
        <span className="counter">{props.totalVotes}</span>
      </td>
    </tr>
  );
}

function NomineeRow(props) {
  const { name, index, votes } = props;

  return (
    <tr>
      <td className="col-center">{index}</td>
      <td>{name}</td>
      <td className="col-counter">{votes}</td>
    </tr>
  );
}

class NomineesTable extends Component {

  getNomineesRows() {
    const { nominees, totalVotes } = this.props;

    const nomineesRows = nominees.map((nominee, index) => {
      return (
        <NomineeRow
          key={nominee.id}
          index={index + 1}
          name={nominee.name}
          votes={nominee.votes_count}
        />
      );
    });

    if (nominees.length > 2)
      return (
        <React.Fragment>
        <TotalVotesRow totalVotes={totalVotes} />
        {nomineesRows}
      </React.Fragment>
      );
      
    return <TableFiller />;
  }

  render() {
    return (
      <table className="nominees-table">
        <colgroup>
          <col className="table-index" />
          <col className="table-name" />
          <col className="table-count" />
        </colgroup>
        <thead>
          <tr>
            <th>#</th>
            <th style={{ textAlign: "start" }}>المرشح</th>
            <th>عدد الأصوات</th>
          </tr>
        </thead>
        <tbody>{this.getNomineesRows()}</tbody>
        <tfoot>
          <tr>
            <td colSpan="3"></td>
          </tr>
        </tfoot>
      </table>
    );
  }
}

export default NomineesTable;
