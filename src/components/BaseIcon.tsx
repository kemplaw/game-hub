import { App, defineComponent, toRefs } from 'vue'

interface F {
  a: string
  b: boolean
}

export default (Vue: App) => {
  Vue.component(
    'BaseIcon',
    defineComponent({
      name: 'BaseIconComponent',
      props: {
        icon: {
          type: String,
          default: ''
        }
      },
      setup(props) {
        const iconWrapperStyle = {
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }
        const { icon } = toRefs(props)

        return () => (
          <div style={iconWrapperStyle}>
            <img src={icon.value} />
          </div>
        )
      }
    })
  )
}
