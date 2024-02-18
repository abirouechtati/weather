export class WeatherDTO {
  coord: Coord = new Coord();
  weather: Weather[] = [];
  base: string = '';
  main: Main = new Main();
  visibility: number = 0;
  wind: Wind = new Wind();
  rain: Rain = new Rain();
  clouds: Clouds = new Clouds();
  dt: number = 0;
  sys: Sys = new Sys();
  timezone: number = 0;
  id: number = 0;
  name: string = '';
  cod: number = 0;
}

export class Coord {
  lon: number = 0;
  lat: number = 0;
}

export class Weather {
  id: number = 0;
  main: string = '';
  description: string = '';
  icon: string = '';
}

export class Main {
  temp: number = 0;
  feels_like: number = 0;
  temp_min: number = 0;
  temp_max: number = 0;
  pressure: number = 0;
  humidity: number = 0;
  sea_level: number = 0;
  grnd_level: number = 0;
}

export class Wind {
  speed: number = 0;
  deg: number = 0;
  gust: number = 0;
}

export class Rain {
  '1h': number = 0;
}

export class Clouds {
  all: number = 0;
}

export class Sys {
  type: number = 0;
  id: number = 0;
  country: string = '';
  sunrise: number = 0;
  sunset: number = 0;
}
