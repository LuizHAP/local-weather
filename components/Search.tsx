import {Autocomplete} from '@mantine/core'
import {useDebouncedValue} from '@mantine/hooks'
import {useState} from 'react'
import {FiMapPin} from 'react-icons/fi'
import {useWeatherContext} from '~/components/WeatherProvider'
import usePlaces from '~/lib/usePlaces'

export default function Search() {
  const {location, setLocation} = useWeatherContext()
  const [value, setValue] = useState(location)
  const [debounced] = useDebouncedValue(value, 400)
  const {locations} = usePlaces(debounced)

  const places =
    !!locations && locations.length > 0
      ? locations
      : [
          'New York, NY',
          'Los Angeles, CA',
          'Chicago, IL',
          'Houston, TX',
          'Phoenix, AZ',
          'Philadelphia, PA',
          'San Antonio, TX',
          'San Diego, CA',
          'Dallas, TX',
          'San Jose, CA'
        ]

  return (
    <Autocomplete
      aria-label="Enter the name of your location"
      data={places}
      icon={<FiMapPin />}
      limit={10}
      onChange={setValue}
      onItemSubmit={(item) => setLocation(item.value)}
      placeholder="Enter the name of your location"
      size="lg"
      transition="pop-top-left"
      transitionDuration={100}
      transitionTimingFunction="ease"
      value={value}
    />
  )
}
