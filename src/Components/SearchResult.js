import React from 'react'
import UserDataContext from '../Context/UserData/UserDataContext';
import { useContext } from 'react';
import { useEffect } from 'react';

export default function SearchResult() {
  const userData = useContext(UserDataContext);

  useEffect(
    () => {

      function searchVideoData() {
        let userObject = {
          "search_string": userData.searchQuery,
          "email": localStorage.getItem("userEmail")
        }

        fetch(`${userData.backendApi}/searchVideo/`, {
          method: "POST",
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(userObject),
        }).then(response => response.json()).then((data) => {

          if (data.status === 200) {
            if (data.response === "No result found") {
              document.getElementById("searchResult").innerHTML = `
<h4 class="text-center my-4">📑No Search Results found for the term <i>"${userData.searchQuery}"</i><h4>
`
            }
            else {
              console.log(data);
            }
          }
          else {
            console.log(data);
          }
        });
      }

      searchVideoData();
    })

  return (
    <div id="searchResult">
      <h2 className="text-center my-4">Search Results for <i>"{userData.searchQuery}"</i></h2>
    </div>

  )
}
