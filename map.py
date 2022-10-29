"""File containing the top level class, contains the overall map
    and asks for hex data"""


class Map():
    """Defines the map and all its children"""

    def __init__(self, name, file_path, horizontal, vertical):
        """The main map and its file location
        
        arg:
            name(str) = name of the map
            file_path(str) = image of map
            horizontal(int) = horizontal position of the hex on the screen
            vertical(int) = vertical position of the hex on the screen
        
        return:
            (Map) = returm the world map"""
        
        self.name = name
        self.file_path = file_path
        self.horizontal = horizontal
        self.vertical = vertical

    def add_hex(self, name, horizontal, vertical):
        """To define the location of the hexes in the screen
        
        arg:
            name(str) = number of the hex in a list
            horizontal(int) = horizontal position of the hex on the screen
            vertical(int) = vertical position of the hex on the screen
        
        return:
            (add_hex) = return coordinate of the selected hex"""
        

    def get_weather(self):
        """To get the new weather values"""


