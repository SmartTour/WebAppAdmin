export function sortZone(zones) {
  zones.sort((a, b) => {
    return a["order"] - b["order"];
  });
  return zones;
}
export function setSortZone(zones) {
  zones.map((zone, index) => {
    zone["order"] = index;
  });
}
