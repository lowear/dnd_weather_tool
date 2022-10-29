""" This file contains a class to represent a hex on a map """


class Hex():
    """Defines the paramaters inside a weather hex"""

    def __init__(self, x_coord, y_coord, biome):
        """ This function creates a new hex object
        
        Args:
            x_coord (int): x coordinate of this hex
            y_coord (int): y coordinate of this hex
            biome (Biome): biome object that the hex is
            
        Returns:
            (Hex): Initialised hex object
        """
        self.horizontal = x_coord
        self.vertical = y_coord
        self.biome = biome
        self.weather = None
        self.weather_duration = 0

    def get_humidity(self):
        """ This function calculates the humidity of the hex
        
        Args:
            None
            
        Returns:
            (float): The humidity of the hex
        """
    
    def get_temperature(self):
        """ This function calculates the humidity of the hex
        
        Args:
            None
            
        Returns:
            (float): The temperature of the hex
        """
    
    def remaining_duration(self):
        """how long is left of the current weather in the selected hex"""
        raise NotImplementedError


if __name__ == '__main__':
    test_hex = Hex(1, 1, "test")
    test_hex.get_humidity()