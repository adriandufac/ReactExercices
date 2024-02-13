import React, { useState } from "react";
import { Item } from "../../Interfaces";

interface ExpenseListProps {
  items: Item[];
  filter: string;
  onDelete: (id: number) => void;
}
const ExpenseList = ({ items, onDelete, filter }: ExpenseListProps) => {
  const [selectedCategories, setSelectedCategories] = useState(filter);
  /* const [items2, setItems] = useState(items); */
  return (
    <table className="table table-bordered">
      <thead>
        <tr>
          <th scope="col">
            <strong>Description</strong>
          </th>
          <th scope="col">
            <strong>Amount</strong>
          </th>
          <th scope="col">
            <strong>Category</strong>
          </th>
          <th scope="col"></th>
        </tr>
      </thead>
      <tbody>
        {items.map(
          (item) =>
            (selectedCategories === "All" ||
              item.category === selectedCategories) && (
              <tr key={item.id}>
                <th scope="col">{item.description}</th>
                <th scope="col">{item.number}</th>
                <th scope="col">{item.category}</th>
                <th>
                  <button
                    type="button"
                    className="btn btn-red btn-outline-danger"
                    onClick={() => onDelete(item.id)}
                  >
                    Delete
                  </button>
                </th>
              </tr>
            )
        )}
      </tbody>
      <tfoot>
        <tr>
          <th>Total</th>
          <th>
            ${items.reduce((acc, item) => item.number + acc, 0).toFixed(2)}
          </th>
          <th></th>
          <th></th>
        </tr>
      </tfoot>
    </table>
  );
};

export default ExpenseList;
