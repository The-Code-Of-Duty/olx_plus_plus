import React from "react";
import Link from "@mui/material/Link";
import Container from '@mui/material/Container';
import "./Category.scss"

export default function Category() {
  return (
    <div className="category">
      <Container>
      <div className="category-bar">
        <h4>Category</h4>
        <div className="category-list">
          <ul>
            <li>
              <Link href="#" underline="hover">
                Car
              </Link>
            </li>
            <li>
              <Link href="#" underline="hover">
                Motorcycles
              </Link>
            </li>
            <li>
              <Link href="#" underline="hover">
                Mobile Phones
              </Link>
            </li>
            <li>
              <Link href="#" underline="hover">
                Scooters
              </Link>
            </li>
            <li>
              <Link href="#" underline="hover">
                For Rent
              </Link>
            </li>
          </ul>
        </div>
      </div>
      </Container>
    </div>
  );
}
