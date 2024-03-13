

function BirdList() {
  const birdList = [
    "Northern Cardinal", "Blue Jay", "American Robin", "Red-winged Blackbird",
    "Great Blue Heron", "Mourning Dove", "American Goldfinch", "House Finch",
    "Ladder-backed Woodpecker", "White-crowned Sparrow", "House Sparrow",
    "Red-tailed Hawk", "Common Grackle", "European Starling", "Eastern Bluebird",
    "American Crow", "Black-capped Chickadee"
  ];

  return (
    <div>
      <h2>Bird List</h2>
      <ul>
        {birdList.map((bird, index) => (
          <li key={index}>{bird}</li>
        ))}
      </ul>
    </div>
  );
}

export default BirdList;
