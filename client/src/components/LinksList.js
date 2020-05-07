import React from 'react';
import { Link } from 'react-router-dom';

export const LinksList = ({ links }) => {
  if (!links.length) {
    return <p className="center">Links are not existing</p>
  }
  return (

    <table>
      <thead>
        <tr>
          <th>N</th>
          <th>Date</th>
          <th>Origin</th>
          <th>Shorten</th>
          <th>Count</th>
          <th>Open</th>
        </tr>
      </thead>

      <tbody>
        {links.map((link, index) => {
          return (
            <tr key={link._id}>
              <td>{index + 1}</td>
              <td>{link.date}</td>
              <td>{link.from}</td>
              <td>{link.to}</td>
              <td>{link.clicks}</td>
              <td>
                <Link to={`/detail/${link._id}`}>OPEN</Link>
              </td>
            </tr>
          )
        })}

      </tbody>
    </table>
  )
}
