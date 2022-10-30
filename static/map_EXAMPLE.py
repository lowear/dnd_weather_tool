
class Map():

    def __init__(self):
        self.hexes = []

    def add_hex(self, x_coord, y_coord, biome):
        """ Creates a new hex in the map """
        new_hex = Hex(x_coord, y_coord, biome)
        self.hexes.append(new_hex)

    def update(self):
        """ Iterate through each hex and generate new weather """
        for hex in self.hexes:

            # For example, hex 1,1

            # Step 1: Find positional relationship to surrounding hexes
            if hex.y_coord % 2 == 0: #(hex.y is even)
                # Look using even set of relationships
                relationships = [
                    {"x_rel": -1, "y_rel": -1},
                    {"x_rel": -1, "y_rel": -1},
                    {"x_rel": -1, "y_rel": -1},
                    {"x_rel": -1, "y_rel": -1},
                    {"x_rel": -1, "y_rel": -1},
                    {"x_rel": -1, "y_rel": -1},
                ]
            else:
                # Look using odd set of relationships
                relationships = [
                    {"x_rel": -1, "y_rel": -1},
                    {"x_rel": -1, "y_rel": -1},
                    {"x_rel": -1, "y_rel": -1},
                    {"x_rel": -1, "y_rel": -1},
                    {"x_rel": -1, "y_rel": -1},
                    {"x_rel": -1, "y_rel": -1},
                ]

            # Step 2: Find temp in each of those hexes
            # create list to store temperatures of 6 surrounding hexes
            surrounding_temps = []

            # for each relationship to my neighboring hexes
            for neighbor in relationships:
                # Calculate that neighbor hex's x and y coordinates
                neighbors_x = hex.x + neighbor["x_rel"]
                neighbors_y = hex.y + neighbor["y_rel"]

                # Loop through the list of all hexes until I find the hex with that x/y coordinate
                for neighbor_hex in self.hexes:
                    if neighbor_hex.x == neighbors_x and neighbor_hex.y == neighbors_y:

                        # Add the found hex's temperature to my list of neighboring temps
                        surrounding_temps.append(neighbor_hex.get_temperature())

                        # stop this loop: I've found what I'm looking for!
                        break