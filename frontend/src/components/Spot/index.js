import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { oneSpot } from "../../store/spots";
import { Link, useParams } from "react-router-dom";

const Spots = () => {
  const dispatch = useDispatch();
  const { spotId } = useParams();

  useEffect(() => {
    dispatch(oneSpot());
  }, [dispatch]);

  const userSpots = useSelector((state) => state.spots.userSpots);
  console.log("USER SPOTS:", userSpots);

  const loggedInUser = useSelector((state) => {
    console.log(state);
    return state.session.user;
  });

  // useSelector((state) =>
  //   state.spot.find((ele) => {
  //     return ele.id == spotId;
  //   })
  // ),

  // inefficient - should be using a single resource route

  return (
    <div className="spots">
      <div>
        {loggedInUser && (
          <div>
            <h1>
              More information about {" "}
              {userSpots[spotId].name}:
            </h1>
            {userSpots && (
              <ul>
                <li>{userSpots[spotId].name}</li>
                <li>${userSpots[spotId].price}/day</li>
                <li>{userSpots[spotId].price}</li>
              </ul>
            )}
          </div>
        )}
      </div>
      {/* until userspots exists, dont render */}
      {/* {userSpots && (
        <div>
          <h3>{userSpots[spotId].name}</h3>
        </div>
      )} */}
      {/* {userSpots &&
        userSpots.map((spot) => (
          <Link to={`/spots/${spot.id}`}>
            <div className="spot-container" key={spot.id}>
              <h2>{spot.name}</h2>
              <p>{spot.description}</p>
              <img className="spot-image" src={spot.imageLink} />
            </div>
          </Link>
        ))} */}
    </div>
  );
};

export default Spots;
