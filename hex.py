""" This file contains a class to represent a hex on a map """

import random
from weather import Weather


class Hex():
    """Defines the paramaters inside a weather hex"""

    def __init__(self, x_coord, y_coord, biome):
        """ This function creates a new hex object
        
        Args:
            x_coord (int): x coordinate of this hex
            y_coord (int): y coordinate of this hex
            biome (Biome): biome object that the hex is
            weather: randomly choose a random weather from the approved list
            weather_duration: choose a random weather duration of choisen weather
            
        Returns:
            (Hex): Initialised hex object
        """
        self.horizontal = x_coord
        self.vertical = y_coord
        self.biome = biome
        self.weather = random.choice(self.biome.allowable_weathers)
        self.weather_duration = random.randint(self.weather.min_duration, self.weather.max_duration)

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
    def get_weather_duration(self):
        """function to get the duration that the weather will last for"""
        return self.weather_duration
    
    def remaining_duration(self):
        """how long is left of the current weather in the selected hex"""

    def get_current_temp(self):
        """this function aquires the current temperature of the hex"""
        return self.biome.base_temp + self.weather.temp_modifier
    
    def get_current_hum(self):
        """this function aquires the current humidity of the hex"""
        return self.biome.base_humidity + self.weather.humidity_modifier

    def get_surrounding_humidity(self):
        """this function is to aquire the average humidity of the surrounding hexes"""
        
        outcomes = []
        for humidity in Hex:
            hum = self.get_current_hum(test_hex2, test_hex3, test_hex4, test_hex5, test_hex6, test_hex7)
            outcome = {"humidity": hum}
            outcomes.append(outcome)
        return outcomes


if __name__ == '__main__':

    from weather import Weather
    rain = Weather("rain", 3, 5, -5, 10)
    snow = Weather("Snow", 5, 7, -20, 10)
    sunny = Weather("Sunny", 1, 10, 10, -30)
    mountain_weathers = [rain, snow]
   
    from biome import Biome
    test_biome = Biome("mountains", mountain_weathers, 20, 50)

    test_hex = Hex(1, 1, test_biome)
    test_hex2 = Hex(1, 0, test_biome)
    test_hex3 = Hex(2, 0, test_biome)
    test_hex4 = Hex(0, 1, test_biome)
    test_hex5 = Hex(2, 1, test_biome)
    test_hex6 = Hex(1, 2, test_biome)
    test_hex7 = Hex(2, 2, test_biome)

    test_hex.get_humidity()
    test_hex.get_current_temp()
    print("test_hex")
    print(test_hex.weather.name)
    print(test_hex.get_weather_duration())
    print(test_hex.get_current_hum())
    print(test_hex.get_current_temp())
    #print(test_hex.get_surrounding_humidity())

    test_hex2.get_humidity()
    test_hex2.get_current_temp()
    print("test_hex2")
    print(test_hex2.weather.name)
    print(test_hex2.get_weather_duration())
    print(test_hex2.get_current_hum())
    print(test_hex2.get_current_temp())

    