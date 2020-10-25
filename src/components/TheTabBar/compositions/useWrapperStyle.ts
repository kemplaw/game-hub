import { computed, ComputedRef, reactive } from 'vue'

interface DestructionProps {
  value: any
}

interface PositionStyle {
  position: string
  left: string | number
  bottom?: string | number
  top?: string | number
  marginTop: string
}

export function usePositionStyle(
  isFixed: DestructionProps,
  position: DestructionProps
): ComputedRef<PositionStyle | null> {
  return computed(() => {
    if (!isFixed.value) return null

    const positionStyle = reactive<PositionStyle>({
      position: 'fixed',
      left: 0,
      marginTop: '58px'
    })

    if (position.value === 'bottom') {
      positionStyle['bottom'] = 0
    } else {
      positionStyle['top'] = 0
    }

    return positionStyle
  })
}
