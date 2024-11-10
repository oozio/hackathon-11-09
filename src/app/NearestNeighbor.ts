import { kdTree } from 'kd-tree-javascript';

interface Point {
  latitude: number;
  longitude: number;
};

// Haversine distance formula
const haversineDistance = (point1: Point, point2: Point): number => {
  const toRadians = (degree: number) => degree * Math.PI / 180;
  
  const R = 6371; // Earth radius in km
  const lat1 = toRadians(point1.latitude);
  const lon1 = toRadians(point1.longitude);
  const lat2 = toRadians(point2.latitude);
  const lon2 = toRadians(point2.longitude);
  
  const dLat = lat2 - lat1;
  const dLon = lon2 - lon1;
  
  const a = Math.sin(dLat / 2) * Math.sin(dLat / 2) +
            Math.cos(lat1) * Math.cos(lat2) *
            Math.sin(dLon / 2) * Math.sin(dLon / 2);
  
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  
  return R * c; // Distance in kilometers
};

export const generateTree = (points: Point[]): kdTree<Point> => {
  // Create the KDTree
  const tree = new kdTree(points, haversineDistance, ['latitude', 'longitude']);

  return tree;
};

export const interpolateKNN = (tree: kdTree<Point>, target: Point, k: number): Point[] => {
  // Perform a search for the closest k points
  const nearestNeighbors = tree.nearest(target, k);
  
  // Extract the closest k points
  return nearestNeighbors.map(([point]) => point);
};
