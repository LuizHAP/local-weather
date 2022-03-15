import {Center, Text} from '@mantine/core'
import {useWeatherContext} from '~/components/WeatherProvider'
import {formatTemperature} from '~/lib/formatters'
import Icon from './Icon'

export default function CurrentConditions() {
  const {
    weather: {
      current: {
        weather: [{icon}],
        temp
      }
    },
    tempUnit
  } = useWeatherContext()

  return (
    <Center>
      <Text
        align="center"
        component="span"
        gradient={{from: 'indigo', to: 'cyan', deg: 45}}
        style={{
          fontSize: '8rem',
          lineHeight: 1,
          margin: 0
        }}
        variant="gradient"
        weight={700}
      >
        {formatTemperature(tempUnit, temp)}
      </Text>
      <Icon icon={icon} />
    </Center>
  )
}
