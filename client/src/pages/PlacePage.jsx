import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const PlacePage = () => {
  const { id } = useParams();
  const [place, setPlace] = useState(null);

  useEffect(() => {
    if (!id) {
      return;
    }

    axios.get(`/places/${id}`).then((response) => {
      setPlace(response.data);
    });
  }, [id]);

  if (!place) return "";

  return (
    <div className="mt-4 py-8 -mx-20 px-20 bg-gray-100">
      <h1 className="text-2xl ">{place.title}</h1>
      <a target="_blank" href={"https://maps.google.com/?=" + place.address}>
        {place.address}
      </a>
    </div>
  );
};

export default PlacePage;
