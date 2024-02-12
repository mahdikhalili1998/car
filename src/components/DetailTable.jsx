import React from "react";
import styles from "../css/detail.module.css";
function DetailTable({ detail }) {
  // console.log(detail);
  return (
    <div className={styles.tableContainer}>
      {detail.map((item) => (
        <table className={styles.table} key={item.images.map((num) => num.id)}>
          <thead>
            <tr style={{ color: "var(--detail)" }}>
              <th>Color </th>
              <th>Engine </th>
              <th colSpan={2}>Features </th>
              <th>Fuel Type </th>
              <th>HorsePower </th>
              <th>Make </th>
              <th>Mileage </th>
              <th>Model </th>
              <th>Price </th>
              <th>Transmission </th>
              <th>Year </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{item.color}</td>
              <td>{item.engine}</td>
              <td className={styles.features}>
                {item.features.map((sub) =>
                  sub.map((fub) => <p key={fub.id}>{fub.options}</p>)
                )}
              </td>
              <td>{item.fuelType}</td>
              <td>{item.horsePower}</td>
              <td>{item.make}</td>
              <td>{item.mileage}</td>
              <td>{item.model}</td>
              <td>{item.price}</td>
              <td>{item.transmission}</td>
              <td>{item.year}</td>
            </tr>
          </tbody>
        </table>
      ))}
    </div>
  );
}

export default DetailTable;
