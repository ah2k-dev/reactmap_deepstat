import { useMap } from "react-leaflet";
import { useEffect } from "react";
const RecenterAutomatically = (props) => {
  const map = useMap();
  console.log(props);
  map.setView([props.lat, props.lng], props.zoom);
  // useEffect(() => {
  // }, [props.position]);
  return null;
};

export default RecenterAutomatically;
