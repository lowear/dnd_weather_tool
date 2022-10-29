"""This file contains the information for the weather modifiers
    e.g. name, humitidy, temperature"""

class Biome():
    """Defines table of weather types and midifiers"""

    def __init__(self, name, allowable_weathers, base_temp, base_humidity):
        """This function defines the spicific biome type
        
        args: 
            name (str): the name of the biome type
            allowable_weathers (list(weather)): types of weather that could occur
            base_temp (int): temperature of biome in celcius
            base_humidity (int): humidity of the hex in percentage 

            
        returns:
            (Biome): Initialised Biome object
        """
        self.name = None
        self.allowable_weathers = None
        self.base_temp = None
        self.base_humidity = None
        self.current_temperature = None
        self.current_humidity = None

    def apply_weather_modifier(self, weather):
        """This function applies the weather modifiers from selected weather
        
        args:
            current_temperature (int): the current temperature of the Hex
            current_humidity (int): the current humidity of the Hex
        
        
        returns:
            (Temperature): Modified temperature of Hex
            (Humidity): Modified humidity of Hex"""

        raise NotImplementedError


if __name__ == '__main__':
    test_hex = Biome("mountain", "list", 20, 50)
    test_hex.apply_weather_modifier("rain")

