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
            current_temperature(int): current temperature of the hex
            current_humidity(int): current humidity of the hex


        returns:
            (Biome): Initialised Biome object
        """
        self.name = name
        self.allowable_weathers = allowable_weathers
        self.base_temp = base_temp
        self.base_humidity = base_humidity

    def apply_weather_modifier(self, weather):
        """This function applies the weather modifiers from selected weather

        args:
            weather (Weather): Weather object to apply to biome

        returns:
            (Temperature): Modified temperature of Hex
            (Humidity): Modified humidity of Hex
        """
        modified_temp = self.base_temp + weather.temp_modifier
        modified_humidity = max(0, self.base_humidity + weather.humidity_modifier)
        return modified_temp, modified_humidity

    def test_all_weathers(self):
        """test the results of applying a weather to the biome"""
        outcomes = []
        for weather in self.allowable_weathers:
            temp, hum = self.apply_weather_modifier(weather)
            outcome = {"biome": weather.name, "temp": temp, "humidity": hum}
            outcomes.append(outcome)
        return outcomes


if __name__ == '__main__':

    # Define some test weathers7
    from weather import Weather
    rain = Weather("rain", 3, 5, -5, 10)
    snow = Weather("Snow", 5, 7, -20, 10)
    sunny = Weather("Sunny", 1, 10, 10, -30)
    mountain_weathers = [rain, snow]
    #desert_weathers = [rain, sunny]

    # Create test Biome
    test_biome = Biome("mountain", mountain_weathers, 20, 50)
    test_biome2 = Biome("desert", [rain, sunny], 40, 5)
    print(test_biome2.test_all_weathers())
    #print(test_biome.apply_weather_modifier(rain))
