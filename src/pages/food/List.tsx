import { useMemo } from "react";
import { useTable } from "react-table";
import "./Table.css"; // Assuming custom styling
import { Button, Card, Col, Row } from "react-bootstrap";
import PageBreadcrumb from "../../components/PageBreadcrumb";
import { BsPlus } from "react-icons/bs";
import { theme } from "../../constants/theme";

const List = () => {
  const data = useMemo(
    () => [
      {
        product: "Donnell",
        sku: "SKU-4223",
        price: 931,
        rating: 8,
        status: "Pending",
      },
      {
        product: "Gothart",
        sku: "SKU-9040",
        price: 830,
        rating: 5.5,
        status: "Draft",
      },
      {
        product: "Emlynn",
        sku: "SKU-8795",
        price: 944,
        rating: 4,
        status: "Publish",
      },
      {
        product: "Adams",
        sku: "SKU-7924",
        price: 480,
        rating: 3.3,
        status: "Publish",
      },
      {
        product: "Myrwyn",
        sku: "SKU-2510",
        price: 496,
        rating: 5.7,
        status: "Pending",
      },
      {
        product: "Blanca",
        sku: "SKU-3849",
        price: 258,
        rating: 5.5,
        status: "Draft",
      },
      {
        product: "Chlo",
        sku: "SKU-2868",
        price: 540,
        rating: 0.1,
        status: "Pending",
      },
      {
        product: "Diannne",
        sku: "SKU-8742",
        price: 746,
        rating: 6.3,
        status: "Publish",
      },
      {
        product: "Ludvig",
        sku: "SKU-1846",
        price: 415,
        rating: 1.1,
        status: "Publish",
      },
      {
        product: "Ruperta",
        sku: "SKU-2037",
        price: 640,
        rating: 6.2,
        status: "Pending",
      },
    ],
    []
  );

  const columns = useMemo(
    () => [
      {
        Header: "Product",
        accessor: "product",
        Cell: ({ value }) => (
          <div className="product-cell">
            <img
              src={`https://via.placeholder.com/50`}
              alt={value}
              className="product-image"
            />
            {value}
          </div>
        ),
      },
      {
        Header: "SKU",
        accessor: "sku",
      },
      {
        Header: "Price",
        accessor: "price",
        Cell: ({ value }) => `$${value.toFixed(2)}`,
      },
      {
        Header: "Rating",
        accessor: "rating",
        Cell: ({ value }) => <span className="rating">⭐ {value}</span>,
      },
      {
        Header: "Status",
        accessor: "status",
        Cell: ({ value }) => {
          const statusClasses = {
            Pending: "status-pending",
            Draft: "status-draft",
            Publish: "status-publish",
          };
          return (
            <span className={`status ${statusClasses[value]}`}>{value}</span>
          );
        },
      },
      {
        Header: "Action",
        Cell: () => (
          <div className="action-buttons">
            <button className="edit-btn">✏️</button>
            <button className="view-btn">👁️</button>
          </div>
        ),
      },
    ],
    []
  );

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable({
      columns,
      data,
    });

  return (
    <>
      <PageBreadcrumb title="Food List" subName="Foods" />
      <Row>
        <Col xs={12}>
          <Card
            style={{
              border: "none",
              background: theme.colors.almostWhite,
              padding: "10px",
            }}
          >
            <Card.Header
              style={{ border: "none", background: theme.colors.almostWhite }}
            >
              <div className="d-flex justify-content-between align-items-center">
                <h4 className="header-title">Food List</h4>
                <Button
                  style={{
                    backgroundColor: theme.colors.orangeYellow,
                    border: "none",
                    borderRadius: "4px",
                    padding: "5px 10px",
                    fontSize: "17px",
                    textAlign: "center",
                  }}
                >
                  <BsPlus size="30" /> Add New Food
                </Button>
              </div>
            </Card.Header>
            <Card.Body
              style={{
                border: "none",
                background: theme.colors.almostWhite,
                padding: "10px",
              }}
            >
              <table {...getTableProps()} className="product-table">
                <thead>
                  {headerGroups.map((headerGroup) => (
                    <tr {...headerGroup.getHeaderGroupProps()}>
                      {headerGroup.headers.map((column) => (
                        <th {...column.getHeaderProps()}>
                          {column.render("Header")}
                        </th>
                      ))}
                    </tr>
                  ))}
                </thead>
                <tbody {...getTableBodyProps()}>
                  {rows.map((row) => {
                    prepareRow(row);
                    return (
                      <tr {...row.getRowProps()}>
                        {row.cells.map((cell) => (
                          <td {...cell.getCellProps()}>
                            {cell.render("Cell")}
                          </td>
                        ))}
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </>
  );
};

export default List;
