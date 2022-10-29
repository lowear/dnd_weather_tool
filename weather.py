"""File containing all weather inforamtion and modifiers"""

class Weather():
    """defines all the available weathers"""

    def __init__(self, name, min_duration, max_duration, temp_modifier, humidity_modifier, icon_filepath):
        """containes all referances to all the information kept with all individual weather options
        
        arg:
            name(str) = the name of the weather
            min_duration(int) = minimum amount of time the weather lasts for
            max_duration(int) = maximum amount of time the weather lasts for
            temp_modifier(int) = value to modify the base temp of the hex biome
            humidity_modifier(int) = value to modify the base humidity of the hex biome
            icon_filepath(str) = location of the icon associated with the weather
            
        return:
            (Weather) = returns list of allowable weathers
            """
        
        self.name = name
        self.min_duration = min_duration
        self.max_duration = max_duration
        self.temp_modifier = temp_modifier
        self.humidity_modifier = humidity_modifier
        self.icon_filepath = icon_filepath

        raise NotImplementedError

if __name__ == '__main__':
    test_hex = Weather("mountain", 2, 6, 5, 30, "test")
    